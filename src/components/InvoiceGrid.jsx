import React, { useState } from 'react';  // Imported useState
import './InvoiceGrid.css';

const InvoiceGrid = ({ items, setItems }) => {
  const [showPO, setShowPO] = useState(false);  // State variable to control PO column visibility

  const addNewItem = () => {
    setItems([...items, { description: '', quantity: '', unitPrice: '', po: '' }]);
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="gridDiv">
      {/* Checkbox to toggle PO column visibility */}
      <div className = "po-check" >
        <label>
          <input type="checkbox" checked={showPO} onChange={() => setShowPO(!showPO)} />
          Show PO
        </label>
      </div>

      <table className="invoiceTable">
        <thead>
          <tr>
            {showPO ? <th>PO</th> : null}
            <th className="des-col">Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th className="th-no-show"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {showPO && <td><input type="text" value={item.po} onChange={(e) => updateItem(index, 'po', e.target.value)} /></td>}  {/* Conditionally render PO input */}
              <td><input type="text" value={item.description} onChange={(e) => updateItem(index, 'description', e.target.value)} /></td>
              <td><input type="number" value={item.quantity} onChange={(e) => updateItem(index, 'quantity', e.target.value === '' ? '' : +e.target.value)} /></td>
              <td>$<input type="number" step="0.01" value={item.unitPrice} onChange={(e) => updateItem(index, 'unitPrice', e.target.value === '' ? '' : +e.target.value)} /></td>
              <td>${(item.quantity * item.unitPrice).toFixed(2)}</td>
              <td className="td-no-show"><button onClick={() => deleteItem(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-item-button" onClick={addNewItem}>Add Item</button>
    </div>
  );
};

export default InvoiceGrid;
