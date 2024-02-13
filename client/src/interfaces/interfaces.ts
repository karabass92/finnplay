export interface IUser {
    id: number,
    login: string,
    token: string
}

export interface IUserData {
    login: string,
    password: string
}

export interface IUserMe {
    id: number,
    login: string
}

export interface IGame {
    id: number,
    name: string,
    provider: number,
    cover: string,
    coverLarge: string,
    date: string
}

export interface IProvider {
    id: number,
    name: string,
    logo: string
}

export interface IGroup {
    id: number,
    name: string,
    games: number[]
}

export interface IData {
    games: IGame[],
    providers: IProvider[],
    groups: IGroup[],
    gamesAmount: number
}

export interface IFilters {
    providerFilter: number[],
    groupFilter: number[],
    sorting: string | null,
    columnsAmount: number,
    searchValue: string
}

export interface IMultiselectInputOptions {
    id: number,
    name: string
}