import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL, gamesURL, headers } from '../../constants/api'
import { IData } from '../../interfaces/interfaces'


export const dataApi = createApi({
    reducerPath: 'dataApi',
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        headers: headers
    }),
    endpoints: (build) => ({
        getData: build.query<IData, void>({
            query: () => ({
                url: gamesURL,
            })
        })
    })
})