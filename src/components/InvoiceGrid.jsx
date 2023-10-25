import React from 'react';
import './InvoiceGrid.css';

const InvoiceGrid = ({ items, setItems }) => {

  const addNewItem = () => {
    setItems([...items, { description: '', quantity: 0, unitPrice: 0 }]);
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
      <table className="invoiceTable">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th class = "th-no-show"></th> {/* New header for the delete button */}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td><input type="text" value={item.description} onChange={(e) => updateItem(index, 'description', e.target.value)} /></td>
              <td><input type="number" value={item.quantity} onChange={(e) => updateItem(index, 'quantity', +e.target.value)} /></td>
              <td>$<input type="number" step="0.01" value={item.unitPrice} onChange={(e) => updateItem(index, 'unitPrice', +e.target.value)} /></td>
              <td>${(item.quantity * item.unitPrice).toFixed(2)}</td>
              <td class = "td-no-show"><button onClick={() => deleteItem(index)}>Delete</button></td> {/* New delete button */}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-item-button" onClick={addNewItem}>Add Item</button>
    </div>
  );
};

export default InvoiceGrid;
