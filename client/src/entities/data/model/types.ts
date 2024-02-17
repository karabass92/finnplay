import { IGame } from "@/entities/game/model/types";
import { IGroup } from "@/entities/group/model/types";
import { IProvider } from "@/entities/provider/model/types";


export interface IData {
    games: IGame[],
    providers: IProvider[],
    groups: IGroup[],
    gamesAmount: number
}