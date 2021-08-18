import React from "react";

export default props => {
  return (
    <div>
      Filho
      <div>
        <button onClick={ (e) => {
            props.quandoClicar('Joao', 45, true)
          } 
        }>Hit me!</button>
      </div>
    </div>
  )
}