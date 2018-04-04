import React, { Component } from 'react';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import './pay.css'


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



class PayDetail extends Component {
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
          <div />
        ) : (
            <div>

<h2 className="title">Pago</h2>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              

      <p className="textPay"><strong>¡Su pago ha sido exitoso!</strong></p>
      <p className="textPayDetail">Telepizza</p>
      <p className="textPay">Monto Total  $10.000</p>
      <p className="textPayDate">Fecha 31 Mar 2018</p>
            </div>
          )}

      </div>

    );
  }

}


export default PayDetail;