import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/authSlice'
import dataSlice from './reducers/dataSlice'
import filterSlice from './reducers/filterSlice'
import { dataApi } from './api/dataApi'


export const store = configureStore({
    reducer: {
        session: authSlice,
        data: dataSlice,
        filters: filterSlice,
        [dataApi.reducerPath]: dataApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(dataApi.middleware)
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>