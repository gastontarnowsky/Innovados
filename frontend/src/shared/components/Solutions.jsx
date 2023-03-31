import { useContext } from 'react';
import UIContext from "../../contexts/ui/UIContext";
import { Link } from 'react-router-dom';
import "../css/solutions.css"

const Solutions = () => {
    const { background, background1, background2, background3, background4, background5, color, color11, color12, color13, color14, color15, color2, color21, color22, color23, color24, color25, iconSrcWWW, iconSrcCMS, iconSrcERP, iconSrcCRM, iconSrcAPP, iconSrcEcommerce } = useContext(UIContext);
  return (
    <section className="seccion">
        <div className="titulo">
          <h1>Con un equipo de programadores experimentados y de diseñadores muy creativos y detallistas llevamos tu idea a una aplicación web y/o movil.</h1>
            <h3>Elegí la Solución que requiere tu Empresa para solicitar el presupuesto gratis</h3>
        </div>
        <div className="contenedorCajas">
          
          <Link to="/estimate?option=sitiosWeb" title="Pedir Presupuesto" className="cajas" id="sitiosweb" style={{ background: background, transition: "background 0.5s" }}>
            <div className="tituloImagen" >
              <img src={iconSrcWWW} alt="icono sitio web www" />
              <h3 style={{ color: color2, transition: "color 0.5s" }}>Sitios Web</h3>
            </div>
            <p style={{ color: color, transition: "color 0.5s" }}>Creamos sitios web personalizados y atractivos, nos adaptamos a cualquier rama: blogs, portales de noticias y hasta sistemas empresariales. Además, nos mantenemos actualizados con las últimas tecnologías para garantizar que nuestros sitios web sean modernos y funcionales.</p>
          </Link>
          
          <Link to="/estimate?option=CMS" title="Pedir Presupuesto" className="cajas" id="CMS" style={{ background: background1, transition: "background 0.5s" }}>
            <div className="tituloImagen tituloImagen2">
              <img src={iconSrcCMS} alt="icono Sistema de Gestion de Contenido CMS" />
              <h3 style={{ color: color21, transition: "color 0.5s" }}>Sistema de Gestión de Contenido</h3>
            </div>
            <p style={{ color: color11, transition: "color 0.5s" }}>Los CMS les permiten administrar fácilmente el contenido de su sitio web o aplicación. Desde galerías de fotos hasta foros de discusión y páginas de destino. Permitiendo a nuestros clientes enfocarse en su contenido en lugar de la complejidad técnica.</p>
          </Link>
          
          <Link to="/estimate?option=ERP" title="Pedir Presupuesto" className="cajas" id="ERP" style={{ background: background2, transition: "background 0.5s" }}>
            <div className="tituloImagen">
              <img src={iconSrcERP} alt="icono Planificación de Recursos Empresariales ERP" />
              <h3 style={{ color: color22, transition: "color 0.5s" }}>Planificación de Recursos Empresariales</h3>
            </div>
            <p style={{ color: color12, transition: "color 0.5s" }}>Estos sistemas realizan una gestión eficiente y efectiva en los recursos empresariales, desde la planificación de la producción hasta la gestión de inventarios y la contabilidad. Adaptamos cada ERP perfectamente a su estructura y procesos empresariales.</p>
          </Link>
          
          <Link to="/estimate?option=CRM" title="Pedir Presupuesto" className="cajas" id="CRM" style={{ background: background3, transition: "background 0.5s" }}>
            <div className="tituloImagen tituloImagen2">
              <img src={iconSrcCRM} alt="icono Gestión de Relación con el Cliente CRM" />
              <h3 style={{ color: color23, transition: "color 0.5s" }}>Gestión de Relación con el Cliente</h3>
            </div>
            <p style={{ color: color13, transition: "color 0.5s" }}>En nuestra empresa de desarrollo de software, brindamos soluciones de CRM para mejorar la interacción y comunicación con los clientes. Desde la gestión de contactos hasta la automatización de ventas y servicios.</p>
          </Link>
         
          <Link to="/estimate?option=APP" title="Pedir Presupuesto" className="cajas" id="APPS" style={{ background: background4, transition: "background 0.5s" }}>
            <div className="tituloImagen">
              <img src={iconSrcAPP} alt="icono aplicación móvil APPS" />
              <h3 style={{ color: color24, transition: "color 0.5s" }}>Aplicaciones Móviles</h3>
            </div>
            <p style={{ color: color14, transition: "color 0.5s" }}>Entendemos que una gran parte de usuarios ingresan a nuestras plataformas en sus celulares o tablets, por lo cual creamos APP's para mejorar la experiencia del usuario y la eficiencia del negocio. </p>
          </Link>
          
          <Link to="/estimate?option=ecommerce" title="Pedir Presupuesto" className="cajas" id="ECommerce" style={{ background: background5, transition: "background 0.5s" }}>
            <div className="tituloImagen ">
              <img src={iconSrcEcommerce} alt="icono e-commerce" />
              <h3 style={{ color: color25, transition: "color 0.5s" }}>E-Commerce</h3>
            </div>
            <p style={{ color: color15, transition: "color 0.5s" }}>Un e-commerce puede aumentar tus ventas y llegar a más clientes potenciales. Déjanos ayudarte a crear una plataforma en línea atractiva, segura y fácil de usar que impulse tu negocio hacia el éxito.</p>
          </Link>
        </div>
      </section>
  )
}

export default Solutions