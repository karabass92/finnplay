import { IGame } from '@/entities/game/model/types';
import { IGroup } from '@/entities/group/model/types'



export const sortByName = (a: IGame, b: IGame): number => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0;
}

export const sortByNameReverse = (a: IGame, b: IGame): number => {
    return b.name.localeCompare(a.name)
}

export const sortByDate = (a: IGame, b: IGame): number => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export const getInitialGameList = (
    allGames: IGame[],
    groups: IGroup[]
): IGame[] => {
    let allowedGamesIds: number[] = []
    groups.forEach(el => allowedGamesIds = allowedGamesIds.concat(el.games))
    const allowedGames = allGames.filter(game => allowedGamesIds.includes(game.id))
    return allowedGames
}

export const filterGamesList = (
    allGames: IGame[],
    providerFilter: number[],
    groupFilter: number[],
    sortType: string | null,
    searchValue: string,
    groups: IGroup[]
): IGame[] => {
    let filteredGameList: IGame[] = allGames
    if (providerFilter.length > 0) {
        filteredGameList = allGames.filter(el => {
            return providerFilter.includes(el.provider)
        })
    }
    if (searchValue) {
        filteredGameList = filteredGameList.filter(el => {
            return el.name.trim().toLowerCase().startsWith(searchValue.trim().toLowerCase())
        })
    }
    if (groupFilter.length > 0) {
        let games: number[] = []
        groups.forEach(el => {
            if(groupFilter.includes(el.id)) games = games.concat(el.games)
        })
        filteredGameList = filteredGameList.filter(el => games.includes(el.id))
    }
    switch (sortType) {
        case 'A-Z':
            const sortedByAZ = [...filteredGameList].sort(sortByName)
            return sortedByAZ
        case 'Z-A':
            const sortedByZA = [...filteredGameList].sort(sortByNameReverse)
            return sortedByZA
        case 'Newest':
            const sortedByNewest = [...filteredGameList].sort(sortByDate)
            return sortedByNewest
        default:
            break
    }
    return filteredGameList
}