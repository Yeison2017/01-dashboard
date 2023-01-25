import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

import { tokens } from "./tokens";

// mui theme settings
export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);
  const fontFamily = ["Source Sans Pro", "sans-serif"].join(",");

  return createTheme({
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily,
      fontSize: 12,
      h1: {
        fontFamily,
        fontSize: 40,
      },
      h2: {
        fontFamily,
        fontSize: 32,
      },
      h3: {
        fontFamily,
        fontSize: 24,
      },
      h4: {
        fontFamily,
        fontSize: 20,
      },
      h5: {
        fontFamily,
        fontSize: 16,
      },
      h6: {
        fontFamily,
        fontSize: 14,
      },
    },
  });
};
