import React, { useState } from 'react';
import './ShipTo.css';

function ShipTo() {
    const [name, setName] = useState("NAME");
    const [address, setAddress] = useState("ADDRESS");

    return (
      <div className="ship-to-container">
        <h1>Ship To:</h1>
        <input 
          className="ship-to-input"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className="ship-to-input"
          type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    );
}

export default ShipTo;
