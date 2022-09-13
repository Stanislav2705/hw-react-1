import user from '../../user.json'
import data from '../../data.json'
import friends from '../../friends.json'
import transactions from '../../transactions.json'
import { EventDescription } from '../EventDescription/EventDescription';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <Container>
      <EventDescription events={user} />
      <Statistics events={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
