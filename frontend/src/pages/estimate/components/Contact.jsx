import "../css/estimate.css"
import Form from "../../../shared/components/Form";

const Contact = () => {
  /* Posicionarse al inicio de la pagina */
  window.addEventListener('load', function() {
    const topElement = document.getElementById('top');
    topElement.scrollIntoView();
  });
  
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
      <div className="imagenHeaderContact">
          <div className="textosContact">
            <h1 className="h1Contact">CONTACTO</h1>
            <h3 className="h3Contact">¿Tenés alguna duda o consulta? Completá el formulario a continuación y uno de nuestros especialistas se pondrá en contacto con vos para brindarte más información y asesoramiento personalizado sobre Innovados.</h3>
          </div>
      </div>
      <Form />
    </div>
  )
}

export default Contact