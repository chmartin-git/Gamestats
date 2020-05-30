import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map, switchMap, filter } from 'rxjs/operators'
import { timer } from 'rxjs'
import { Game, GameResponse } from '../../types/Game'

const API_ENDPOINT = 'http://localhost:8080/api/games';
const CACHE_SIZE = 1;
const INTERVAL = 120 //seconds

const requestHeader = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

@Injectable()
export class GameService {

    private cache$: Observable<Array<Game>>;

    constructor(private http: HttpClient){}

    get games(){
        const timer$ = timer(0, INTERVAL  * 1000);

        if (!this.cache$) {
            this.cache$ = timer$.pipe(
                switchMap(_ => this.requestGames()),
                shareReplay(CACHE_SIZE)
            );
        }
        return this.cache$;
    }

    private requestGames(){
        return this.http.get<GameResponse>(API_ENDPOINT, requestHeader).pipe(map(response => response.applist.apps));
    }
}