import {arrayOf,string,shape} from 'prop-types'

export const EventTransactionHistory = ({ stats }) => {
  return stats.map(({id,type,amount,currency}) => (
    <tbody id={id}>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
  ))
}

EventTransactionHistory.protoTypes = {
  stats: arrayOf(
    shape({
      id: string.isRequired,
      type: string.isRequired,
      amount: string.isRequired,
      currency: string.isRequired
    })
  ).isRequired,
};
