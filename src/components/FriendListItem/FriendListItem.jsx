import "./FriendListItem.css";
const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, id, isOnline }) => {
    const online = isOnline ? "Online" : "Offline";

    return (
      <div className="friend-list" key={id}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className="friend-title">{name}</p>

        <p className={online}>{online}</p>
      </div>
    );
  });
};

export default FriendListItem;
