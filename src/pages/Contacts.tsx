import { Box } from "@mui/material";
import { DataGrid, GridColumns, GridToolbar } from "@mui/x-data-grid";

import { Header, Table } from "../components";
import { mockDataContacts } from "../data";
import { useTheme } from "../hooks";
import { IStyles, ITokens } from "../interfaces";

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
    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      color: `${colors?.grey[100]} !important`,
    },
  },
});

const Contacts = () => {
  const { colors } = useTheme();

  const columns: GridColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ];

  return (
    <Box sx={styles().container}>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box sx={styles(colors).containerGrid}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
