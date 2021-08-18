import React from 'react'

import produtos from '../../data/produtos'
import './listaProdutos.scss'

export default _ => {
  
  const productsList = produtos.map((item, i) => {
    return (
      <tr key={i} className={ i%2 !== 0 ? 'grey' : 'normal'}>
        <td>{ item.id }</td>
        <td>{ item.produto }</td>
        <td>{ parseFloat(item.preco) ? parseFloat(item.preco).toFixed(2).replace('.', ',') : item.preco }</td>
      </tr>
    )
  })

  return (
    <table className="products">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço $</th>
        </tr>
      </thead>
      <tbody>
        { productsList }
      </tbody>
    </table>
  )
}