import { useContext } from 'react';
import "../css/header.css"
import { Link } from "react-router-dom"
import UIContext from "../../../contexts/UIContext"

const Header = () => {
  const { scrolled } = useContext(UIContext)
  return (
    <header className={`header ${scrolled ? "scroll" : ""}`}>
      <nav className="navegacion">
        <ul className="logo">
          <Link to="/" className="linklogo">
            Innova<span>dos</span>
          </Link>
        </ul>
        <ul className="opciones">
          <li>
            <Link className="linkServicios">
              Servicios
            </Link>
          </li>
          <li>
            <Link className="linkProyectos">
              Proyectos
            </Link>
          </li>
          <li>
            <Link className="linkSobreNosotros">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link className="linkPresupuesto">
              Pedir Presupuesto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header