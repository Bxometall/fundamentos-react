
import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

  const [ nome, setNome ]  = useState('?')
  const [ idade, setIdade ] = useState(0)
  const [ nerd, setNerd ] = useState(false)

  const fornecerInfos = (nome, idade, nerd) => {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return (
    <div>
      Pai
      <div>
        <div>{ nome }</div>
        <div>{ idade }</div>
        <div>{ nerd ? 'Nerd' : '' }</div>
      </div>
      <br />
      <IndiretaFilho quandoClicar={fornecerInfos}/>
    </div>
  )
}