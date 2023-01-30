import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className="statistics">
        <h2 className="title">2- Секція статистики</h2>
        {title && <h3 className="title">{title}</h3>}
        <ul>
          {stats.map(stat => (
            <StatisticsItem key={stat.id} data={stat} />
          ))}
        </ul>
      </section>
    </div>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
