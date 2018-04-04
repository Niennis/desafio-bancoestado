import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import EventsBtn from 'material-ui/svg-icons/action/event';
import Account from 'material-ui/svg-icons/action/supervisor-account';
import FontIcon from 'material-ui/FontIcon';
import Events from './Events';
import Contacts from './../../img/contactos.png';
import EventsIcon from './../../img/eventos.png';
import './charge.css';

class Buttons extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1
    };
    this.showEvents = this.showEvents.bind(this);
    this.showFriends = this.showFriends.bind(this);
  }

  showEvents(event) {
    this.setState({
      counter: 2,
    })
  }

  showFriends(event) {
    this.setState({
      counter: 3,
    })
  }

  render() {
    return (
      <div>
        {this.state.counter === 1 ? (
        <div>
          <div className="containerBtn">
            <button className="showEventsBtn btn" onClick={this.showEvents}><img src={EventsIcon} alt=""/></button>
            <p>Eventos</p>
          </div>
          <div className="containerBtn">
            <button className="showFriendsBtn btn" onClick={this.showFriends}><img src={Contacts} alt=""/></button>
            <p>Amigos</p>
          </div>
        </div>
        ) : this.state.counter === 2 ? (<Events/>
        ) : 'Loading...'
      }      
      </div>
    );
  }
}

export default Buttons;