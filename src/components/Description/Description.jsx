import PropTypes from 'prop-types'

export const Description = ({ username, tag, location, avatar,followers,views,likes }) => {
  return (
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
      width="250"
       height="300"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>

    <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </li>
    </ul>
  </div>
  );
}

Description.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired

}
