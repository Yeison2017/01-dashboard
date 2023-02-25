import { Box, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactElement } from "react";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";
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

interface StatBoxProps {
  title: string;
  subtitle: string;
  Icon: ReactElement<
    OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    }
  >;
  progress: string;
  increase: string;
}

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
          {Icon}
          {/* <Icon /> */}
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
