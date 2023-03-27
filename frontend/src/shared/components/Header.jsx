import { useContext } from 'react';
import { Link } from 'react-router-dom';

import UIContext from '../../contexts/ui/UIContext'

import '../css/header.css';

export const Header = () => {
  const { scrolled, sidebar } = useContext(UIContext)
  return (
    <header className={`header ${sidebar ? 'sidebarLeft0' : 'sidebarLeftFull'} ${scrolled ? 'scroll' : ''}`}>
      <nav className='navegacion'>

        <ul className='logo'>
          <Link to='/' className='linkLogo'>
            Innova<span className='linklogospan'>dos</span>
          </Link>
        </ul>

        <ul className='opciones'>
          <li>
            <Link className='links'>
              Servicios
            </Link>
          </li>
          <li>
            <Link className='links'>
              Proyectos
            </Link>
          </li>
          <li>
            <Link className='links'>
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link className='linkPresupuesto'>
              Pedir Presupuesto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;