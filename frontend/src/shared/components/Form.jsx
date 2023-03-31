import { useLocation } from 'react-router-dom';
import "../css/form.css"

const Form = () => {
    

    /* El select queda con la opcion seleccionada en los botones de About */
    const location = useLocation();
    const opcionSeleccionada = new URLSearchParams(location.search).get('option');
  return (
    <div className="divFormEstimate">
        <form className="formularioEstimate">
        <input type="text" placeholder="Nombre y Apellido" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Empresa" />
        <input type="text" placeholder="Tel. o WhatsApp" />
        <select type="text" placeholder="Categoría" className="inputSelectEstimate" defaultValue={opcionSeleccionada}>
            <option value="Elegir">-- Elegí la Solución para tu Empresa --</option>
            <option value="sitiosWeb">Sitios Web</option>
            <option value="CMS">Sistema de Gestión de Contenido</option>
            <option value="ERP">Planificación de Recursos Empresariales</option>
            <option value="CRM">Gestión de Relación con el Cliente</option>
            <option value="APP">Aplicación móvil</option>
            <option value="ecommerce">E-commerce</option>
            <option value="otro">Otro</option>
        </select>
        <textarea className="textareaFormEstimate" name="comentarios" rows="3" cols="50" placeholder="¿Tenés alguna duda?"></textarea>
        <button type="submit" className="buttonFormEstimate">Enviar Datos</button>
        </form>
    </div>
  )
}

export default Form