import { Box } from "@mui/material";

import { Header } from "../../components";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";

const styles = (
  colors?: ITokens,
  addStylesGrid?: object | undefined
): IStyles => ({
  container: {
    m: "20px",
  },
  containerGrid: {
    m: "40px 0 0 0",
    height: "75vh",
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .name-column--cell": {
      color: colors?.greenAccent[300],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors?.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors?.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors?.blueAccent[700],
    },
    ...addStylesGrid,
  },
});

interface IPageWithTable {
  title: string;
  subtitle: string;
  addStylesGrid?: object | undefined;
  children: React.ReactNode;
}

const PageWithTable = ({
  title,
  subtitle,
  addStylesGrid,
  children,
}: IPageWithTable) => {
  const { colors } = useTheme();

  return (
    <Box sx={styles().container}>
      <Header title={title.toLocaleUpperCase()} subtitle={subtitle} />
      <Box sx={styles(colors, addStylesGrid).containerGrid}>{children}</Box>
    </Box>
  );
};

export default PageWithTable;
