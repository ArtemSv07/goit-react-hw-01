import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-container">
      <div>
        <img
          className="icon"
          width="80"
          height="80"
          src={image}
          alt="User avatar"
        />
        <p className="title">{name}</p>
        <p className="text">@{tag}</p>
        <p className="text">{location}</p>
      </div>
      <ul className="list">
        <li className="list-stats">
          <span>Followers</span>
          <span className="stats-quantity">{stats.followers}</span>
        </li>
        <li className="list-stats list-stats-center">
          <span>Views</span>
          <span className="stats-quantity">{stats.views}</span>
        </li>
        <li className="list-stats">
          <span>Likes</span>
          <span className="stats-quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
