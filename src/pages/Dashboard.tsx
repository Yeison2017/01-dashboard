import { Box, Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import {
  TitlePage,
  StatBoxCard,
  StatRevenueGenerated,
  StatRecentTransactions,
  StatCampaign,
  StatSalesQuantity,
  StatGeographyTraffic,
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
        <StatRevenueGenerated />
        <StatRecentTransactions />

        {/* ROW 3 */}
        <StatCampaign />
        <StatSalesQuantity />
        <StatGeographyTraffic />
      </Box>
    </Box>
  );
};

export default Dashboard;
