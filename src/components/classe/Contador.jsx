import React, { Component } from 'react'

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

  changePasso = (e) => {
    this.setState({
      passo: +e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        {/* the property variable still are the var that have everything inside a component 
        and it has to be accessed like by this.props 
          	<span>Valor: {this.props.numero} </span>
        */}
        <div>
          <input type="number" value={this.state.passo} onChange={this.changePasso}/>
        </div>
        <p>Valor Inicial: { this.state.numero }</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }

}

export default Contador