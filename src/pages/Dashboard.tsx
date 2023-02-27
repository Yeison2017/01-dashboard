import { Box, Button, Typography } from "@mui/material";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import {
  BarChart,
  GeographyChart,
  ProgressCircle,
  TitlePage,
  StatBoxCard,
  StatRevenueGenerated,
  StatRecentTransactions,
  StatCampaign,
} from "../components";
import { IStyles, ITokens } from "../interfaces";
import { useTheme } from "../hooks";
import { mockStatBasic } from "../data";

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
  containerRow2: {
    gridColumn: "span 8",
    gridRow: "span 2",
    backgroundColor: colors?.primary[400],
  },
  row2: {
    mt: "25px",
    p: "0 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerTransition: {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: colors?.primary[400],
    overflow: "auto",
  },
  cartTransition: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `4px solid ${colors?.primary[500]}`,
    colors: colors?.grey[100],
    p: "15px",
  },
});

const Dashboard = () => {
  const { colors } = useTheme();

  return (
    <Box sx={styles().container}>
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
        {/* ROW 1 */}
        {mockStatBasic.map((item) => (
          <StatBoxCard {...item} />
        ))}

        {/* ROW 2 */}
        <Box sx={styles(colors).containerRow2}>
          <StatRevenueGenerated />
        </Box>

        {/* TRANSACTIONS */}
        <Box sx={styles(colors).containerTransition}>
          <StatRecentTransactions />
        </Box>

        {/* ROW 3 */}
        <StatCampaign />

        {/*  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/*  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{ backgroundColor: colors.primary[400] }}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
