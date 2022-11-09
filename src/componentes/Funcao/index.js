import Colaborador from '../Colaborador'
import './funcao.css'

const Funcoes = (props) =>{
    return(
        (props.colaboradores.length >0) ? <section 
        className='funcao' 
        style={{backgroundColor: props.corSecundaria}}
        >
            <h3 
            style={{borderColor: props.corPrimaria}}>
                {props.funcao}
                </h3>
            
            <div className='colaboradores'>

                {props.colaboradores.map(colaborador => <Colaborador 
                nome={colaborador.nome} 
                nick={colaborador.nick} 
                imagem={colaborador.imagem}
                key={colaborador.nome}
                corDeFundo={props.corPrimaria}
                />)}
            </div>
        </section>
        : ''

    )
}

export default Funcoes