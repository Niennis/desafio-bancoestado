import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
// import Arrowbackios from 'material-ui/svg-icons/action';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BancoEstadoLogo from './../img/banco-estado-blanco.png';
// import HomePage from './start/Start.jsx'
import './header.css';
const Back = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);
// const Header = () => (
//   <AppBar
//   iconElementRight={<IconButton>
//      <Back/>
//     </IconButton>}
//     title={<img className="logo" src={BancoEstadoLogo}/>}
//   />
// );

class Header extends Component {
  onClickBack(event){
    window.location.reload();
  }
  render() {
    return (
          <AppBar
            title={<img className= "logo" src={BancoEstadoLogo}/>}

            iconElementRight={<IconButton>
              <Back onClick={this.onClickBack.bind(this)}/>
            </IconButton>}
          />
    )
  }
}
export default Header;

