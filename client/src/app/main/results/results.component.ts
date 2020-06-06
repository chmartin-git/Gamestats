import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/Search.service';
import { Game } from 'src/types/Game';
import { Observable, from } from 'rxjs';
import { GameService } from '../../services/Game.service';
import { map, take, tap } from 'rxjs/operators';
import {Mode} from '../../services/Search.enum';

const MAX_RESULT = 50;


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

    games$: Observable<Array<Game>>;
    loading = true;
    mode: Mode;
    limit: number;

    constructor(private searchService: SearchService, private gameService: GameService) {
        this.limit = 20;
        this.mode = this.searchService.getMode;
        this.searchService.mode$.subscribe({
            next: nm => {
                this.mode = nm;
                if (this.mode === Mode.compact) {
                    this.limit = 20;
                }
                else {
                    this.limit = 70; // upper limit
                }
            }
        });
        this.games$ = from([]);
    }

    ngOnInit(): void {
        this.searchService.search$.subscribe({
            next: v => this.gamesFiltered(v)
        });
    }

    imageErrorHandler(event){
        event.target.src = 'assets/images/chain.png';
        event.target.className = 'broken';
    }

    gameClickHandler({appid, name}){
        console.log(`game: ${name} with ID : ${appid} clicked! `);
    }

    gamesFiltered(f: string) {
        if (f.length >= 0) {
            this.games$ = this.gameService.games.pipe(
                tap(_ => this.loading = true),
                map( res => res
                    .filter( e => new RegExp(`(\\s|^)${f.toLowerCase()}`, 'g').test(e.name.toLowerCase()))
                    .sort( (a, b) => a.name.length - b.name.length )
                    .slice(0, MAX_RESULT)
                    ),
                take(1),
                tap(_ => this.loading = false)
            );
        }
    }

    searchGame(appid: number){

    }

    get ModeEnum() { return Mode; }
}
