import axios from 'axios';

const API_ENDPOINTS = {
    games: "https://api.steampowered.com/ISteamApps/GetAppList/v2/",
    players: "https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&appid=$"
}

export function getAllGames(req: any, res: any) {
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

export function getGamePlayers(req: any, res: any){
    // Do verifications here
    const appid = req.params.appid;
    axios.get(API_ENDPOINTS.players.replace('$', appid)).then(response => {
        try {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response.data));            
        } catch (error) {
            return res.status(500);
        }
    }).catch(err => {throw err});
    return res.status(200);
}