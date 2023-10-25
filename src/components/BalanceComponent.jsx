const BalanceComponent = ({ subTotal}) => {
    const balanceDue = subTotal;
  
    return (
      <div>
        <p>SubTotal: ${subTotal.toFixed(2)}</p>
        <p>Tax: INCLUDED</p>
        <p>Balance Due: ${balanceDue.toFixed(2)}</p>
      </div>
    );
  };
export default BalanceComponent