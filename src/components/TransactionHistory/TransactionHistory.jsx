import "./TransactionHistory.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-container">
      <thead className="thead">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="tbody">
        {items.map((transaction) => (
          <tr className="tbody-tr" key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
