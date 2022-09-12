import PropTypes from 'prop-types'
import { Description } from "components/Description/Description"
import { Board } from './EventDescription.styled'

export const EventDescription = ({ events }) => {
  return <Board>
    {events.map(({ username, tag, location, avatar }) => (
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
    ))}
  </Board>
}

EventDescription.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        }),
    ),
};
