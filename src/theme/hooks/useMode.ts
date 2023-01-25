import { createTheme, PaletteMode, Theme } from "@mui/material";
import { useMemo, useState } from "react";

import { themeSettings } from "../themeSettings";

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev: PaletteMode) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme: Theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, colorMode };
};
