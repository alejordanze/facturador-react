import React, { Component } from 'react';
import './debt.css';
import { Link } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import Header from '../header/header';

export default class Debt extends Component {
    constructor(props) {
        super(props);
        this.state = {
          number: this.props.match.params.phone,
          debts:[
            {
              month: 'Enero',
              amount: '100',
            },
            {
              month: 'Febrero',
              amount: '120',
            },
            {
              month: 'Marzo',
              amount: '150',
            }
          ]
        };
    }

    allDebts(){
      let debts = this.state.debts;
      debts = JSON.stringify(debts);
      window.open('/generateBill/' + debts, "_self");
      
    }
    
    render() {
    return (

        <div>
          <BrowserView>
            <Header active=""></Header>
            
            <div className="container">
                <h3 className="title">El cliente con numero: {this.state.number}</h3>
                <label>Tiene las siguientes deudas: </label>
                <br/><br/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mes</th>
                            <th>Deuda</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.debts.map((value) => {
                        return <tr>
                            <td>{value.month}</td>
                            <td>{value.amount}</td>
                            <td>
                            <Link to={'/generateBill/'+ this.state.number + '/' + value.amount + '/' + value.month}><button className="ui cyan button">Generar factura</button></Link>
                            </td>
                        </tr>
                      })}
                    </tbody>
                </table>
                <br/><br/>
                <button className="ui red button" onClick={() => this.allDebts()}>Generar factura para todas las deudas</button>
                <br/>
              
            </div>
          
          </BrowserView>
        </div>

    )
  }
}