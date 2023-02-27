import { Box, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { IStyles, ITokens, StatBoxProps } from "../../interfaces";
import ProgressCircle from "../atoms/ProgressCircle";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    width: "100%",
    m: "0 30px",
  },
  containerFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    color: colors?.greenAccent[600],
    fontSize: "26px",
  },
  title: {
    fontWeight: "bold",
    color: colors?.grey[100],
  },
  subtitle: {
    color: colors?.greenAccent[500],
  },
  increase: {
    color: colors?.greenAccent[600],
    fontStyle: "italic",
  },
});

const StatBox = ({
  title,
  subtitle,
  Icon,
  progress,
  increase,
}: StatBoxProps) => {
  const { colors } = useTheme();

  return (
    <Box sx={styles().container}>
      <Box sx={styles().containerFlex}>
        <Box>
          <Icon sx={styles(colors).icon} />
          <Typography variant="h4" sx={styles(colors).title}>
            {title}
          </Typography>
        </Box>

        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box sx={styles().containerFlex}>
        <Typography variant="h5" sx={styles(colors).subtitle}>
          {subtitle}
        </Typography>
        <Typography variant="h5" sx={styles(colors).increase}>
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
