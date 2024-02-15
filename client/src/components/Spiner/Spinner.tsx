import { FC } from 'react'
import spinner from '../../assets/img/spinner.svg'
import styles from './Spinner.module.scss'


const Spinner: FC = () => {
    return (
        <img src={spinner} alt="loading..." className={styles.spinner} />
    )
}


export default Spinner