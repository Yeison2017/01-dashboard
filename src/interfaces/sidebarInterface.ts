import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IItem {
  id?: number;
  title: string;
  to: string;
  Icon: typeIcon;
  selected?: string;
  setSelected?: (title: string) => void;
  typeItem?: TypeItem;
}

type typeIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

export enum TypeItem {
  noType = "",
  data = "Data",
  pages = "Pages",
  charts = "Charts",
}
