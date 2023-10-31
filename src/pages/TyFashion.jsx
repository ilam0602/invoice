import React, { useState } from 'react';
import './TyFashion.css';
import InvoiceHeaderTy from '../components/InvoiceHeaderTy';
import BillTo from '../components/BillTo';
import ShipTo from '../components/ShipTo';
import InvoiceGrid from '../components/InvoiceGrid';
import BalanceComponent from '../components/BalanceComponent';
import InvoiceNum from '../components/InvoiceNum';
import PrintButton from '../components/PrintButton'

function TyFashion() {
  const [items, setItems] = useState([]);

  return (
    <div className="Ty">
      <header className="Ty-header">
        <InvoiceHeaderTy/>
      </header>
      <div className="Ty-body">
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

export default TyFashion;
