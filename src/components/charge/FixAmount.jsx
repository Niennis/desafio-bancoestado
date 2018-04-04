import React, { Component } from 'react';
import { response } from './../../data/evento.json'

class FixAmount extends Component {

  confirm() {
    console.log('holi')
  }

  render() {
    return (
      <div>
        <div>
          <div className="ball"></div>
          <div className="ball ballOrange"></div>
          <div className="ball"></div>
        </div>
        <div className = "eachEvent">
          <span className="friendToPay">Estefanía Osses</span>
          <span className="goTo" onClick={this.confirm.bind(this)}>>></span>
          <span className="total">$10.000</span>
        </div>
        <div className = "eachEvent">
          <span className="friendToPay">Karen Aedo</span>
          <span className="goTo" onClick={this.confirm.bind(this)}>>></span>          
          <span className="total">$10.000</span>
        </div>
        <div className = "eachEvent">
          <span className="friendToPay">Katherine Ramírez</span>
          <span className="goTo" onClick={this.confirm.bind(this)}>>></span>
          <span className="total">$10.000</span>
        </div>
        <div></div>
      </div>
    );
  }
}

export default FixAmount;