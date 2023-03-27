import "../css/whyInnovados.css"
import support from "../../../assets/whyInnovados/support.svg"
import security from "../../../assets/whyInnovados/security.svg"
import scalability from "../../../assets/whyInnovados/scalability.svg"
import block from "../../../assets/whyInnovados/block.svg"
import responsive from "../../../assets/whyInnovados/responsive.svg"
import diseño from "../../../assets/whyInnovados/diseño.svg"
import avion from "../../../assets/whyInnovados/avion.svg"
import search from "../../../assets/whyInnovados/search.svg"


const WhyInnovados = () => {
  return (
    <div className="contenedorWhy">
        <div className="izquierda">
            <h1>¿Por qué Innovados?</h1>
            <p>Nuestra empresa se dedica a ofrecer soluciones de software personalizadas y de alta calidad, con un enfoque exclusivo en el cliente. Además, nos aseguramos de cumplir con los plazos, brindamos soporte y mantenimiento, para asegurarnos de que nuestros clientes estén satisfechos con el producto final.</p>
            <p>En Innovados, establecemos relaciones de confianza y colaboración con nuestros clientes. Nos aseguramos de entender sus objetivos y necesidades a fondo para poder ofrecer soluciones que no solo cumplan, sino que superen sus expectativas. </p>
            <p>También podés acceder a nuestro panel de servicios donde vas a encontrar herramientas ya desarrolladas y customizables para implementar en tu negocio y aumentar tu productividad.</p>
        </div>

        <div className="derecha">
            {/*** PRIMER Tarjeta ***/}
            <div className="derechaDiv">
                <div className="">
                    <img src={support} alt="Ilustración de Adaptación" className="imagen" />
                </div>
                <div className=''>
                    <p className="derechaP">
                        Soporte Técnico
                    </p>
                </div>
            </div>

            {/*** SEGUNDA Tarjeta ***/}
            <div className="derechaDiv">
                <div className="">
                    <img src={security} alt="Ilustración de diseño" className="imagen"/>
                </div>
                <div className=''>
                    <p className="derechaP">
                        Seguridad de datos
                    </p>
                </div>
            </div>

            {/*** TERCER Tarjeta 
            <div className="derechaDiv">
                <div className="">
                    <img src={scalability} alt="Ilustración de Velocidad" className="imagen"/>
                </div>
                <div className=''>
                    <p className="derechaP">
                        Escalabilidad sin límites
                    </p>
                </div>
            </div>
***/}
            {/*** CUARTA Tarjeta 
            <div className="derechaDiv">
                <div className="">
                    <img src={block} alt="Ilustración de Optimización" className="imagen"/>
                </div>
                <div className=''>
                    <p className="derechaP">
                        Integración eficiente
                    </p>
                </div>
            </div>
***/}
            {/*** QUINTA Tarjeta ***/}
        <div className="derechaDiv">
            <div className="">
                <img src={responsive} alt="Ilustración de Adaptación" className="imagen" />
            </div>
            <div className=''>
                <p className="derechaP">
                    Páginas Web adaptativas
                </p>
            </div>
        </div>

        {/*** SEXTA Tarjeta ***/}
        <div className="derechaDiv">
            <div className="">
                <img src={diseño} alt="Ilustración de diseño" className="imagen"/>
            </div>
            <div className=''>
                <p className="derechaP">
                    Diseño intuitivo y amigable
                </p>
            </div>
        </div>

        {/*** SEPTIMA Tarjeta ***/}
        <div className="derechaDiv">
            <div className="">
                <img src={avion} alt="Ilustración de Velocidad" className="imagen"/>
            </div>
            <div className=''>
                <p className="derechaP">
                    Velocidad y funcionalidad
                </p>
            </div> 
        </div>

        {/*** OCTAVA Tarjeta ***/}
        <div className="derechaDiv">
            <div className="">
                <img src={search} alt="Ilustración de Optimización" className="imagenSEO"/>
            </div>
            <div className=''>
                <p className="derechaP">
                    Posicionamiento SEO
                </p>
            </div>
        </div>


        </div>
    </div>
  )
}

export default WhyInnovados