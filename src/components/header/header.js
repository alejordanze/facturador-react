import React, { Component } from 'react';
import './header.css';
import { BrowserView,  MobileView } from "react-device-detect";
class Header extends Component {
  options = {bill: ''}
  constructor(props){
    super(props);
    this.options[this.props.active] = 'active';
  }

  render() {
    return (
      <div>
      <BrowserView>
          <div className="header2">
            <ul id="nav-mobile" className="header">
              <li><a className={"item " + this.options.bill} to="/" href="/">Buscar deuda</a></li>
            </ul>
          </div>
      </BrowserView>
      
      <MobileView>
      </MobileView>
      </div>
    );
  }
}
export default Header;
