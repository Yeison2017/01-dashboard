import { Typography } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { useEffect } from "react";

import { mockDataInvoices } from "../../data";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";

const styles = (colors?: ITokens): IStyles => ({
  containerGrid: {
    "& .MuiCheckbox-root": {
      color: `${colors?.greenAccent[500]} !important`,
    },
  },
});

interface IInvoicesTable {
  setAddStylesGrid?: React.Dispatch<React.SetStateAction<object | undefined>>;
}

const InvoicesTable = ({ setAddStylesGrid }: IInvoicesTable) => {
  const { colors } = useTheme();

  useEffect(() => {
    setAddStylesGrid && setAddStylesGrid({ ...styles(colors).containerGrid });
  }, []);

  const columns: GridColumns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
  );
};

export default InvoicesTable;
