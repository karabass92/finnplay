import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { dataApi } from '../../store/api/dataApi'
import { setGames, setGroups, setProviders } from '../../store/reducers/dataSlice'
import { logout } from '../../store/reducers/authSlice'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import logoutImg from '../../assets/img/logout.svg'
import styles from './Header.module.css'


const Header: FC = () => {

    const dispatch = useAppDispatch()
    const { data, isError, isLoading } = dataApi.useGetDataQuery()
    const login = useAppSelector((state) => state.session.user?.login)
    const logoutHandler = () => dispatch(logout())

    useEffect(() => {
        if (!isError && !isLoading && data && login) {
            dispatch(setGames(data.games))
            dispatch(setProviders(data.providers))
            dispatch(setGroups(data.groups))
        }
    }, [data, isError, isLoading, dispatch, login])

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <section className={styles.userInfo}>
                    <p>{login}</p>
                    <img src={logoutImg} alt='logout' onClick={logoutHandler} />
                </section>
            </div>
        </header>
    )
}


export default Header