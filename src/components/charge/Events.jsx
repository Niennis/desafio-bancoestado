import React, { Component } from 'react';
import { response } from './../../data/evento.json';
import FixAmount from './FixAmount';
import './charge.css'

class Events extends Component {
  constructor() {
    super();
    this.state = {
      myEvents : [],
      counter: 0,
    }
  }

  componentWillMount() {
    this.setState({myEvents: response});
  };

  showEventsToCharge() {
    console.log(response);
      return response.map((eachEvent, index) => (
        <div className = "eachEvent" key = {index}>
          <span className="friendToPay">{eachEvent.nombre}</span>
          <span className="goTo" onClick={this.fixAmount.bind(this)}>>></span>
          <span className="total"> ${eachEvent.monto}</span>
        </div>
      ));
  };

  fixAmount(event) {
    console.log(response[0].amigos)
    this.setState({
      counter: 1
    })
  }

  render() {
    return(
      <div>
        {this.state.counter === 1 ? (
          <FixAmount/>
        ) : (
          <div>
            <div className="ball ballOrange"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div>
              {this.state.myEvents !== [] ? this.showEventsToCharge() : 'Loading...'}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Events;