import { EventFriendList } from 'components/EventFriendList/EventFriendList'

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      <EventFriendList status={friends} />
    </ul>
  )
}
