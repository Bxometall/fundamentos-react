import React, { useState } from 'react'


export default props => {

  const [valor, setValor] = useState('inicial')

  const onChanged = (e) => {
    setValor(e.target.value)
  }

  return (
    <div>
      <h3>{ valor }</h3>
      <input type="text" value={valor} onChange={onChanged} />
      
      {/* if you will not change the value of this input, mark it to be readOnly */}
      <input type="text" value={valor} readOnly /> 
    </div>
  )
}