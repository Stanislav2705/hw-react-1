import PropTypes from 'prop-types'
import { Description } from "components/Description/Description"

export const EventDescription = ({ events }) => {
  return (<div>
    {events.map(({ username, tag, location, avatar }) => (
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
    ))}
  </div>)
}

EventDescription.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            username: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        }),
    ),
};
