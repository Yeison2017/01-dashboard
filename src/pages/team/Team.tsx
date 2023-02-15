import { Box } from "@mui/material";

import { Header } from "../../components";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";
import TeamTable from "./TeamTable";

const styles = (colors?: ITokens): IStyles => ({
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
  },
});

const Team = () => {
  const { colors } = useTheme();

  return (
    <Box sx={styles().container}>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box sx={styles(colors).containerGrid}>
        <TeamTable />
      </Box>
    </Box>
  );
};

export default Team;
