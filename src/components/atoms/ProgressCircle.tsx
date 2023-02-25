import { Box } from "@mui/material";

import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";

interface Styles {
  colors: ITokens;
  angle: number;
  size: string;
}

const styles = ({ colors, angle, size }: Styles): IStyles => ({
  container: {
    background: `radial-gradient(${colors?.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors?.greenAccent[500]}`,
    borderRadius: "50%",
    width: `${size}px`,
    height: `${size}px`,
  },
});

interface ProgressCircleProps {
  progress: string;
  size?: string;
}

const ProgressCircle = ({
  progress = "0.75",
  size = "40",
}: ProgressCircleProps) => {
  const { colors } = useTheme();
  const angle: number = parseFloat(progress) * 360;

  return <Box sx={styles({ colors, angle, size }).container} />;
};

export default ProgressCircle;
