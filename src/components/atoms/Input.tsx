import { Box, IconButton, InputBase } from "@mui/material";

import { useTheme } from "../../hooks";
import { IInput, IStyles, ITokens } from "../../interfaces";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    display: "flex",
    backgroundColor: colors?.primary[400],
    marginRight: 3,
    borderRadius: "3px",
  },
  input: {
    ml: 2,
    flex: 1,
  },
  icon: {
    p: 1,
  },
});

const Input = ({ Icon, ...props }: IInput) => {
  const { colors } = useTheme();

  return (
    <Box sx={styles(colors).container}>
      <InputBase sx={styles().input} {...props} />
      <IconButton type="button" sx={styles().icon}>
        <Icon />
      </IconButton>
    </Box>
  );
};

export default Input;
