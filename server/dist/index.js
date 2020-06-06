"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const Games_1 = require("./Controllers/Games");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(morgan_1.default("combined"));
app.get('/api/games', Games_1.getAllGames);
app.get('/api/game/:appid', Games_1.getGameInfo);
app.use('/', (req, res, next) => {
    res.status(404).send("Page not found sorry :(");
});
app.listen(8080, (err) => {
    if (err)
        throw err;
    console.log(" server started ! ");
});
