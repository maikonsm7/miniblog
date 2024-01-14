import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'
import './NavBar.css'
const NavBar = () => { 
    const { user } = useAuthValue()
    return(
        <div>
            <nav>
            <NavLink to={'/'}>Home</NavLink>
            {!user && (
            <>
            <NavLink to={'/login'}>Entrar</NavLink>
            <NavLink to={'/register'}>Cadastrar</NavLink>
            </>
            )}
            {user && (
            <>
            <NavLink to={'/posts/create'}>Novo Post</NavLink>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </>
            )}
            <NavLink to={'/about'}>Sobre</NavLink>
            </nav>
        </div>
    )
}

export default NavBar