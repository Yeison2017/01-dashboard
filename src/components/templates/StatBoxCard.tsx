import { Box } from "@mui/material";

import { IStyles, ITokens, StatBoxProps } from "../../interfaces";
import { useTheme } from "../../hooks";
import StatBox from "../molecules/StatBox";

const styles = (colors?: ITokens): IStyles => ({
  row1: {
    gridColumn: "span 3",
    backgroundColor: colors?.primary[400],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const StatBoxCard = (props: StatBoxProps) => {
  const { colors } = useTheme();

  return (
    <Box sx={styles(colors).row1}>
      <StatBox {...props} />
    </Box>
  );
};

export default StatBoxCard;
