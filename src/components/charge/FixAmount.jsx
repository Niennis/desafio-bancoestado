import React, { Component } from 'react';
import { response } from './../../data/evento.json'
import Confirm from './Confirm'
import './charge.css'

class FixAmount extends Component {
  constructor(){
    super();
    this.state = {
      counter: 50
    }
  }

  confirm() {
    this.setState({counter : 51})
  }

  render() {
    return (
      <div>
        {this.state.counter === 50 ?(
          <div>
        <div>
          <div className="ball"></div>
          <div className="ball ballOrange"></div>
          <div className="ball"></div>
        </div>
        <div className = "eachEvent">
          <span className="friendToPay">Estefanía Osses</span>
          <span className="goTo">>></span>
          <span className="total">$10.000</span>
        </div>
        <div className = "eachEvent">
          <span className="friendToPay">Karen Aedo</span>
          <span className="goTo">>></span>          
          <span className="total">$10.000</span>
        </div>
        <div className = "eachEvent">
          <span className="friendToPay">Katherine Ramírez</span>
          <span className="goTo">>></span>
          <span className="total">$10.000</span>
        </div>
        <div className="eachEvent totalToPay">
          <span className="friendToPay">Total</span>
          <span className="total">$30.000</span>
        </div>
        <div>
          <button className="modifyBtn">Modificar</button>
          <button className="confirmBtn" onClick={this.confirm.bind(this)}>Confirmar</button>
        </div>
        </div>)
        : (<Confirm/>)
        }
      </div>
    );
  }    
}

export default FixAmount;