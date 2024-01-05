import React, { useState, useEffect } from 'react';

function EditHeader() {
  // Initialize state with values from localStorage or default values
  const [name, setName] = useState(localStorage.getItem('name') || 'Name');
  const [address, setAddress] = useState(localStorage.getItem('address') || 'Street Address');
  const [cityStateZip, setCityStateZip] = useState(localStorage.getItem('cityStateZip') || 'City, State Zip');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || 'Phone Number');

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('address', address);
    localStorage.setItem('cityStateZip', cityStateZip);
    localStorage.setItem('phoneNumber', phoneNumber);
  }, [name, address, cityStateZip, phoneNumber]);

  return (
    <div className="header-container">
      <div className="brand-info">
        <h1 
          contentEditable="true"
          onBlur={(e) => setName(e.target.innerText)}
          dangerouslySetInnerHTML={{ __html: name }}
        />
        <p 
          contentEditable="true"
          onBlur={(e) => setAddress(e.target.innerText)}
          dangerouslySetInnerHTML={{ __html: address }}
        />
        <p 
          contentEditable="true"
          onBlur={(e) => setCityStateZip(e.target.innerText)}
          dangerouslySetInnerHTML={{ __html: cityStateZip }}
        />
        <p 
          contentEditable="true"
          onBlur={(e) => setPhoneNumber(e.target.innerText)}
          dangerouslySetInnerHTML={{ __html: phoneNumber }}
        />
      </div>
      <div className="invoice-title">
        <h1>INVOICE</h1>
      </div>
    </div>
  );
}

export default EditHeader;
