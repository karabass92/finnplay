import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL, gamesURL } from '../../../shared/constants/api'
import { IData } from '../model/types'


export const dataApi = createApi({
    reducerPath: 'dataApi',
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
    }),
    endpoints: (build) => ({
        getData: build.query<IData, void>({
            query: () => ({
                url: gamesURL,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('jwt_token'),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        })
    })
})