"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGames = void 0;
const axios_1 = __importDefault(require("axios"));
const API_ENDPOINT = "https://api.steampowered.com/ISteamApps/GetAppList/v2/";
function getAllGames(req, res) {
    axios_1.default.get(API_ENDPOINT).then(response => {
        try {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response.data));
        }
        catch (error) {
            console.log(error);
        }
    }).catch(err => { throw err; });
    return res.status(200);
}
exports.getAllGames = getAllGames;
