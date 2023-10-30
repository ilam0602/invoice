const BalanceComponent = ({ subTotal}) => {
    const balanceDue = subTotal;
  
    return (
      <div>
        <p>Balance Due: ${balanceDue.toFixed(2)}</p>
      </div>
    );
  };
export default BalanceComponent