import { Box } from "@mui/material";

import { TitlePage } from "..";
import { IStyles } from "../../interfaces";

const styles: IStyles = {
  container: {
    m: "20px",
  },
};

interface IPageLayout {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, subtitle, children }: IPageLayout) => {
  return (
    <Box sx={styles.container}>
      <TitlePage title={title.toLocaleUpperCase()} subtitle={subtitle} />
      {children}
    </Box>
  );
};

export default PageLayout;
