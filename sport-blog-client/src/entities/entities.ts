export interface GameData {
    ID: number,
    TEAM_A: string,
    TEAM_B: string,
    SCORE_A: number,
    SCORE_B: number,
    GAME_DATE: Date,
    CATEGORY: string
}

export interface IAction {
    type:string
}