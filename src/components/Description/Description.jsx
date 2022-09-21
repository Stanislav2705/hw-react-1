import PropTypes from 'prop-types'
import { ListItems,List,DataName,Data, InfoContainer } from './Description.styled';

export const Description = ({ username, tag, location, avatar,followers,views,likes }) => {
  return (
  <InfoContainer>
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
      width="250"
       height="300"
    />
    <Data>{username}</Data>
    <DataName>&#64;{tag}</DataName>
    <DataName>{location}</DataName>

    <List>
    <ListItems>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </ListItems>
    <ListItems>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </ListItems>
    <ListItems>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </ListItems>
    </List>
  </InfoContainer>
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
