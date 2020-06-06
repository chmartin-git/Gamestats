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
    name: string;
    appid: number;
    players: number;
    images: {
        background: string;
        illustrations: string[];
    };
    resume: string;
    rating: number;
}
