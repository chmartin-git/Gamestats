import { Injectable } from '@angular/core'
import { Subject, Observable, from } from 'rxjs';
import { Game } from 'src/types/Game';
import { GameService } from './Game.service';
import { take } from 'rxjs/operators';

@Injectable()
export class SearchService {
    private activated = false;
    private search = '';

    public activated$: Subject<boolean>;
    public search$: Subject<string>;

    constructor(private gameService: GameService){
        this.activated$ = new Subject<boolean>();
        this.search$ = new Subject<string>();
    }

    get isActivated(){
        return this.activated;
    }

    get searchContent(){
        return this.search;
    }

    set updateState(val: boolean){
        this.activated = val;
        this.activated$.next(this.activated);
    }

    set updateSearch(str: string){
        this.search = str;
        this.search$.next(this.search);
    }

}