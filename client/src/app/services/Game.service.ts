import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay, map, switchMap, filter, tap} from 'rxjs/operators';
import {timer} from 'rxjs';
import {Game, GameInfo, GameResponse} from '../../types/Game';


const HOST = 'localhost';
const API_ENDPOINT = `http://${HOST}:8080/api`;


const CACHE_SIZE = 1;
const INTERVAL = 120; // seconds

@Injectable()
export class GameService {

    private cache$: Observable<Array<Game>>;

    constructor(private http: HttpClient) {
    }

    get games() {
        const timer$ = timer(0, INTERVAL * 1000);
        if (!this.cache$) {
            this.cache$ = timer$.pipe(
                switchMap(_ => this.requestGames()),
                shareReplay(CACHE_SIZE)
            );
        }
        return this.cache$;
    }

    private requestGames() {
        return this.http.get<GameResponse>(`${API_ENDPOINT}/games`).pipe(map(response => response.applist.apps));
    }

    private requestGameInfo(id: number) {
        return this.http.get<GameInfo>(`${API_ENDPOINT}/game/${id}`);
    }
}
