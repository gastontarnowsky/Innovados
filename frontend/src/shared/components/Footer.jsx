import "../css/footer.css"
import sitioweb from "../../assets/assetsPresentation/WWW.png"

export const Footer = () => {
    return (
        <footer className="footer">

            <div className="logoFooter">
                <p>Innova<span>dos</span></p>
                <div className="contenedorImgFooter">
                            <img src={sitioweb} alt="logo sitio web www" className="imgFooter"  />
                </div>
            </div>

            <div className="linksDivFooter">
                <a href="#presentacion" className="linksFooter">
                    Servicios
                </a>
                <a href="#presentacion" className="linksFooter">
                    Proyectos
                </a>

                <a href="#sobrenosotros" className="linksFooter">
                    Sobre Nosotros
                </a>

                <button
                    type="button"
                    className="linkPresupuestoFooter"
                >Contáctanos</button>

            </div>
        </footer>
    )
}

export default Footer;