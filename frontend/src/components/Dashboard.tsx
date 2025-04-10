import { Grid, Card, Text } from '@mantine/core';
import BasicStatistics from './BasicStatistics/BasicStatistics';

function Dashboard() {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Card shadow="sm" padding="lg">
          <BasicStatistics />
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <Card shadow="sm" padding="lg">
          <Text>Chart 2</Text>
        </Card>
      </Grid.Col>
    </Grid>
  );
}

export default Dashboard;