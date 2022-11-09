import { useState } from 'react'
import Botao from '../Botao'
import CampoDeTexto from '../campoDeTexto'
import DropDown from '../DropDown'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [nick, setNick] = useState('')
    const [imagem, setImagem] = useState('')
    const [funcao, setFuncao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            nick,
            imagem,
            funcao
        })
        setNome('')
        setImagem("")
        setFuncao("")
        setNick("")
    }



    return (
        <section className='formulario'>

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Time de Counter-Strike</h2>
                <CampoDeTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoDeTexto
                    obrigatorio={true}
                    label='Nickname'
                    placeholder='Digite seu nickname'
                    valor={nick}
                    aoAlterado={valor => setNick(valor)}
                />
                <CampoDeTexto
                    obrigatorio={true}
                    label='Imagem'
                    placeholder='Insira sua imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropDown
                    obrigatorio={true}
                    label='Função'
                    itens={props.funcoes} 
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}   
                />
                <Botao >
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario