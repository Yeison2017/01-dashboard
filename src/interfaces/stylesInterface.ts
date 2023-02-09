import { SxProps, Theme } from "@mui/material";

export interface IStyles {
  [key: string]: SxProps<Theme>;
}

export interface IStylesSidebar {
  [key: string]: React.CSSProperties | undefined;
}
