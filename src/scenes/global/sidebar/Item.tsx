import { SvgIconTypeMap, Typography, useTheme, Theme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import { tokens } from "../../../theme";
import { IItem } from "../../../theme/interfaces";

type typeIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

const Item = ({ title, to, Icon, selected, setSelected }: IItem) => {
  const theme: Theme = useTheme();

  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.greenAccent[100] }}
      onClick={() => setSelected(title)}
      icon={<Icon />}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default Item;
