import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <h2 className="title">3 - Список друзів</h2>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendListItem key={friend.id} data={friend} />
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
