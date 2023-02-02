import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarchartOutlinedIcon from "@mui/icons-material/BarchartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { IItem, TypeItem } from "../../../interfaces";
import Item from "./Item";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const items: IItem[] = [
  {
    id: 1,
    title: "Dashboard",
    to: "/",
    Icon: HomeOutlinedIcon,
    typeItem: TypeItem.noType,
  },
  {
    id: 2,
    title: "Manage Team",
    to: "/team",
    Icon: PeopleOutlinedIcon,
    typeItem: TypeItem.data,
  },
  {
    id: 3,
    title: "Contacts Information",
    to: "/contacts",
    Icon: ContactsOutlinedIcon,
    typeItem: TypeItem.data,
  },
  {
    id: 4,
    title: "Invoices Balances",
    to: "/invoices",
    Icon: ReceiptOutlinedIcon,
    typeItem: TypeItem.data,
  },
  {
    id: 5,
    title: "Profile Form",
    to: "/form",
    Icon: PersonOutlinedIcon,
    typeItem: TypeItem.pages,
  },
  {
    id: 6,
    title: "Calendar",
    to: "/calendar",
    Icon: CalendarTodayOutlinedIcon,
    typeItem: TypeItem.pages,
  },
  {
    id: 7,
    title: "FAQ Page",
    to: "/faq",
    Icon: HelpOutlinedIcon,
    typeItem: TypeItem.pages,
  },
  {
    id: 8,
    title: "Bar Chart",
    to: "/bar",
    Icon: BarchartOutlinedIcon,
    typeItem: TypeItem.charts,
  },
  {
    id: 9,
    title: "Pie Chart",
    to: "/pie",
    Icon: PieChartOutlinedIcon,
    typeItem: TypeItem.charts,
  },
  {
    id: 10,
    title: "Line Chart",
    to: "/line",
    Icon: TimelineOutlinedIcon,
    typeItem: TypeItem.charts,
  },
  {
    id: 11,
    title: "Geography Chart",
    to: "/geography",
    Icon: MapOutlinedIcon,
    typeItem: TypeItem.charts,
  },
];

const MenuItems = () => {
  const [selected, setSelected] = useState<string>("Dashboard");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {Object.values(TypeItem).map((typeItem) => (
        <>
          <Typography variant="h6" color={colors.grey[300]}>
            {typeItem}
          </Typography>

          {items
            .filter((item) => item.typeItem === typeItem)
            .map(({ id, title, to, Icon }) => (
              <Item
                key={id}
                title={title}
                to={to}
                Icon={Icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
        </>
      ))}
    </>
  );
};

export default MenuItems;
