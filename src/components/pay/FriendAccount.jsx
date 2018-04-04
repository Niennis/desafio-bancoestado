import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import PayConfirm from './PayConfirm';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



class FriendAccount extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1,
      checked: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({
      counter: 2,
    })

  }

  render() {
    return (
      <div>
        {this.state.counter === 2 ? (
          <PayConfirm />
        ) : (
            <div>

        <h2 className="title">Elegir cuenta</h2>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
        <div className="colorCheckbox1">
        <MuiThemeProvider>
        <Checkbox className='boxAccount'
          label="Cuenta Rut"
          style={styles.checkbox}
       />
       </MuiThemeProvider>
       <p className="amountAvailable">Monto disponible <br/> $50.000</p>
       </div>
       <div className="colorCheckbox">
       <MuiThemeProvider>
       <Checkbox className='boxAccount'
          label="Cuenta Corriente"
          style={styles.checkbox}
       /> 
       </MuiThemeProvider>
       <p className="amountAvailable">Monto disponible <br/> $100.000</p>
       </div>
       <div className="colorCheckbox">
       <MuiThemeProvider>
       <Checkbox className='boxAccount'
          label="Cuenta de Ahorro"
          style={styles.checkbox}
       />
       </MuiThemeProvider>
       <p className="amountAvailable">Monto disponible <br/> $30.000</p>
      </div>
      <button className='btnSelectFriend' onClick={this.onButtonClick}>
          Selecciona tu cuenta
      </button>
            </div>
          )}

      </div>

    );
  }

}

export default FriendAccount;

