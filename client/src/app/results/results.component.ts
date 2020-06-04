import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/Search.service';
import { Game } from 'src/types/Game';
import { Observable, from, merge, concat } from 'rxjs';
import { GameService } from '../services/Game.service';
import { map, take, tap, concatMap, mergeMap, defaultIfEmpty } from 'rxjs/operators';

const MAX_RESULT = 50;


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

    games$: Observable<Array<Game>>;
    loading = true;
    constructor(private searchService: SearchService, private gameService: GameService) {
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
                take(1),
                map( res => res
                    .filter( e => new RegExp(`(\\s|^)${f.toLowerCase()}`, 'g').test(e.name.toLowerCase()))
                    .sort( (a, b) => a.name.length - b.name.length )
                    .slice(0, MAX_RESULT)
                    ),
                tap(_ => this.loading = false)
            );
        }
    }

}
