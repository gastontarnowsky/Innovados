import "../css/presentation.css"
import { RiMailLine, RiAccountBoxLine, RiWhatsappLine } from "react-icons/ri";

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
            </div>
            <form 
                className="formulario"
            >   
                <div className="tituloForm">
                    <p>
                        ¡Consulta tu presupuesto!
                    </p>
                </div>
                <div className="divInput">
                    <RiMailLine
                        className="iconoInput"
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        className="input"
                    />
                </div>
                <div className="divInput">
                    <RiAccountBoxLine
                        className="iconoInput"
                    />
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        className="input"
                    />
                </div>
                <div className="divInput">
                    <RiWhatsappLine
                        className="iconoInput"
                    />
                    <input 
                        type="text" 
                        placeholder="WhatsApp"
                        className="input"
                    />
                </div>
                <div className="divBoton">
                    <input
                        type="submit"
                        value="Enviar"
                        className="botonPresupuesto"
                    />
                </div>
                
            </form>
        </div>
    </main>
  )
}

export default Presentation