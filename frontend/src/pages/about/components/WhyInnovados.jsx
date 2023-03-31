import "../css/whyInnovados.css"
import { Link } from "react-router-dom"
import Cards from "./Cards"

const WhyInnovados = () => {
  return (
    <>
    <div className="contenedorWhy" id="sobrenosotros">
        <div className="izquierda">
            <h1>¿Por qué Innovados?</h1>
            <p>Nuestra empresa se dedica a ofrecer soluciones de software personalizadas y de alta calidad, con un enfoque exclusivo en el cliente. Además, nos aseguramos de cumplir con los plazos, brindamos soporte y mantenimiento, para asegurarnos de que nuestros clientes estén satisfechos con el producto final.</p>
            <p>En Innovados, establecemos relaciones de confianza y colaboración con nuestros clientes. Nos aseguramos de entender sus objetivos y necesidades a fondo para poder ofrecer soluciones que no solo cumplan, sino que superen sus expectativas. </p>
            <p>También podés acceder a nuestro panel de servicios donde vas a encontrar herramientas ya desarrolladas y customizables para implementar en tu negocio y aumentar tu productividad.</p>
        </div>

        <div className="derecha">
            <Cards />
        </div>
    </div>
    
    <div className="imagenPresupuestoWhy">
        <h1>¿No sabes cómo empezar? ¡Escribinos!</h1>
        <p>Es más fácil de lo que crees, nosotros nos encargamos de todo.</p>
        <Link to="/estimate" className='botonImagenPresupuestoAboutWhy'>Pide tu presupuesto</Link>
    </div>
    </>
  )
}

export default WhyInnovados;