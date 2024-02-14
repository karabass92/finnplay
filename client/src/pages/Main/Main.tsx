import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { dataApi } from '../../store/api/dataApi'
import { setGames, setGroups, setProviders } from '../../store/reducers/dataSlice'
import { getInitialGameList } from '../../helpers/helperFunctions'
import GameList from '../../components/GameList/GameList'
import FilterSection from '../../components/FilterSection/FilterSection'
import styles from './Main.module.css'


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