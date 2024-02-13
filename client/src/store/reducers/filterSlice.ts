import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilters } from '../../interfaces/interfaces'
import { RootState } from '../store'


const initialState: IFilters = {
    providerFilter: [],
    groupFilter: [],
    sorting: null,
    columnsAmount: 4,
    searchValue: ''
}


const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setProviderFilter: (state, action: PayloadAction<number[]>) => {
            state.providerFilter = action.payload
        },
        setGroupFilter: (state, action: PayloadAction<number[]>) => {
            state.groupFilter = action.payload
        },
        setSortingType: (state, action: PayloadAction<string>) => {
            state.sorting = action.payload
        },
        setColumnsAmount: (state, action: PayloadAction<number>) => {
            state.columnsAmount = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        resetAllFilters: (state) => {
            state.providerFilter = []
            state.groupFilter = []
            state.sorting = null
            state.columnsAmount = 4
            state.searchValue = ''
        }
    }
})


export const { 
    setProviderFilter,
    setGroupFilter,
    setSortingType,
    setColumnsAmount,
    setSearchValue,
    resetAllFilters
} = filterSlice.actions
export const selectFilters = (state: RootState) => state.filters
export default filterSlice.reducer