import React from "react"

function ComParametro(props) {
  const { titulo, subtitulo } = props
  return (
    <div>
      <h1>{ titulo }</h1>
      <h2>{ subtitulo }</h2>
    </div>
  )
}

export default ComParametro