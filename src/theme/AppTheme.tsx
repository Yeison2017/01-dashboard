import { ReactNode } from "react";
import { ColorModeContext, useMode } from "./";
import { CssBaseline, ThemeProvider } from "@mui/material";

interface IAppTheme {
  children: ReactNode;
}

const AppTheme = ({ children }: IAppTheme) => {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default AppTheme;
