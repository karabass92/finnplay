import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'


const Error: FC = () => {

    const isAuth = useAppSelector((state) => state.session.isAuth)

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        } else {
            navigate('/auth')
        }
    }, [isAuth, navigate])

    return (
        <></>
    )
}


export default Error