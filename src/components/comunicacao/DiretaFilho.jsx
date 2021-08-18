import React from "react";

export default props => {
  return (
    <div style={{ marginBottom: '20px'}}>
      <div>{ props.nome }</div>
      <div><strong>{ props.idade }</strong></div>
      <div>{ props.nerd ? 'Verdadeiro' : 'Falso' }</div>
    </div>
  )
}