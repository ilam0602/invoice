import React, { useState } from 'react';
import './App.css';
import InvoiceHeader from './components/InvoiceHeader';
import BillTo from './components/BillTo';
import ShipTo from './components/ShipTo';
import InvoiceGrid from './components/InvoiceGrid';
import BalanceComponent from './components/BalanceComponent';
import InvoiceNum from './components/InvoiceNum';
import PrintButton from './components/PrintButton'

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <InvoiceHeader/>
      </header>
      <div className="App-body">
        <BillTo/>
        <ShipTo/>
        <InvoiceNum/>
      </div>
      <div>
        <InvoiceGrid items={items} setItems={setItems} />
        <BalanceComponent subTotal={items.reduce((acc, curr) => acc + (curr.quantity * curr.unitPrice), 0)} />
      </div>
      <div>
        <PrintButton/>
      </div>
    </div>
  );
}

export default App;
