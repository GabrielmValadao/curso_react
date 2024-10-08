// style
import styles from './Navbar.module.css'

// hooks
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

// navlink
import { NavLink } from 'react-router-dom' 

const Navbar = () => {
    const  { user } = useAuthValue();
    const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.brand} to='/'>
        Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to='/' className={({isActive}) => isActive ? styles.active : ''}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => isActive ? styles.active : ''}>
                    Sobre
                </NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to='/login' className={({isActive}) => isActive ? styles.active : ''}>
                            Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/register' className={({isActive}) => isActive ? styles.active : ''}>
                            Cadastrar
                        </NavLink>
                    </li>
                </>
            )}

            {user && (
                <>
                    <li>
                        <NavLink to='/posts/create' className={({isActive}) => isActive ? styles.active : ''}>
                            Novo Post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard' className={({isActive}) => isActive ? styles.active : ''}>
                            Dashboard
                        </NavLink>
                    </li>
                </>
            )}
            {user && (
                <li>
                    <button onClick={() => user && logout()}>Sair</button>
                </li>
            )}
        </ul>
    </nav>
  )
}

export default Navbar