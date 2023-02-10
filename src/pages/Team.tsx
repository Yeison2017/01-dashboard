import { Box, Typography } from "@mui/material";
import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import { Header } from "../components";
import { mockDataTeam } from "../data";
import { useTheme } from "../hooks";
import { IStyles, ITokens } from "../interfaces";

interface IStylesProps {
  access?: string;
  colors?: ITokens;
}

const styles = ({ access, colors }: IStylesProps): IStyles => ({
  accessLevel: {
    width: "60%",
    m: "0 auto",
    p: "5px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "4px",
    backgroundColor:
      access === "admin" ? colors?.greenAccent[600] : colors?.greenAccent[700],
  },
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

  const columns: GridColumns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box sx={styles({ access, colors }).access}>
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}

            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={styles({}).container}>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box sx={styles({ colors }).containerGrid}>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
