import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/Formulario';
import Funcoes from './componentes/Funcao';

function App() {

  const funcoes = [

    {
      nome: 'Awper',
      corPrimaria: '#000000',
      corSecundaria: '#A3A3A3'
    },

    {
      nome: 'IGL',
      corPrimaria: '#57C278',
      corSecundaria: '#A5EADF'
    },

    {
      nome: 'Entry Fragger',
      corPrimaria: '#82CFFA',
      corSecundaria: '#BDE3FF'
    },

    {
      nome: 'Trader',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },

    {
      nome: 'Suporte',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },

    {
      nome: 'Lurker',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },

    {
      nome: 'Solo Bomb',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },

    {
      nome: 'Coringa',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario funcoes={funcoes.map(funcao => funcao.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {funcoes.map(funcao => <Funcoes 
      funcao={funcao.nome} 
      key={funcao.nome} 
      nome={funcao.nome} 
      corPrimaria = {funcao.corPrimaria} 
      corSecundaria = {funcao.corSecundaria}
      colaboradores = {colaboradores.filter(colaborador => colaborador.funcao === funcao.nome)}
      />)}
      
    </div>
  );
}

export default App;
