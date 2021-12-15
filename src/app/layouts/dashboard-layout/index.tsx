import React from 'react';
import { Grid } from '@material-ui/core/';
import DashboardSideNav from './dashboard-sidebar-nav';

type Props = {
  children: React.ReactNode;
};

const Dashboard = ({ children }: Props) => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <DashboardSideNav /> {children}
      </Grid>
    </div>
  );
};

export default Dashboard;
