"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGamePlayers = exports.getAllGames = void 0;
const axios_1 = __importDefault(require("axios"));
const API_ENDPOINTS = {
    games: "https://api.steampowered.com/ISteamApps/GetAppList/v2/",
    players: "https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&appid=$"
};
function getAllGames(req, res) {
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
function getGamePlayers(req, res) {
    // Do verifications here
    const appid = req.params.appid;
    axios_1.default.get(API_ENDPOINTS.players.replace('$', appid)).then(response => {
        try {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response.data));
        }
        catch (error) {
            return res.status(500);
        }
    }).catch(err => { throw err; });
    return res.status(200);
}
exports.getGamePlayers = getGamePlayers;
