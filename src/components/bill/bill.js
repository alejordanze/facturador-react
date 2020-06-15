import React, { Component } from 'react';
import './bill.css';
import { Switch, Link } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import Header from '../header/header';

export default class Bill extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    }
  }

  setPhone(event){
    let phone;
    phone = event.target.value;
    this.setState({phone: phone});
  }

  render() {
    return (
      <Switch>
        <div>
          <BrowserView>
            <Header active="bill"></Header>
            
            <div className="container">
              <h3 className="title">Buscar deuda cliente</h3>
              <br/>
              <form className="bill-form">
                <label className="label-input">Número de celular: </label><br/><br/>
                <input className="input" type="number" placeholder="Número de celular" onChange={this.setPhone.bind(this)}></input>
                <br/><br/>
                <Link to={'/debt/'+ this.state.phone}><button>Buscar</button></Link>
              </form>
            </div>
          
          </BrowserView>
        </div>
      </Switch>
    )
  }
}