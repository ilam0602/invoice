import React, { useState } from 'react';
import './BillTo.css';

function BillTo() {
    const [name, setName] = useState("NAME");
    const [address, setAddress] = useState("ADDRESS");

    return (
      <div className="bill-to-container">
        <h1>Bill To:</h1>
        <input 
          className="bill-to-input"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className="bill-to-input"
          type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    );
}

export default BillTo;
