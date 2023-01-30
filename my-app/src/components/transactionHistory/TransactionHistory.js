import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <h2 className="title">4 - Історія транзакцій</h2>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <TransactionHistoryItem key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
