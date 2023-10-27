import React, { useState } from 'react';
import './ShipTo.css';

function ShipTo() {
    const [name, setName] = useState("");              // Name
    const [addressLine, setAddressLine] = useState(""); // Address Line
    const [cityStateZip, setCityStateZip] = useState(""); // City, State ZIP

    return (
      <div className="ship-to-container">
        <h1>Ship To:</h1>
        <input 
          className="ship-to-input"
          type="text" 
          value={name}
          placeholder="NAME" 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className="ship-to-input"
          type="text" 
          value={addressLine}
          placeholder="ADDRESS LINE" 
          onChange={(e) => setAddressLine(e.target.value)}
        />
        <input 
          className="ship-to-input"
          type="text" 
          value={cityStateZip}
          placeholder="CITY, STATE ZIP" 
          onChange={(e) => setCityStateZip(e.target.value)}
        />
      </div>
    );
}

export default ShipTo;
