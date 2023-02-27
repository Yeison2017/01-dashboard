import { Box, IconButton, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";
import LineChart from "../atoms/LineChart";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    gridColumn: "span 8",
    gridRow: "span 2",
    backgroundColor: colors?.primary[400],
  },
  headerTitle: {
    mt: "25px",
    p: "0 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    color: colors?.grey[100],
  },
  price: {
    fontWeight: "bold",
    color: colors?.greenAccent[500],
  },
  icon: {
    fontSize: "26px",
    color: colors?.greenAccent[500],
  },
  containerChart: {
    height: "250px",
    mt: "-20px",
  },
});

const StatRevenueGenerated = () => {
  const { colors } = useTheme();
  return (
    <Box sx={styles(colors).container}>
      <Box sx={styles().headerTitle}>
        <Box>
          <Typography sx={styles(colors).title} variant="h5">
            Revenue Generated
          </Typography>
          <Typography variant="h3" sx={styles(colors).price}>
            $59,342,32
          </Typography>
        </Box>

        <Box>
          <IconButton>
            <DownloadOutlinedIcon sx={styles(colors).icon} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles().containerChart}>
        <LineChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default StatRevenueGenerated;
