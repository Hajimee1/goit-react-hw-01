import css from "./FriendList.module.css";
import clsx from "clsx";
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.friendItem}>
          <img
            src={friend.avatar}
            alt="Avatar"
            width="48"
            className={css.friendAvatar}
          />
          <p className={css.friendName}>{friend.name}</p>
          <p
            className={clsx(
              css.friendStatus,
              friend.isOnline ? css.online : css.offline,
            )}
          >
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
