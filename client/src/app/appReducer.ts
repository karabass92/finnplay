import { combineReducers } from '@reduxjs/toolkit'
import { dataApi } from '../entities/data/api/dataApi'
import authSlice from '../entities/auth/api/authSlice'
import dataSlice from '../entities/data/api/dataSlice'
import filterSlice from '../entities/filter/api/filterSlice'


export const rootReducer = combineReducers({
    session: authSlice,
    data: dataSlice,
    filters: filterSlice,
    [dataApi.reducerPath]: dataApi.reducer
})