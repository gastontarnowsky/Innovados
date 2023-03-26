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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laboriosam magnam, adipisci, voluptatem harum veritatis quibusdam tenetur exercitationem ratione numquam, itaque cum aliquam aspernatur ipsam minima amet totam nihil dolorem!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore deserunt dignissimos sapiente, facere dolore at numquam, veritatis blanditiis voluptas soluta officiis rerum distinctio porro perferendis amet repellendus pariatur quia.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ipsa beatae accusamus voluptatibus assumenda blanditiis? Animi fuga aut cum perferendis, quae laboriosam laudantium dolorum harum repellat mollitia quia quidem eius!</p>
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
                <img src={search} alt="Ilustración de Optimización" className="imagen"/>
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