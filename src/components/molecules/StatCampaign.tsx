import { Box, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";
import ProgressCircle from "../atoms/ProgressCircle";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    gridColumn: "span 4",
    gridRow: "span 2",
    p: "30px",
    backgroundColor: colors?.primary[400],
  },
  title: {
    fontWeight: "600",
  },
  contianerChart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "25px",
  },
});

const StatCampaign = () => {
  const { colors } = useTheme();
  return (
    <Box sx={styles(colors).container}>
      <Typography variant="h5" sx={styles().title}>
        Campaign
      </Typography>
      <Box sx={styles().contianerChart}>
        <ProgressCircle size="125" />
        <Typography
          variant="h5"
          color={colors.greenAccent[500]}
          sx={{ mt: "15px" }}
        >
          $48,352 revenue generrated
        </Typography>
        <Typography>Includes extra misc expenditures and costs</Typography>
      </Box>
    </Box>
  );
};

export default StatCampaign;
