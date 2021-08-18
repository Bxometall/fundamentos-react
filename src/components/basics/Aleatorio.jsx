
import React from 'react'

/*
// can be like that too

const Aleatorio = props => {
  const { min, max } = props
  let result = Math.ceil(Math.random() * (max - min) + min)
  return (
    <>
      <div>Min: { min }</div>
      <div>Max: { max }</div>
      <div>Random Result: { result }</div>
    </>
  )
}
export default Aleatorio
*/

export default props => {
  const { min, max } = props
  let result = Math.ceil(Math.random() * (max - min) + min)
  return (
    <>
      <div>Min: { min }</div>
      <div>Max: { max }</div>
      <div>Random Result: { result }</div>
    </>
  )
}