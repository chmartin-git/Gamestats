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
  prices: {
    store: string;
    price: number;
    date: string;
  }[];
  resume: string;
}
