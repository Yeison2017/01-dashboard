import { useContext } from "react";
import { useTheme as useThemeMui } from "@mui/material";

import { ColorModeContext, tokens } from "../theme";

export const useTheme = () => {
  const theme = useThemeMui();
  const mode = theme.palette.mode;
  const colors = tokens(theme.palette.mode);

  const colorMode = useContext(ColorModeContext);
  const { toggleColorMode } = colorMode;

  return { mode, colors, toggleColorMode };
};
