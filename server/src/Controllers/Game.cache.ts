import { Game } from "../Models/Games";
import NodeCache from "node-cache";

class GameCache {

    private cache: NodeCache;

    constructor(ttl: number) {
        this.cache = new NodeCache({stdTTL: ttl, checkperiod: ttl * 0.2, useClones: false});
    }

    get(key: number, cb: any){
        const gameInfo = this.cache.get<Game>(key);
        if (gameInfo) return Promise.resolve(gameInfo);

        return cb.then( (res: Game) => {
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

export default GameCache;
