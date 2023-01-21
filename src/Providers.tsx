import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => {
  const { theme, colorMode } = useMode();

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
};
export default Providers;
