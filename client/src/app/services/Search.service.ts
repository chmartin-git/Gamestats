import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Mode } from './Search.enum';

@Injectable()
export class SearchService {
    private activated = false;
    private search = '';
    private mode: Mode = Mode.compact;

    public activated$: Subject<boolean>;
    public search$: Subject<string>;
    public mode$: Subject<Mode>;

    constructor(){
        this.activated$ = new Subject<boolean>();
        this.search$ = new Subject<string>();
        this.mode$ = new Subject<Mode>();
    }

    get isActivated(){
        return this.activated;
    }
    get getMode(){
        return this.mode;
    }

    get searchContent(){
        return this.search;
    }

    set updateState(val: boolean){
        this.activated = val;
        this.activated$.next(this.activated);
    }

    set updateMode(nm: Mode){
        this.mode = nm;
        this.mode$.next(this.mode);
    }

    set updateSearch(str: string){
        this.search = str;
        this.search$.next(this.search);
    }

}
