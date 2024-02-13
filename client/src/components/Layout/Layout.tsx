import { FC, useEffect } from 'react'
import { useAppSelector } from '../../store/hooks'
import Header from '../Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'


const Layout: FC = () => {

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


export default Layout