"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const node_cache_1 = __importDefault(require("node-cache"));
class GameListCache {
    constructor(ttl) {
        this.cache = new node_cache_1.default({ stdTTL: ttl, checkperiod: ttl * 0.2, useClones: false });
    }
    get(key, cb) {
        const gameInfo = this.cache.get(key);
        if (gameInfo)
            return Promise.resolve(gameInfo);
        return cb.then((res) => {
            this.cache.set(key, res);
        });
    }
    del(keys) {
        this.cache.del(keys);
    }
    flush() {
        this.cache.flushAll();
    }
}
exports.default = GameListCache;
