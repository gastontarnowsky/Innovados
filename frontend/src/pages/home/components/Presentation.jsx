import "../css/presentation.css"
import { RiMailLine, RiAccountBoxLine, RiWhatsappLine } from "react-icons/ri";
import sitioweb from "../../../assets/www.png"
import ecommerce from "../../../assets/ecommerce.png"
import CMS from "../../../assets/CMSRed.png"
import CRM from "../../../assets/CRMRedMinimalista.png"
import ERP from "../../../assets/ERPRed.png"
import apps from "../../../assets/appsRed.png"
const Presentation = () => {
  return (
    <main className="contenedor">
        <div className="titulos">
            <h3>Creadores de software</h3>
            <h1>Innovados</h1>
        </div>
        <div className="dividir">
            <div className="descripciones">
                <p>Somos una empresa de desarrollo software donde abarcamos distintas areas y especialidades de la programación para poder ofrecerte el mejor producto y servicio.</p>
                <div className="contenedorTipos">
                    <div className="tiposDiv">
                        <div className="contenedorImg">
                            <img src={sitioweb} className="img0 img1"  />
                        </div>
                        <p>Sitios Web</p>
                    </div>
                    <div className="tiposDiv">
                        <div className="contenedorImg">
                            <img src={CMS} className="img0 img2" />
                        </div>
                        <p>Gestión de Contenido</p>
                    </div>
                    <div className="tiposDiv">
                        <div className="contenedorImg">
                            <img src={ERP} className="img0 img4" />
                        </div>
                        <p>Planificación de Recursos Empresariales</p>
                    </div>
                    <div className="tiposDiv">
                        <div className="contenedorImg">
                            <img src={CRM} className="img0 img3" />
                        </div>
                        <p>Gestión de Relación con el Cliente</p>
                    </div>
                    <div className="tiposDiv">
                        <div className="contenedorImg">
                            <img src={apps} className="img0 img5" />
                        </div>
                        <p>Apps</p>
                    </div>
                    <div className="tiposDiv">
                        <div className="contenedorImg">
                            <img src={ecommerce} className="img0 img6" />
                        </div>
                        <p>E-commerce</p>
                    </div>
                </div>
            </div>
            <form 
                className="formulario"
            >   
                <fieldset className="contenedorForm">
                    
                    <fieldset className="tituloForm">
                        <legend className="legenda">
                            ¡Consulta tu presupuesto!
                        </legend>
                    </fieldset>
                    <fieldset className="divInput">
                        <RiMailLine
                            className="iconoInput"
                        />
                        <input 
                            type="email" 
                            placeholder="Email"
                            className="input"
                        />
                    </fieldset>
                    <fieldset className="divInput">
                        <RiAccountBoxLine
                            className="iconoInput"
                        />
                        <input 
                            type="text" 
                            placeholder="Nombre"
                            className="input"
                        />
                    </fieldset>
                    <fieldset className="divInput">
                        <RiWhatsappLine
                            className="iconoInput"
                        />
                        <input 
                            type="text" 
                            placeholder="WhatsApp"
                            className="input"
                        />
                    </fieldset>
                    <fieldset className="divBoton">
                        <input
                            type="submit"
                            value="Consultar Gratis"
                            className="botonPresupuesto"
                        />
                    </fieldset>
                    
                </fieldset>
            </form>
        </div>
    </main>
  )
}

export default Presentation