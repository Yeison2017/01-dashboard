import { Box } from "@mui/material";

import { Header } from "../components";
import { IStyles, ITokens } from "../interfaces";

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
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
