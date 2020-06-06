"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameInfo = exports.getGamePlayers = exports.getAllGames = void 0;
const axios_1 = __importDefault(require("axios"));
const Info_cache_1 = __importDefault(require("./Info.cache"));
const API_ENDPOINTS = {
    games: "https://api.steampowered.com/ISteamApps/GetAppList/v2/",
    players: "https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&appid=$"
};
const cache = new Info_cache_1.default(120);
function getAllGames(req, res) {
    console.log `Request of games api`;
    axios_1.default.get(API_ENDPOINTS.games).then(response => {
        try {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response.data));
        }
        catch (error) {
            console.log(error);
            return res.status(500);
        }
    }).catch(err => { throw err; });
    return res.status(200);
}
exports.getAllGames = getAllGames;
function getGamePlayers(appid) {
    return __awaiter(this, void 0, void 0, function* () {
        axios_1.default.get(API_ENDPOINTS.players.replace('$', appid.toString())).then(response => {
            return response.data;
        }).catch(err => {
            throw err;
        });
    });
}
exports.getGamePlayers = getGamePlayers;
function getGameInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const appid = req.params.appid;
        let gameInfo;
    });
}
exports.getGameInfo = getGameInfo;
