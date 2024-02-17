import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/appStore'
import { logout } from '../../entities/auth/api/authSlice'
import { Link } from 'react-router-dom'
import logo from '../../shared/images/logo.svg'
import logoutImg from '../../shared/images/logout.svg'
import styles from './Header.module.scss'


const Header: FC = () => {

    const dispatch = useAppDispatch()
    const login = useAppSelector((state) => state.session.user?.login)
    const logoutHandler = () => dispatch(logout())

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