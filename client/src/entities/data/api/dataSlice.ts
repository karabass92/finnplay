import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../app/appStore'
import { IProvider } from '@/entities/provider/model/types'
import { IGroup } from '@/entities/group/model/types'
import { IGame } from '@/entities/game/model/types'
import { IData } from '../model/types'


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