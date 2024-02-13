import { FC, useState } from 'react'
import styles from './LoginInput.module.css'


type Props = {
    login: string,
    setLogin: (login: string) => void
}


const LoginInput: FC<Props> = ({
    login, setLogin
}) => {

    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const onFocusHandler = () => {
        setIsFocused(true)
        setIsError(false)
    }

    const onBlurHandler = () => {
        setIsFocused(false)
        if(!login) setIsError(true)
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                className={isError ? `${styles.loginInput} ${styles.isErrorField}` : styles.loginInput}
            />
            <span className={(isFocused || login) ? styles.active : styles.placeholder}>
                Login
            </span>
            {
                isError 
                    ? <span className={styles.errorMessage}>Field is required!</span> 
                    : null
            }
        </div>
    )
}


export default LoginInput