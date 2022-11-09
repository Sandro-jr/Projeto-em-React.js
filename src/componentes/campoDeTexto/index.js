import './campoDeTexto.css'

const CampoDeTexto = (props) =>{

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitar = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
            onChange={aoDigitar} 
            required={props.obrigatorio} placeholder={placeholderModificada} 
            value={props.valor}></input>
        </div>

    )
}

export default CampoDeTexto