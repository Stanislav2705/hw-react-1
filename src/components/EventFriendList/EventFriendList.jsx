import {arrayOf,string,number,shape,bool} from 'prop-types'

export const EventFriendList = ({ status }) => {
  return status.map(({ avatar, name, isOnline, id }) => (
    <li class="item" id={id}>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  ))
}

EventFriendList.protoTypes = {
  status: arrayOf(
    shape({
      id: number.isRequired,
      isOnline: bool.isRequired,
      avatar: string.isRequired,
      name: string.isRequired
    })
  ).isRequired,
};
