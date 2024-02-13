import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IData, IGame, IProvider, IGroup } from '../../interfaces/interfaces'
import { RootState } from '../store'


const initialState: IData = {
    games: [],
    providers: [],
    groups: [],
    gamesAmount: 0
}


const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setGames: (state, action: PayloadAction<IGame[]>) => {
            state.games = action.payload
        },
        setProviders: (state, action: PayloadAction<IProvider[]>) => {
            state.providers = action.payload
        },
        setGroups: (state, action: PayloadAction<IGroup[]>) => {
            state.groups = action.payload
        },
        setGamesAmount: (state, action: PayloadAction<number>) => {
            state.gamesAmount = action.payload
        }
    }
})


export const {
    setGames,
    setProviders,
    setGroups,
    setGamesAmount
} = dataSlice.actions
export const selectData = (state: RootState) => state.data
export default dataSlice.reducer