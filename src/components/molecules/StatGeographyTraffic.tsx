import { Box, Typography } from "@mui/material";
import { GeographyChart } from "..";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: colors?.primary[400],
    p: "30px",
  },
  title: {
    fontWeight: "600",
    mb: "15px",
  },
  contianerChart: {
    height: "200px",
  },
});

const StatGeographyTraffic = () => {
  const { colors } = useTheme();
  return (
    <Box sx={styles(colors).container}>
      <Typography variant="h5" sx={styles().title}>
        Geography Based Traffic
      </Typography>
      <Box sx={styles().contianerChart}>
        <GeographyChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default StatGeographyTraffic;
