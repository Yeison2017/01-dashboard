import { Box, Button, IconButton, Typography } from "@mui/material";

import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";

import {
  PageLayout,
  LineChart,
  BarChart,
  GeographyChart,
  StatBox,
  ProgressCircle,
  TitlePage,
} from "../components";
import { IStyles, ITokens } from "../interfaces";
import { useTheme } from "../hooks";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    m: "20px",
  },
  containerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonDownload: {
    backgroundColor: colors?.blueAccent[700],
    color: colors?.grey[100],
    fontSize: "14px",
    fontWeight: "bold",
    padding: "10px 20px",
  },
  icon: {
    mr: "10px",
  },
  containerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridAutoRows: "140px",
    gap: "20px",
  },
  row1: {
    gridColumn: "span 3",
    backgroundColor: colors?.primary[400],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Dashboard = () => {
  const { colors } = useTheme();

  return (
    <Box m="20px">
      <Box sx={styles().containerHeader}>
        <TitlePage title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button sx={styles(colors).buttonDownload}>
            <DownloadOutlinedIcon sx={styles().icon} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box sx={styles().containerGrid}>
        <Box sx={styles(colors).row1}>
          <StatBox
            title="12,361"
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            Icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box sx={styles(colors).row1}>
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            Icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box sx={styles(colors).row1}>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            Icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box sx={styles(colors).row1}>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            Icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
