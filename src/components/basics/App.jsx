import React from 'react'

import Primeiro from './Primeiro'
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'
import Aleatorio from './Aleatorio'
import Card from '../layout/Card'
import Familia from './Familia'
import Familia2 from './Familia2'
import FamiliaMembro from './FamiliaMembro'
import ListaAlunos from '../repeticao/ListaAlunos'
import ListaProdutos from '../repeticao/ListaProdutos'
import DiretaPai from '../comunicacao/DiretaPai'
import IndiretaPai from '../comunicacao/IndiretaPai'
import Input from '../formulario/Input'
import Contador from '../classe/Contador'
import Contador2 from '../usandoVariosComponentes/Contador'
import Mega from '../mega/Mega'

import './app.scss'

const printEl = <Primeiro></Primeiro>

export default _ =>
  <div id="app" className="app"> 

    <div className="cards">
      <Card titulo="#14 - Números Megasena" color="#71BFDA">
        <Mega />
      </Card>

      <Card titulo="#13 - Contador (Vários Componentes)" color="#DA71D0">
        <Contador2 valorInicial={10} />
      </Card>
      <Card titulo="#13 - Contador (Vários Componentes)" color="#DA71D0">
        <Contador2 valorInicial={10} />
      </Card>

      <Card titulo="#12 - Contador (Class Component)" color="#A171DA">
        <Contador valorInicial={10} />
      </Card>

      <Card titulo="#11 - Componente Controlado" color="#D80880">
        <Input />
      </Card>

      <Card titulo="#10 - Comunicação Indireta Direta Filho -> Pai" color="#08A6D8">
        <IndiretaPai />
      </Card>

      <Card titulo="#9 - If/Else" color="#08D880">
        <h2>Nothing New Here</h2>
      </Card>

      <Card titulo="#8 - Comunicação Direta Pai -> Filho" color="#F08080">
        <DiretaPai />
      </Card>

      <Card titulo="#7 - Loop Exercise" color="#FFA07A">
        <ListaProdutos />
      </Card>

      <Card titulo="#6 - Loop" color="#FFBF00">
        <ListaAlunos />
      </Card>

      <Card titulo="#5.1 - Passing Children Props 2.0" color="#C0C0C0">
        <Familia2 sobrenome="Toretto">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Joao" />
        </Familia2>
      </Card>

      <Card titulo="#5 - Passing Children Props" color="#800080">
        <Familia sobrenome="Toretto" />
      </Card>

      <Card titulo="#4 - Card Random" color="#DE3163">
        <Aleatorio min={1} max={10}/>
      </Card>

      <Card titulo="#3 - Card Fragment" color="#40E0D0">
        <Fragmento />
      </Card>

      <Card titulo="#2 - Card Com Parametro" color="#6495ED">
        <ComParametro
          titulo="Hello I'm a Title"
          subtitulo={11.2} />
      </Card>
      
      <Card titulo="#1 - Card Printando El" color="#CCCCFF">
        { printEl }
      </Card>
    </div>

  </div>