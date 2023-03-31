import { useContext } from 'react';
import UIContext from "../../contexts/ui/UIContext";
import "./css/about.css"
import WhyInnovados from "./components/WhyInnovados"
import Solutions from '../../shared/components/Solutions';
import { Link } from 'react-router-dom';

export const About = () => {
    const { background, background1, background2, background3, background4, background5, color, color11, color12, color13, color14, color15, color2, color21, color22, color23, color24, color25, iconSrcWWW, iconSrcCMS, iconSrcERP, iconSrcCRM, iconSrcAPP, iconSrcEcommerce } = useContext(UIContext);
  return (
    <>
      <Solutions />
      
      <div className="imagenPresupuesto">
          <h1>Obtén un precio especial</h1>
          <p>Tu nueva aplicación o sitio web te está esperando, y te podemos ayudar. Cuenta tu historia con una experiencia digital atractiva para que tu negocio conecte con las personas</p>
          <Link to="/estimate" className='botonImagenPresupuestoAbout'>Pide tu presupuesto</Link>
      </div>

      <div>
        <WhyInnovados />
      </div>
    </>
  )
}

export default About