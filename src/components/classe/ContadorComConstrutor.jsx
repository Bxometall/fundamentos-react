import React, { Component } from 'react'

class ContadorComConstrutor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      numero: props.numeroInicial
    }
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <span>Valor Inicial: { this.state.numero }</span>
      </div>
    )
  }

}

export default ContadorComConstrutor