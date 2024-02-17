import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../app/appStore'
import { dataApi } from '../../entities/data/api/dataApi'
import { setGames, setGroups, setProviders } from '../../entities/data/api/dataSlice'
import { getInitialGameList } from '../../shared/helpers/helperFunctions'
import GameList from '../../widgets/GameList/GameList'
import FilterSection from '../../widgets/FilterSection/FilterSection'
import styles from './Main.module.scss'


const Main: FC = () => {

    const dispatch = useAppDispatch()
    const { data, isError, isLoading } = dataApi.useGetDataQuery()
    
    useEffect(() => {
        if (!isError && !isLoading && data) { 
            const games = getInitialGameList(data.games, data.groups)
            dispatch(setGames(games))
            dispatch(setProviders(data.providers))
            dispatch(setGroups(data.groups))
        }
    }, [data, isError, isLoading, dispatch])

    return (
        <main className={styles.container}>
            <GameList />
            <FilterSection />
        </main>
    )
}


export default Main