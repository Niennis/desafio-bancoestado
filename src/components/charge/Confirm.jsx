import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  block: {
    maxWidth: 10,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class Confirm extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball ballOrange"></div>
        </div>
        <div className = "eachEvent">
        <MuiThemeProvider>              
          <Checkbox className='box'
            label="Estefanía Osses"            
            style={styles.checkbox}
          />
          <span className="totalCheck">$10.000</span>          
        </MuiThemeProvider>              
        </div>
        <div className = "eachEvent">
        <MuiThemeProvider>              
          <Checkbox className='box'
            label="Karen Aedo"            
            style={styles.checkbox}
          />
          <span className="totalCheck">$10.000</span>          
        </MuiThemeProvider> 
        </div>
        <div className = "eachEvent">
        <MuiThemeProvider>              
          <Checkbox className='box'
            label="Katherine Ramírez"            
            style={styles.checkbox}
          />
          <span className="totalCheck">$10.000</span>          
        </MuiThemeProvider> 
        </div>
        <div className="eachEvent totalToPay">
          <span className="friendToPay">Total</span>
          <span className="total">$30.000</span>
        </div>
        <div>
          <button className="chargeBtn">Cobrar</button>
        </div>
      </div>
    );
  }
}

export default Confirm;