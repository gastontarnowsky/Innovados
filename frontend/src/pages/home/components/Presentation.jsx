
import { useContext } from 'react';
import UIContext from "../../../contexts/ui/UIContext";

import "../css/presentation.css"
import { RiMailLine, RiAccountBoxLine, RiWhatsappLine } from "react-icons/ri";
import sitioweb from "../../../assets/assetsPresentation/WWW.png"
import ecommerce from "../../../assets/assetsPresentation/ecommerce.png"
import CMS from "../../../assets/assetsPresentation/CMS2.png"
import ERP from "../../../assets/assetsPresentation/ERP2.png"
import CRM from "../../../assets/assetsPresentation/CRM2.png"
import apps from "../../../assets/assetsPresentation/Apps.png"

const Presentation = () => {
    const { handleColor1, handleColor2, handleColor3, handleColor4, handleColor5, handleColor6 } = useContext(UIContext);
  return (
    <main className="contenedor">
        <div className="titulos">
            <h3>Creadores de software</h3>
            <h1>Innovados</h1>
        </div>
        <div className="dividir">
            <div className="descripciones">
                <p>Somos una empresa de desarrollo software donde abarcamos distintas areas y especialidades de la programación para poder ofrecerte el mejor producto y servicio.</p>
                <p className="pTipos">Elegí la solución que más se adecúa a tu empresa</p>
                <div className="contenedorTipos">
                    <a href="#sitiosweb" className="tiposDiv" onClick={handleColor1}>
                        <div className="contenedorImg">
                            <img src={sitioweb} className="img1" alt="icono sitio web www" />
                        </div>
                        <p>Sitios Web</p>
                    </a>
                    <a href="#CMS" className="tiposDiv" onClick={handleColor2}>
                        <div className="contenedorImg">
                            <img src={CMS} className="img2" alt="icono Gestión de Contenido CMS" />
                        </div>
                        <p>Gestión de Contenido</p>
                    </a>
                    <a href="#ERP" className="tiposDiv" onClick={handleColor3}>
                        <div className="contenedorImg">
                            <img src={ERP} className="img3" alt="icono Recursos Empresariales ERP" />
                        </div>
                        <p>Recursos Empresariales</p>
                    </a>
                    <a href="#CRM" className="tiposDiv" onClick={handleColor4}>
                        <div className="contenedorImg">
                            <img src={CRM} className="img4" alt="icono Relación con el cliente CRM" />
                        </div>
                        <p>Relación con el Cliente</p>
                    </a>
                    <a href="#APPS" className="tiposDiv" onClick={handleColor5}>
                        <div className="contenedorImg">
                            <img src={apps} className="img5" alt="icono Aplicaciones móviles APPS" />
                        </div>
                        <p>Aplicaciones</p>
                    </a>
                    <a href="#ECommerce" className="tiposDiv" onClick={handleColor6}>
                        <div className="contenedorImg">
                            <img src={ecommerce} className="img6" alt="icono e-commerce" />
                        </div>
                        <p>E-commerce</p>
                    </a>
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
                            autoComplete="off"
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