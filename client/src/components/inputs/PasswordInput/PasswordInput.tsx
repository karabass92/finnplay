import { FC, useState } from 'react'
import eye from '../../../assets/img/eye.svg'
import styles from './PasswordInput.module.scss'


type Props = {
    password: string,
    setPassword: (password: string) => void
}


const PasswordInput: FC<Props> = ({
    password,
    setPassword
}) => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const onFocusHandler = () => {
        setIsFocused(true)
        setIsError(false)
    }

    const onBlurHandler = () => {
        setIsFocused(false)
        if(!password) setIsError(true)
    }

    return (
        <div className={styles.container}>
            <input 
                type={isVisible ? 'text' : 'password'} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                className={isError ? styles.isErrorField : ''}
            />
            <img src={eye} alt="visible" className={styles.visible} onClick={() => setIsVisible(!isVisible)}  />
            <span className={(isFocused || password) ? styles.active : styles.placeholder}>
                Password
            </span>
            {
                isError 
                    ? <span className={styles.errorMessage}>Field is required!</span> 
                    : null
            }
        </div>
    )
}


export default PasswordInput