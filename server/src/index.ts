import express from "express";
import morgan from "morgan";
import { Game, GameResponse } from './Models/Games';
import {getAllGames, getGameInfo} from './Controllers/Games';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan("combined"));


app.get('/api/games', getAllGames);

app.get('/api/game/:appid', getGameInfo);

app.use('/', (req, res, next) => {
    res.status(404).send("Page not found sorry :(");
});

app.listen(8080, (err) => {
    if (err) throw err;
    console.log(" server started ! ");
})
