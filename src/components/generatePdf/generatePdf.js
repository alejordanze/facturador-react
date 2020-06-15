import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      backgroundColor: 'white'
    },
    section: {
        margin: 20,
        padding: 10,
        flexGrow: '0'
    },
    section2: {
        margin: 10,
        padding: 10,
        flexGrow: '0'
    },
    line: {
        borderBottom: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5
    },
    billDetails: {
        fontSize: 12
    },
    billData: {
        display: "flex",
        flexDirection: "row",
        margin: 20
    },
    billSubtitle: {
        marginRight: 85,
        fontSize: 12
    },
    title:{
        color: 'black',
        fontSize: 20,
    },
    line2:{
        borderBottom: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        flexGrow: '0.8'
    },
    total: {
        fontSize: 14,
        textAlign: "right",
        margin: 20
    },
    table: { 
        display: "table", 
        width: "auto", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderRightWidth: 0, 
        borderBottomWidth: 0,
        margin: 20
      }, 
      tableRow: { 
        margin: "auto", 
        flexDirection: "row" 
      }, 
      tableCol: { 
        width: "25%", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0 
      }, 
      tableCell: { 
        margin: "auto", 
        marginTop: 5, 
        fontSize: 10 
      }
  });
  
  // Create Document Component
  export function PdfDoc(props){
    return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Factura</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.section2}>
            {props.data ? <Text style={styles.billDetails}>Cochabamba, Fecha: {props.data.date} NIT/CI: {props.data.nit}</Text>
            : <Text></Text>}
        </View>
        <View style={styles.section2}>
            {props.data ? <Text style={styles.billDetails}>Señor(es): {props.data.billName}</Text> : 
            <Text></Text>}
        </View>
        <View style={styles.line}></View>
        <View style={styles.table}> 
            <View style={styles.tableRow}> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>Cantidad</Text> 
                </View> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>Concepto</Text> 
                </View> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>Precio unitario</Text> 
                </View> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>Total</Text> 
                </View> 
            </View>
            {props.data.number ? <View style={styles.tableRow}> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>1</Text> 
                </View> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>Pago Consumo/{props.data.month}</Text> 
                </View> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{props.data.amount}Bs</Text> 
                </View> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{props.data.amount}Bs</Text> 
                </View> 
            </View> : <Text></Text>}
            {props.data.debts ? 
            props.data.debts.map((value) => { 
            return <View style={styles.tableRow}> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>1</Text> 
                </View> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>Pago Consumo/{value.month}</Text> 
                </View> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{value.amount}Bs</Text> 
                </View> 
                <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{value.amount}Bs</Text> 
                </View> 
            </View> }) : <Text></Text>}
        </View>
        <View style={styles.line2}></View>
        <View style={styles.total}>
            {props.data ? <Text>Total: {props.data.total} Bs</Text> : <Text></Text>}
        </View>
      </Page>
    </Document>
    );
  }
  