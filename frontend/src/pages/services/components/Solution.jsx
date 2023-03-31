import Form from "../../../shared/components/Form";
import { Link } from "react-router-dom";
import "../css/services.css"
import Solutions from "../../../shared/components/Solutions";

import support from "../../../assets/whyInnovados/support.svg"
import security from "../../../assets/whyInnovados/security.svg"
import scalability from "../../../assets/whyInnovados/scalability.svg"
import block from "../../../assets/whyInnovados/block.svg"
import responsive from "../../../assets/whyInnovados/responsive.svg"
import diseño from "../../../assets/whyInnovados/diseño.svg"
import avion from "../../../assets/whyInnovados/avion.svg"
import search from "../../../assets/whyInnovados/search.svg"

const Solution = () => {
  return (
    <div id="top">
      <iframe
        src="/estimate"
        style={{ display: "none" }}
        onLoad={() => {
          const topElement = document.getElementById("top");
          topElement.scrollIntoView();
        }}
      />
      <div className="imagenHeaderServices">
          <div className="textosServices">
            <h1 className="h1Services">SERVICIOS</h1>
            <h3 className="h3Services">Nuestro equipo técnico altamente capacitado está a su disposición para brindar soluciones personalizadas y resolver cualquier problema que surja. De esta manera, aseguramos que nuestros clientes reciban un servicio de alta calidad y se sientan respaldados en todo momento.</h3>
          </div>
      </div>
      <div className="contenedorServices">
        <div className="divServiciosServices">
            <div className="imgDesarrolloAMedidaServices"></div> 
            <div className="divTextosServiciosServices">
                <h2>Desarrollo a Medida</h2>
                <p>En Innovados, entendemos que una solución personalizada es vital para satisfacer las necesidades específicas de tu negocio. Es posible que haya probado software prefabricado que no sea lo suficientemente flexible para adaptarse a sus necesidades.</p>
                <p>Con nuestro servicio de software a medida, puede estar seguro de que obtendrá una solución única que se adapta a sus necesidades. Trabajamos en estrecha colaboración con usted para entender sus necesidades y luego creamos una solución de software que cumpla con sus objetivos comerciales.</p>
                <Link to="/estimate" className='buttonInfoServices'>Solicitar más información</Link>
            </div>
        </div>
        <div className="divServiciosServices">
            <div className="imgSoftwarePrefabricadoServicesResponsive"></div> 
            <div className="divTextosServiciosServices">
                <h2>Software Prefabricado</h2>
                <p>Comprendemos la importancia de ofrecer soluciones personalizadas a nuestros clientes, sin embargo, también ofrecemos software prefabricado de alta calidad. Estos productos son una excelente opción para aquellos que buscan una solución más rentable sin comprometer la calidad y la funcionalidad.</p>
                <p>Nuestro software prefabricado se ha desarrollado y probado rigurosamente para garantizar su calidad y eficiencia en diversas situaciones empresariales. Además, ofrecemos opciones de personalización que permiten adaptar el software a las necesidades específicas de cada cliente.</p>
                <Link to="/estimate" className='buttonInfoServices'>Solicitar más información</Link>
            </div>
            <div className="imgSoftwarePrefabricadoServices"></div> 
        </div>
        <div className="divServiciosServices">
            <div className="imgServicioTecnicoServices"></div> 
            <div className="divTextosServiciosServices">
                <h2>Post Venta</h2>
                <p>Una vez terminado el proyecto, empieza nuestro papel de soporte técnico, que garantiza una muy buena calidad en cuanto a soluciones, trabajamos a través de chat en línea, correo electrónico o llamadas telefónicas, nos ocupamos de construir la confianza de los clientes y a mantener la satisfacción completa. En Innovados, proporcionamos actualizaciones y soluciones antes de que los usuarios se encuentren con problemas.</p>
                <Link to="/estimate" className='buttonInfoServices'>Solicitar más información</Link>
            </div>
        </div>
      </div>
      <div className="shadowSolution">
        <Solutions />
      </div>
      <div className="contenedorCardsSolution">
        <div className="h2CardsSolution">
          <h2>Innovados ofrece las mejores características para su sitio o aplicación</h2>
        </div>
        <div className="CardsSolution">
              <div className="divCardsSolution">
                  <img src={support} alt="Ilustración de Adaptación" className="imgCardsSolution" />
                  <div>
                    <p className="titleCardsSolution">Soporte Técnico</p>
                    <p className="textoCardsSolution">Realizamos soporte técnico de alta calidad, ya sea a través de chat en línea, correo electrónico o llamadas telefónicas, puede ayudar a construir la confianza de los clientes y a mantener la satisfacción. Proporcionamos actualizaciones y soluciones antes de que los usuarios se encuentren con problemas.</p>
                  </div>
              </div>

              <div className="divCardsSolution">
                  <img src={security} alt="Ilustración de diseño" className="imgCardsSolution"/>
                  <div>
                    <p className="titleCardsSolution">Seguridad de datos</p>
                    <p className="textoCardsSolution">Es crucial ofrecer software con medidas de seguridad robustas para proteger los datos sensibles de los usuarios. Esto puede incluir cifrado de datos, autenticación de usuarios fuerte, y detección y prevención de intrusiones.</p>
                  </div>
              </div>

              <div className="divCardsSolution">
                  <img src={scalability} alt="Ilustración de Velocidad" className="imgCardsSolution"/>
                  <div>
                    <p className="titleCardsSolution">Escalabilidad sin límites</p>
                    <p className="textoCardsSolution">Un software escalable permite añadir más usuarios, capacidad y características sin afectar el rendimiento o la calidad. Al ofrecer un software escalable, su empresa puede aprovechar oportunidades de crecimiento sin tener que cambiar a una solución diferente en el futuro.</p>
                  </div>
              </div>

              <div className="divCardsSolution">
                  <img src={block} alt="Ilustración de Optimización" className="imgCardsSolution"/>
                  <div>
                    <p className="titleCardsSolution">Integración eficiente</p>
                    <p className="textoCardsSolution">Integrarse con otros sistemas y aplicaciones puede mejorar la eficiencia y la productividad. Al permitir que los datos fluyan sin problemas entre diferentes sistemas, se reduce la necesidad de manualmente ingresar datos repetidos y se eliminan errores de doble ingreso.</p>
                  </div>
              </div>

              <div className="divCardsSolution">
                  <img src={responsive} alt="Ilustración de Adaptación" className="imgCardsSolution" />
                  <div>
                    <p className="titleCardsSolution">Páginas Web adaptativas</p>
                    <p className="textoCardsSolution">Gran porcentaje de las personas acceden a través de diferentes dispositivos. Nuestros sitios web se adaptan y se muestran perfectamente en cualquier tipo de pantallas.</p>
                  </div>
              </div>

              <div className="divCardsSolution">
                  <img src={diseño} alt="Ilustración de diseño" className="imgCardsSolution"/>
                  <div>
                    <p className="titleCardsSolution">Diseño intuitivo y amigable</p>
                    <p className="textoCardsSolution">Todo entra por los ojos. Nos encargamos que el diseño, el esquema de colores y toda la temática de tu web, vaya de manera coherente con la imagen corporativa que tu empresa busca expresar.</p>
                  </div>
              </div>

              <div className="divCardsSolution">
                  <img src={avion} alt="Ilustración de Velocidad" className="imgCardsSolution"/>
                  <div>
                    <p className="titleCardsSolution">Velocidad y funcionalidad</p>
                    <p className="textoCardsSolution">Las páginas web que desarrollamos están optimizadas para cargar de manera rápida y eficaz, para ofrecer una gran experiencia a los visitantes de tu web.</p>
                  </div>
              </div>

              <div className="divCardsSolution">
                  <img src={search} alt="Ilustración de Optimización" className="imgSEOCardsSolution"/>
                  <div>
                    <p className="titleCardsSolution">Posicionamiento SEO</p>
                    <p className="textoCardsSolution">El posicionamiento en motores de búsqueda es vital para el funcionamiento de toda web, por lo tanto, nuestro trabajo garantiza que puedas aparecer en Google y llegar a más personas.</p>
                  </div>
              </div>
        </div>

      </div>
    </div>
  )
}

export default Solution