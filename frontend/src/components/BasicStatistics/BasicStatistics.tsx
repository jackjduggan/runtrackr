import classes from './BasicStatistics.module.css';

const data = [
  {
    title: 'Total Distance',
    stats: '214.3 km',
    description: 'You’ve run 214.3 km in the last 30 days across 22 activities.',
  },
  {
    title: 'Average Pace',
    stats: '5:32 /km',
    description: 'Consistent pacing this month with only 4 seconds variation compared to last month.',
  },
  {
    title: 'Total Elevation Gain',
    stats: '1,870 m',
    description: 'You climbed the equivalent of two Ben Nevis summits in total elevation gain.',
  },
];


function BasicStatistics() {
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <div className={classes.count}>{stat.stats}</div>
      <div className={classes.title}>{stat.title}</div>
      <div className={classes.description}>{stat.description}</div>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}

export default BasicStatistics;