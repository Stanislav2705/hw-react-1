import PropTypes from 'prop-types'
import { Description } from "components/Description/Description"
import { Board } from './EventDescription.styled'

export const EventDescription = ({ events }) => {
  return <Board>
    {events.map(({ username, tag, location, avatar,stats }) => (
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    ))}
  </Board>
}

EventDescription.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            username: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            stats: PropTypes.exact({
              followers: PropTypes.number.isRequired,
              views: PropTypes.number.isRequired,
              likes: PropTypes.number.isRequired,
            }),
        }),
    ),
};
