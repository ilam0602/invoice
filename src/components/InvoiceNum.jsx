import React, { useState } from 'react';
import './InvoiceNum.css';

function InvoiceNum() {
  const [invoiceNum, setInvoiceNum] = useState("1234567");
  const [date, setDate] = useState("12/31/2020");

  return (
    <div className="invoice-num-container">
      <div className="title-inp-holder">
        <p className="invoice-num-label">Invoice #:</p>
        <input 
          className="invoice-num-input"
          type="text" 
          value={invoiceNum}
          onChange={(e) => setInvoiceNum(e.target.value)}
        />
      </div>
        
      <div className="title-inp-holder">
        <p className="invoice-num-label">Invoice Date: </p>
        <input 
          className="invoice-num-input"
          type="text" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InvoiceNum;



