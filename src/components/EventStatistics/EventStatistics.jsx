import {arrayOf,string,number,shape} from 'prop-types'

export const EventStatistics = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => (
    <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  ))
}

EventStatistics.protoTypes = {
  stats: arrayOf(
    shape({
      id: string.isRequired,
      label: string.isRequired,
      percentage: number.isRequired
    })
  ).isRequired,
};
