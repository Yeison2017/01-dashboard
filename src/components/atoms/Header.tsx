import { Box, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    mb: "30px",
  },
  title: {
    color: colors?.grey[100],
    fontWeight: "bold",
  },
  subtitle: {
    color: colors?.greenAccent[400],
  },
});

interface IHeader {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: IHeader) => {
  const { colors } = useTheme();

  return (
    <Box sx={styles().container}>
      <Typography variant="h2" sx={styles(colors).title}>
        {title}
      </Typography>

      <Typography variant="h5" sx={styles(colors).subtitle}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
