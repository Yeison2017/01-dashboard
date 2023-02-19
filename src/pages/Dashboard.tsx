import { Box } from "@mui/material";

import { PageLayout, TitlePage } from "../components";
import { IStyles } from "../interfaces";

const styles: IStyles = {
  container: {
    m: "20px",
  },
  containerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const Dashboard = () => {
  return (
    // <Box sx={styles.container}>
    <PageLayout title="DASHBOARD" subtitle="Welcome to your dashboard">
      <Box sx={styles.containerHeader}>
        {/* <TitlePage title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}
      </Box>
    </PageLayout>
    // </Box>
  );
};

export default Dashboard;
