import { EventTransactionHistory } from "components/EventTransactionHistory/EventTransactionHistory"

export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <EventTransactionHistory stats={items} />

</table>
  )
}
