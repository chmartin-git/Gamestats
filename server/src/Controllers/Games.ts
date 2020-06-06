import axios from 'axios';
import {GameInfo} from "../Models/Games";
import InfoCache from "./Info.cache";

const API_ENDPOINTS = {
    games: "https://api.steampowered.com/ISteamApps/GetAppList/v2/",
    players: "https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&appid=$"
}

const cache = new InfoCache(120);

export function getAllGames(req: any, res: any) {
    console.log`Request of games api`;

    axios.get(API_ENDPOINTS.games).then(response => {
        try {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response.data));            
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }).catch(err => {throw err});
    return res.status(200);
}

export async function getGamePlayers(appid: number){
    axios.get(API_ENDPOINTS.players.replace('$', appid.toString())).then(response => {
        return response.data;
    }).catch(err => {
        throw err;
    });
}

export async function getGameInfo(req: any, res:any){
    const appid = req.params.appid;
    let gameInfo: GameInfo;


}
