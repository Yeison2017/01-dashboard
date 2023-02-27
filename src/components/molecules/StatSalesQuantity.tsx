import { Box, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";
import BarChart from "../atoms/BarChart";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: colors?.primary[400],
  },
  title: {
    fontWeight: "600",
    p: "30px 30px 0 30px",
  },
  contianerChart: {
    height: "250px",
    mt: "-20px",
  },
});

const StatSalesQuantity = () => {
  const { colors } = useTheme();
  return (
    <Box sx={styles(colors).container}>
      <Typography variant="h5" sx={styles().title}>
        Sales Quantity
      </Typography>
      <Box sx={styles().contianerChart}>
        <BarChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default StatSalesQuantity;
