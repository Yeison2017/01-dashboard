import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme";

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <BrowserRouter>
      <AppTheme>{children}</AppTheme>
    </BrowserRouter>
  );
};
export default Providers;
