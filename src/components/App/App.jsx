import user from '../../user.json'
import { EventDescription } from '../EventDescription/EventDescription';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <EventDescription events={user}/>
    </div>
  );
};
