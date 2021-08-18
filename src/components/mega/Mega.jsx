// gen qty of numbers, array, whitout repetition, show data on screen
import React, { useState } from 'react'

export default props => {

  const [quantidade, setQuantidade] = useState(0)
  const [numerosMegaSena, setNumerosMegaSena] = useState([])

  let totalRandomNumbers = 0

  const changeQuantidade = (novaQuantidade) => {
    setQuantidade(novaQuantidade)
    setNumerosMegaSena([])
    totalRandomNumbers = novaQuantidade

    let randomNumbersArr = []
    while(totalRandomNumbers > 0) {
      randomNumbersArr = [
        ...randomNumbersArr,
        generateRandomNumbers()
      ]
      totalRandomNumbers--
    }
    setNumerosMegaSena(randomNumbersArr)
  }

  // ez code
  const generateRandomNumbers = () => {
    let randomNumber = Math.ceil(Math.random() * (60 - 1) + 1)
    return numerosMegaSena.includes(randomNumber) ? generateRandomNumbers() : randomNumber
  }

  // my code
  // const generateRandomNumbers = () => {
  //   let randomNumber = Math.ceil(Math.random() * (60 - 1) + 1)

  //   const numberExists = numerosMegaSena.filter(numero => numero === randomNumber)

  //   if (numberExists.length > 0) {
  //     return generateRandomNumbers()
  //   } else {
  //     return randomNumber
  //   }
  // }

  return (
    <div>
      <div>
        <input 
          type="number" 
          min="1"
          max="60"
          value={quantidade} 
          onChange={ e => changeQuantidade(e.target.value) } />
      </div>
      <br />
      <div>
        <h3>Números Mega Sena:</h3>
        <div>{ numerosMegaSena.join(', ') }</div>
      </div>
    </div>
  )
}