import { DataGrid, GridColumns, GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";

import { mockDataContacts } from "../../data";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";

const styles = (colors?: ITokens): IStyles => ({
  containerGrid: {
    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      color: `${colors?.grey[100]} !important`,
    },
  },
});

interface IContactsTable {
  setAddStylesGrid?: React.Dispatch<React.SetStateAction<object | undefined>>;
}

const ContactsTable = ({ setAddStylesGrid }: IContactsTable) => {
  const { colors } = useTheme();

  useEffect(() => {
    setAddStylesGrid && setAddStylesGrid({ ...styles(colors).containerGrid });
  }, []);

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
    <DataGrid
      rows={mockDataContacts}
      columns={columns}
      components={{ Toolbar: GridToolbar }}
    />
  );
};

export default ContactsTable;
