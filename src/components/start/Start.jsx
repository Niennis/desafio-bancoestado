import React, { Component } from 'react';
// Components
import Evento from './../evento/Evento';
import Charge from './../charge/Charge';
import Pay from './../pay/Pay';
import Contacts from './../Contacts/index';
// Iconos y estilos
import RaisedButton from 'material-ui/RaisedButton';
import Contact from 'material-ui/svg-icons/action/supervisor-account';
import PayIcon from 'material-ui/svg-icons/editor/monetization-on';
import ChargeIcon from 'material-ui/svg-icons/maps/local-atm';
import Event from 'material-ui/svg-icons/action/event';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './../../img/contactos.png';
import GetPay from './../../img/cobrar.png';
import Paying from './../../img/pagar.png';
import CreateEvent from './../../img/eventos.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './start.css';
class HomePage extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1,
      // style: {
      //   margin: 12,
      //   height: 55,
      // }
    };
    this.showEvent = this.showEvent.bind(this);
    this.showCharge = this.showCharge.bind(this);
    this.showPay = this.showPay.bind(this);
    this.showContacts = this.showContacts.bind(this);
  }
  showContacts(event) {
    this.setState({
      counter: 4,
    })
  }
  showEvent(event) {
    this.setState({
      counter: 2,
    })
  }
  showCharge(event) {
    this.setState({
      counter: 3,
    })
  }
   showPay(event) {
    this.setState({
      counter: 5,
    })
  }
render() {
  // const { style } = this.state
  return(
    <div>
      {this.state.counter === 1 ? (
      <div className="containerStart">
        <p className="title">Bienvenido</p>
        <MuiThemeProvider>
         <Grid>
          <Row>
            <Col xs={6} md={6}>
              <div className="btnsHome">
              <RaisedButton
                icon={<img className="homePageBtn" src={Search}/>}
                onClick={this.showContacts}
                  // style={style}
                />
                <p>Contacto</p>
              </div>
            </Col>
            <Col xs={6} md={6}>
              <div className="btnsHome">
                <RaisedButton
                  icon={<img className="homePageBtn" src={GetPay}/>}
                  onClick={this.showCharge}
                  // style={style}
                />
                <p>Cobrar</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <div className="btnsHome">
              <RaisedButton
                icon={<img className="homePageBtn" src={Paying}/>}
                onClick={this.showPay}
                // style={style}
              />
              <p>Pagar</p>
            </div>
            </Col>
             <Col xs={6} md={6}>
            <div className="btnsHome">
              <RaisedButton
                icon={<img className="homePageBtn" src={CreateEvent}/>}
                onClick={this.showEvent}
                // style={style}
              />
              <p>Evento</p>
            </div>
            </Col>
          </Row>
          </Grid>


        </MuiThemeProvider>
      </div>
      ) : this.state.counter === 2 ?(<Evento/>
      ) : this.state.counter === 3 ?(<Charge/>
      ) : this.state.counter === 4 ?(<Contacts/>
      ) : (<Pay />)
    }
    </div>
  )}}
export default HomePage;
