import React, { Component } from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

  state = {
    numero: this.props.valorInicial || 0,
    passo: this.props.passoInicial || 5
  }
  
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  changePasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        
        <PassoForm passo={ this.state.passo } changePasso={ this.changePasso } />
        
        <Display numero={ this.state.numero } />
        
        {/* Our variables utilizes the state of react to change, so we don't need to worry about getting the new value from the event */}
        <Botoes incrementar={ this.inc } decrementar={ this.dec } />
      </div>
    )
  }

}

export default Contador