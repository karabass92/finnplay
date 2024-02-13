import { FC } from 'react'
import { IGame } from '../../interfaces/interfaces'
import styles from './GameItem.module.css'


const GameItem: FC<IGame> = ({
    id,
    name,
    provider,
    cover,
    coverLarge,
    date
}) => {
    return (
        <div className={styles.container}>
            <img src={cover || coverLarge} alt={name} />
        </div>
    )
}


export default GameItem