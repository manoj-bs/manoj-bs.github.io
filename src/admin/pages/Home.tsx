import Grid from "@material-ui/core/Grid";
import React from "react";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import RecentNotifications from "../components/RecentNotifications";
import FollowersWidget from "../widgets/FollowersWidget";
import MeetingWidgets from "../widgets/MeetingWidgets";
import PersonalTargetsWidget from "../widgets/PersonalTargetsWidget";
import WelcomeWidget from "../widgets/WelcomeWidget";

const Home = () => {
  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar>
          <RecentNotifications />
        </AdminToolbar>
      </AdminAppBar>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <WelcomeWidget />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FollowersWidget />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PersonalTargetsWidget />
          <MeetingWidgets />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;