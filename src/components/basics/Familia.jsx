import React from 'react'

import FamiliaMembro from './FamiliaMembro'

export default props => {
  return (
    <div>
      {/* passing by spreading props */}
      <FamiliaMembro nome="Jose" {...props} />

      {/* passing by defined props */}
      <FamiliaMembro nome="Pedro" sobrenome="Silva" />

      {/* passing by defined father props */}
      <FamiliaMembro nome="Ana" sobrenome={props.sobrenome} />
    </div>
  )
}