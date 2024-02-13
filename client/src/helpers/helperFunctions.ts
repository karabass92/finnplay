import { IGame, IGroup } from '../interfaces/interfaces'


// const sortByName = (a: IGame, b: IGame) => {
//     return a.name.localeCompare(b.name)
// }

const sortByName = (a: IGame, b: IGame) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0;
}

const sortByNameReverse = (a: IGame, b: IGame) => {
    return b.name.localeCompare(a.name)
}

const sortByDate = (a: IGame, b: IGame) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
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