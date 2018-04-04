import React, { Component } from 'react';
import Billetera from '../../img/billetera.png';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Contact.css';

class Options extends Component {

  render() {
    return (
      <div className='contactInfo'>
        <p>Roxana Rodriguez</p> {<img className='ImgB' src={Billetera} />}
        <div>
          <button className='btnA'>Agregar</button>
        </div>
        <div className='contactInfo'>
          <p>Roxana Rodriguez</p>
        </div>
        <div>
          <button className='btnB'>Invitar</button>
        </div>
      </div>
    );
  }
}
export default Options;