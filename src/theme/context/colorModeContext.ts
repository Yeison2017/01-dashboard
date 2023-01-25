import { Context, createContext } from "react";
import { IColorModeContext } from "../interfaces/ITheme";

// context for color mode
export const ColorModeContext: Context<IColorModeContext> = createContext({
  toggleColorMode: () => {},
});
