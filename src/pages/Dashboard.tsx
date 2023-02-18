import { Box } from "@mui/material";

import { TitlePage } from "../components";
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
    <Box sx={styles.container}>
      <Box sx={styles.containerHeader}>
        <TitlePage title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
