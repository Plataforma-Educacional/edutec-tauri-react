export interface Game {
    title: string;
    type: string;
    comp: string[];
    BNCC: string[];
}

export interface Stage {
    title: string;
    games: Game[];
}