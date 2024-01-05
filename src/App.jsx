import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import InvoiceHeader from './components/InvoiceHeader';
import BillTo from './components/BillTo';
import ShipTo from './components/ShipTo';
import InvoiceGrid from './components/InvoiceGrid';
import BalanceComponent from './components/BalanceComponent';
import InvoiceNum from './components/InvoiceNum';
import PrintButton from './components/PrintButton'
import TyFashion from './pages/TyFashion'; // Import your TyFashion component
import Edit from './pages/Edit'; // Import your TyFashion component

function App() {
  const [items, setItems] = useState([]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/tyfashion" element={<TyFashion />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/" element={
            <>
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
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
