import NodeCache from 'node-cache';
import { GameInfo } from "../Models/Games";

class InfoCache {

    private cache: NodeCache;

    constructor(ttl: number) {
        this.cache = new NodeCache({stdTTL: ttl, checkperiod: ttl * 0.2, useClones: false});
    }

    get(key: number, cb: any){
        const gameInfo = this.cache.get<GameInfo>(key);
        if (gameInfo) return Promise.resolve(gameInfo);

        return cb.then( (res: GameInfo) => {
            this.cache.set(key, res);
        });
    }

    del(keys: string[]){
        this.cache.del(keys);
    }

    flush(){
        this.cache.flushAll();
    }
}

export default InfoCache;
