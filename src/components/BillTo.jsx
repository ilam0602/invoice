import React, { useState } from 'react';
import './BillTo.css';

function BillTo() {
    const [name, setName] = useState("");              // Name
    const [addressLine, setAddressLine] = useState(""); // Address Line
    const [cityStateZip, setCityStateZip] = useState(""); // City, State ZIP

    return (
      <div className="bill-to-container">
        <h1>Bill To:</h1>
        <input 
          className="bill-to-input"
          type="text" 
          value={name}
          placeholder="NAME" 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className="bill-to-input"
          type="text" 
          value={addressLine}
          placeholder="ADDRESS LINE" 
          onChange={(e) => setAddressLine(e.target.value)}
        />
        <input 
          className="bill-to-input"
          type="text" 
          value={cityStateZip}
          placeholder="CITY, STATE ZIP" 
          onChange={(e) => setCityStateZip(e.target.value)}
        />
      </div>
    );
}

export default BillTo;
