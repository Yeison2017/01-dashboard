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

interface ITitlePage {
  title: string;
  subtitle: string;
}

const TitlePage = ({ title, subtitle }: ITitlePage) => {
  const { colors } = useTheme();

  return (
    <Box sx={styles().container}>
      <Typography variant="h2" sx={styles(colors).title}>
        {title.toLocaleUpperCase()}
      </Typography>

      <Typography variant="h5" sx={styles(colors).subtitle}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default TitlePage;
