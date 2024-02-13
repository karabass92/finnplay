import { FC } from 'react'
import styles from './Sorter.module.css'


type Props = {
    sortType:string | null,
    setSortType: (sortType: string) => void
}


const Sorter: FC<Props> = ({
    sortType,
    setSortType
}) => {
    return (
        <section className={styles.container}>
            <h2>Sorting</h2>
            <div className={styles.sorterContainer}>
                <p 
                    className={sortType === 'A-Z' ? styles.checked : styles.default}
                    onClick={() => setSortType('A-Z')}
                >
                    <span>A-Z</span>
                </p>
                <p 
                    className={sortType === 'Z-A' ? styles.checked : styles.default}
                    onClick={() => setSortType('Z-A')}
                >
                    <span>Z-A</span>
                </p>
                <p 
                    className={sortType === 'Newest' ? styles.checked : styles.default}
                    onClick={() => setSortType('Newest')}
                >
                    <span>Newest</span>
                </p>
            </div>
        </section>
    )
}


export default Sorter