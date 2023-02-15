import { Box, Typography } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import { mockDataTeam } from "../../data";
import { IStyles, ITokens } from "../../interfaces";
import { useTheme } from "../../hooks";

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
});

const TeamTable = () => {
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
          <Box sx={styles({ access, colors }).accessLevel}>
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

  return <DataGrid rows={mockDataTeam} columns={columns} />;
};

export default TeamTable;
