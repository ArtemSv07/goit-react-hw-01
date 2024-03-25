import "../App/App.css";
import Profile from "../Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import FriendList from "../FriendListItem/FriendListItem";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <div className="friends-container">
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
