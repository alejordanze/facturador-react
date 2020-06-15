import React, { Component } from 'react';
import './generateBill.css';
import Header from '../header/header';
import { PdfDoc } from '../generatePdf/generatePdf';
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";

export default class GenerateBill extends Component {

    constructor(props) {
        super(props);
        if(this.props.match.params.phone){
            this.state = {
                number: this.props.match.params.phone,
                month: this.props.match.params.month,
                amount: this.props.match.params.amount,
                date: new Date().toLocaleString(),
                nit: '',
                billName: '',
                total: this.props.match.params.amount
            };
        }
        else{
            if(this.props.match.params.debts){
                this.state = {
                    debts: JSON.parse(this.props.match.params.debts),
                    nit: '',
                    billName: '',
                    total: this.getTotal(JSON.parse(this.props.match.params.debts)),
                    date: new Date().toLocaleString(),
                };
            }
        }
    }

  getTotal(array){
    let result = 0;
    array.forEach( item => {
        result += parseInt(item.amount)
    })
    return result;
  }

  setBillName(event){
    let billName;
    billName = event.target.value;
    this.setState({billName: billName});
  }


  setNit(event){
    let nit;
    nit = event.target.value;
    this.setState({nit: nit});
  }

  render() {
    return (
        <div>
            <Header/>
            <div className="container">
                <form>
                    <label className="label-input">Señor(es): </label><br/><br/>
                    <input className="input" type="text" placeholder="Señor(es):" onChange={this.setBillName.bind(this)}></input>
                    <br/><br/>
                    <label className="label-input">NIT/CI: </label><br/><br/>
                    <input className="input" type="number" placeholder="NIT/CI:" onChange={this.setNit.bind(this)}></input>
                </form>
                <br></br><br></br>
                <BlobProvider  document={<PdfDoc data={this.state}/>}>
                    {({ url }) => (
                        <a className="download blue" href={url} target="_blank" rel="noopener noreferrer">Ver</a>
                    )}
                </BlobProvider>
                &nbsp;&nbsp;
                <PDFDownloadLink className="download" document={<PdfDoc data={this.state}/>} fileName="first.pdf">Descargar</PDFDownloadLink>
            </div>
        </div>
    )
  }
}