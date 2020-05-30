export interface Game {
    appid: number;
    name: string;
}

export interface GameResponse {
    applist: {
        apps: Array<Game>
    };
}