import { EventStatistics } from 'components/EventStatistics/EventStatistics';

export const Statistics = ({ events }) => {
  return (
  <section class="statistics">
  <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
       <EventStatistics stats={events} />
      </ul>
  </section>
  );
}


