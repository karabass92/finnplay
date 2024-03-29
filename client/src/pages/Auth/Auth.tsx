import { FC, useState, useEffect } from 'react'
import { RootState } from '@/app/appStore'
import { useAppDispatch, useAppSelector } from '../../app/appStore'
import { useNavigate, useLocation } from 'react-router-dom'
import { loginAsync } from '../../entities/auth/api/authSlice'
import LoginInput from '../../features/LoginInput/LoginInput'
import PasswordInput from '../../features/PasswordInput/PasswordInput'
import Spinner from '../../features/Spiner/Spinner'
import logo from '../../shared/images/logo.svg'
import styles from './Auth.module.scss'


const Auth: FC = () => {

    const isAuth = useAppSelector((state: RootState) => state.session.isAuth)
    const isLoading = useAppSelector((state: RootState) => state.session.isLoading)
    const error = useAppSelector((state: RootState) => state.session.error)
    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        if (isAuth) {
            if (location.state?.prev_location) {
                navigate(location.state.prev_location);
            } else {
                navigate("/");
            }
        }
    }, [isAuth, navigate])

    const onLoginClick = () => dispatch(loginAsync({login, password}))

    return (
        <div className={styles.container}>
            <main className={styles.formContainer}>
                <img src={logo} alt='logo' />
                <section className={styles.inputSection}>
                    <LoginInput login={login} setLogin={setLogin} />
                    <PasswordInput password={password} setPassword={setPassword} />
                </section>
                <button onClick={onLoginClick}>
                    {isLoading ? <Spinner /> : 'Login'}
                </button>
                { error ?
                    <span>
                        Login or password is incorrect!
                    </span>
                    : null
                }
            </main>
        </div>
    )
}


export default Auth