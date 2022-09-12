import user from '../../user.json'
import { EventDescription } from '../EventDescription/EventDescription';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <EventDescription events={user}/>
    </Container>
  );
};
