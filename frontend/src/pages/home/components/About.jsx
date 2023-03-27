import "../css/about.css"
import wwwIcon from "../../../assets/assetsAbout/wwwIcon.png"
import CMSIcon from "../../../assets/assetsAbout/CMSIcon.png"
import ERPIcon from "../../../assets/assetsAbout/ERPIcon.png"
import CRMIcon from "../../../assets/assetsAbout/CRMIcon.png"
import APPIcon from "../../../assets/assetsAbout/APPIcon.png"
import EcommerceIcon from "../../../assets/assetsAbout/E-commerceIcon.png"
import WhyInnovados from "../../about/components/WhyInnovados"

export const About = () => {
  return (
    <>
      <section className="seccion">
        <div className="titulo">
          <h1>Con un equipo de programadores experimentados y de diseñadores muy creativos y detallistas llevamos tu idea a una aplicación web y/o movil.</h1>
        </div>
        <div className="contenedorCajas">
          <div className="cajas">
            <div className="tituloImagen">
              <img src={wwwIcon} />
              <h3>Sitios Web</h3>
            </div>
            <p>Creamos sitios web personalizados y atractivos, nos adaptamos a cualquier rama: blogs, portales de noticias y hasta sistemas empresariales. Además, nos mantenemos actualizados con las últimas tecnologías para garantizar que nuestros sitios web sean modernos y funcionales.</p>
          </div>
          <div className="cajas">
            <div className="tituloImagen tituloImagen2">
              <img src={CMSIcon} />
              <h3>Sistema de Gestión de Contenido</h3>
            </div>
            <p>Los CMS les permiten administrar fácilmente el contenido de su sitio web o aplicación. Desde galerías de fotos hasta foros de discusión y páginas de destino. Permitiendo a nuestros clientes enfocarse en su contenido en lugar de la complejidad técnica.</p>
          </div>
          <div className="cajas">
            <div className="tituloImagen">
              <img src={ERPIcon} />
              <h3>Planificación de Recursos Empresariales</h3>
            </div>
            <p>Estos sistemas realizan una gestión eficiente y efectiva en los recursos empresariales, desde la planificación de la producción hasta la gestión de inventarios y la contabilidad. Adaptamos cada ERP perfectamente a su estructura y procesos empresariales.</p>
          </div>
          <div className="cajas">
            <div className="tituloImagen tituloImagen2">
              <img src={CRMIcon} />
              <h3>Gestión de Relación con el Cliente</h3>
            </div>
            <p>En nuestra empresa de desarrollo de software, brindamos soluciones de CRM para mejorar la interacción y comunicación con los clientes. Desde la gestión de contactos hasta la automatización de ventas y servicios.</p>
          </div>
          <div className="cajas">
            <div className="tituloImagen">
              <img src={APPIcon} />
              <h3>Apps</h3>
            </div>
            <p>Entendemos que una gran parte de usuarios ingresan a nuestras plataformas en sus celulares o tablets, por lo cual creamos aplicaciones moviles para mejorar la experiencia del usuario y la eficiencia del negocio. </p>
          </div>
          <div className="cajas">
            <div className="tituloImagen ">
              <img src={EcommerceIcon} />
              <h3>E-Commerce</h3>
            </div>
            <p>Un e-commerce puede aumentar tus ventas y llegar a más clientes potenciales. Déjanos ayudarte a crear una plataforma en línea atractiva, segura y fácil de usar que impulse tu negocio hacia el éxito.</p>
          </div>
        </div>
      </section>
      
      <div className="imagenPresupuesto">
          <h1>Obtén un precio especial</h1>
          <p>Tu nueva aplicación o sitio web te está esperando, y te podemos ayudar. Cuenta tu historia con una experiencia digital atractiva para que tu negocio conecte con las personas</p>
          <button>Pide tu presupuesto</button>
      </div>



      <div>
        <WhyInnovados />
      </div>
    </>
  )
}

export default About