import axios from 'axios';

const API_ENDPOINT = "https://api.steampowered.com/ISteamApps/GetAppList/v2/"

export function getAllGames(req: any, res: any) {
    axios.get(API_ENDPOINT).then(response => {
        try {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(response.data));            
        } catch (error) {
            console.log(error);
        }
    }).catch(err => {throw err});
    return res.status(200);
}