import React from 'react'
import './card.scss'

export default props => {
  const { titulo, children, color } = props

  const cardStyle = {
    backgroundColor: color || '#F00', // or 'background-color': color
    borderColor: color || '#F00'
  }

  return (
    <div className="card" style={cardStyle}>
      <h1 className="title">{ titulo }</h1>
      <div className="content">
        { children }
      </div>
    </div>
  )
}