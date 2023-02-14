import { DataGrid, GridColumns } from "@mui/x-data-grid";
interface ITable {
  mockData: readonly any[];
  columns: GridColumns;
}

const Table = ({ mockData, columns }: ITable) => {
  return <DataGrid rows={mockData} columns={columns} />;
};

export default Table;
