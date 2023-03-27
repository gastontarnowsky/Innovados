import "../css/footer.css"

export const Footer = () => {


    return (
        <footer className="footer">

            <div className="logoFooter">
                <p>Innova<span>dos</span></p>
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