import { FC, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../appStore'
import Header from '../../widgets/Header/Header'


const BaseLayout: FC = () => {

    const isAuth = useAppSelector((state) => state.session.isAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) navigate("/auth")
    }, [isAuth, navigate])

    return (
        <>
            <Header />
            <Outlet /> 
        </>
    )
}


export default BaseLayout