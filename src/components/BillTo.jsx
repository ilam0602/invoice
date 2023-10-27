import React, { useState, useEffect } from 'react';
import './BillTo.css';

function BillTo() {
    const [name, setName] = useState("NAME");
    const [address, setAddress] = useState("ADDRESS");
    const [data, setData] = useState([]);
    const [filteredNames, setFilteredNames] = useState([]);

    function parseCSV(data) {
      let lines = data.split("\n");
      let result = [];
  
      for (let i = 1; i < lines.length; i++) {
          let currentLine = lines[i].trim();
          if (currentLine) {
              let name = currentLine.substring(0, currentLine.indexOf(","));
              let remaining = currentLine.substring(name.length + 1);
              let address = remaining.substring(0, remaining.lastIndexOf(","));
              let phone = remaining.substring(address.length + 1);
  
              name = name.replace(/(^"|"$)/g, "");
              address = address.replace(/(^"|"$)/g, "");
              phone = phone.replace(/(^"|"$)/g, "");
  
              result.push({ name, address, phone });
          }
      }
  
      return result;
    }

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/customers.csv")
            .then((response) => response.text())
            .then((data) => {
              const customers = parseCSV(data);
              setData(customers);
            });
    }, []);

    const handleNameChange = (e) => {
        const inputValue = e.target.value;
        setName(inputValue);
        
        if (inputValue) {
            const matches = data.filter((customer) =>
                customer.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredNames(matches);
        } else {
            setFilteredNames([]);
        }
    };

    const handleNameSelect = (selectedName, selectedAddress) => {
        setName(selectedName);
        setAddress(selectedAddress);
        setFilteredNames([]);
    };

    return (
      <div className="bill-to-container">
        <h1>Bill To:</h1>
        <div className="input-container">
          <input 
            className="bill-to-input"
            type="text" 
            value={name}
            onChange={handleNameChange}
          />
          {filteredNames.length > 0 && (
              <ul className="name-dropdown">
                  {filteredNames.map((customer) => (
                      <li
                          key={customer.name}
                          onClick={() => handleNameSelect(customer.name, customer.address)}
                      >
                          {customer.name}
                      </li>
                  ))}
              </ul>
          )}
        </div>
        <input 
          className="bill-to-input"
          type="text" 
          value={address}
          readOnly
        />
      </div>
    );
}

export default BillTo;
