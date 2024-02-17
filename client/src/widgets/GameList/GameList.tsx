import { FC, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/appStore'
import { setGamesAmount } from '../../entities/data/api/dataSlice'
import GameItem from '../../entities/game/ui/GameItem'
import { filterGamesList } from '../../shared/helpers/helperFunctions'
import styles from './GameList.module.scss'


const GameList: FC = () => {

    const dispatch = useAppDispatch()

    const games = useAppSelector((state) => state.data.games)
    const groups = useAppSelector((state) => state.data.groups)
    const filters = useAppSelector((state) => state.filters)
    const columnsAmount = useAppSelector((state) => state.filters.columnsAmount)

    const filteredGames = filterGamesList(
        games,
        filters.providerFilter,
        filters.groupFilter,
        filters.sorting,
        filters.searchValue,
        groups
    )

    useEffect(() => {
        dispatch(setGamesAmount(filteredGames.length))
    }, [filteredGames, dispatch])
    
    return (
        <section 
            className={styles.container} 
            style={{gridTemplateColumns: `repeat(${columnsAmount}, 1fr)`}}
        >
            {
                filteredGames?.map(game => {
                    return (
                        <GameItem 
                            key={game.id} 
                            id={game.id}
                            name={game.name}
                            provider={game.provider}
                            cover={game.cover}
                            coverLarge={game.coverLarge}
                            date={game.date} 
                        />
                    )
                })
            }
        </section>
    )
}


export default GameList