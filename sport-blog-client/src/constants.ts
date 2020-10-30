import { GameData } from "./entities/entities";
import { INavbarTitle } from "./react/components/presentation/navbar";
import basketball from "./assets/basketball.jpg";
import basketball2 from "./assets/basketball2.jpg";
import basketball3 from "./assets/basketball3.jpg";
import basketball4 from "./assets/basketball4.jpeg";
import basketball5 from "./assets/basketball5.jpg";

import football1 from './assets/football1.jpg';
import football2 from './assets/football2.jpg';
import football3 from './assets/football3.jpg';
import football4 from './assets/football4.jpg';
import football6 from './assets/football6.jpg';


export const navbarTitles:INavbarTitle[] = [
    {title:'Football', route:'football'},
    {title:'basketball', route:'basketball'}
]

export const gameData: GameData = {
    ID: 1,
    TEAM_A: "Barcelona",
    TEAM_B: "Real madrid",
    SCORE_A: 2,
    SCORE_B: 0,
    CATEGORY: "football",
    GAME_DATE: new Date()
}

export const footballImagesArr = [
    basketball, basketball2, basketball3, basketball4, basketball5 
]

export const basketballImagesArr = [
    football1, football2, football3, football4, football6
]