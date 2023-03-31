import "../css/whyInnovados.css"

import support from "../../../assets/whyInnovados/support.svg"
import security from "../../../assets/whyInnovados/security.svg"
import responsive from "../../../assets/whyInnovados/responsive.svg"
import diseño from "../../../assets/whyInnovados/diseño.svg"
import avion from "../../../assets/whyInnovados/avion.svg"
import search from "../../../assets/whyInnovados/search.svg"

const Cards = () => {
  return (
        <>
            <div className="derechaDiv">
                <img src={support} alt="Ilustración de Adaptación" className="imagen" />
                <p className="derechaP">
                    Soporte Técnico
                </p>
            </div>

            <div className="derechaDiv">
                <img src={security} alt="Ilustración de diseño" className="imagen"/>
                <p className="derechaP">
                    Seguridad de datos
                </p>
            </div>
            
            <div className="derechaDiv">
                <img src={responsive} alt="Ilustración de Adaptación" className="imagen" />
                <p className="derechaP">
                    Páginas Web adaptativas
                </p>
            </div>

            <div className="derechaDiv">
                <img src={diseño} alt="Ilustración de diseño" className="imagen"/>
                <p className="derechaP">
                    Diseño intuitivo y amigable
                </p>
            </div>

            <div className="derechaDiv">
                <img src={avion} alt="Ilustración de Velocidad" className="imagen"/>
                <p className="derechaP">
                    Velocidad y funcionalidad
                </p>
            </div>

            <div className="derechaDiv">
                <img src={search} alt="Ilustración de Optimización" className="imagenSEO"/>
                <p className="derechaP">
                    Posicionamiento SEO
                </p>
            </div>
        </>
  )
}

export default Cards