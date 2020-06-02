export interface Game {
    appid: number;
    name: string;
}

export interface GameResponse {
    applist: {
        apps: Array<Game>
    };
}

export interface GameInfo {
    game: Game;
    players: number;
    popularity: number;
}