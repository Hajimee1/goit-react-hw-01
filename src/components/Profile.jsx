import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <img src={image} alt="User avatar" className={css.Avatar} />
      <h2>{name}</h2>
      <p className={css.tag}>{"@" + tag}</p>
      <p className={css.location}>{location}</p>
      <ul className={css.list}>
        <li className={css.listItem}>
          Followers <span className={css.values}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          Views <span className={css.values}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          Likes <span className={css.values}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
