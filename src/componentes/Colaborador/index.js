import './Colaborador.css'

const Colaborador = ({nome, imagem, nick, corDeFundo}) =>{
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nick}/>
            </div>
            <div className='rodape'>
                <h4>{nick}</h4>
                <h5>{nome}</h5>
            </div>
        </div>

    )
}

export default Colaborador