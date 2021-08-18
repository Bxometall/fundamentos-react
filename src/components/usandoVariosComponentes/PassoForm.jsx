import React from 'react'

export default props => {
  return (
    <div>
      <input 
        type="number" 
        value={ props.passo } 
        onChange={ e => props.changePasso(+e.target.value) } />
    </div>
  )
}