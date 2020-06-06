import { GameResponse } from "../Models/Games";
// @ts-ignore
import NodeCache from "node-cache";

class GameListCache {

    private cache: NodeCache;

    constructor(ttl: number) {
        this.cache = new NodeCache({stdTTL: ttl, checkperiod: ttl * 0.2, useClones: false});
    }

    get(key: number, cb: any){
        const gameInfo = this.cache.get<GameResponse>(key);
        if (gameInfo) return Promise.resolve(gameInfo);

        return cb.then((res: GameResponse) => {
            this.cache.set(key, res);
        });
    }

    del(keys: number[]){
        this.cache.del(keys);
    }

    flush(){
        this.cache.flushAll();
    }
}

export default GameListCache;
