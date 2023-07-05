import {Link, Outlet} from 'react-router-dom'
import Header from './Header'

export default function SharedLayout(){
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}