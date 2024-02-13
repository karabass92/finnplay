import { FC } from 'react'
import GameList from '../../components/GameList/GameList'
import FilterSection from '../../components/FilterSection/FilterSection'
import styles from './Main.module.css'


const Main: FC = () => {
    return (
        <main className={styles.container}>
            <GameList />
            <FilterSection />
        </main>
    )
}


export default Main