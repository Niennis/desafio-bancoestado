import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import Message from './Message';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import './pay.css'

class PayConfirm extends Component {
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
          <Message />
        ) : (
            <div>

<h2 className="title">Confirmar pago</h2>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
      
              <div className="since">
       <p>Desde</p>       
       <p className="accountConfirm">Cta. Rut 15173095 <br/>Monto $20.000 </p>
       </div>

       <div>
       <p className='until'>Hasta</p>       
       <p className="accountConfirm2">Hugo Perez <br/>Cta. Rut 15.763.826 </p>
       </div>
      
      <button className='btnSelectFriend2' onClick={this.onButtonClick}>
          Confirmar pago
      </button>
            </div>
          )}

      </div>

    );
  }

}

export default PayConfirm;
