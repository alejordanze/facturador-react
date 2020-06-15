import React, {Component} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bill from './components/bill/bill'
import Debt from './components/debt/debt'
import GenerateBill from './components/generateBill/generateBill'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Bill} />
          <Route exact path="/debt/:phone" component={Debt} />
          <Route exact path="/generateBill/:phone/:amount/:month" component={GenerateBill} />
          <Route exact path="/generateBill/:debts" component={GenerateBill} />
        </Switch>
      </Router>
    );
  }
}
