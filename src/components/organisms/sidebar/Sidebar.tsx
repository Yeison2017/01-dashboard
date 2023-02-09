import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import MenuItems from "./MenuItems";
import { useTheme } from "../../../hooks";
import { IStyles, IStylesSidebar, ITokens } from "../../../interfaces";
import PerfilSidebar from "./PerfilSidebar";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    "& .pro-sidebar-inner": {
      background: `${colors?.primary[400]} !important`,
    },
    "& .pro-icon-wrapper": {
      backgroundColor: "transparent !important",
    },
    "& .pro-inner-item": {
      padding: "5px 35px 5px 20px !important",
    },
    "& .pro-inner-item:hover": {
      color: "#868dfb !important",
    },
    "& .pro-menu-item.active": {
      color: "#6870fa !important",
    },
  },
  headerSidebar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ml: "15px",
  },
  titleSidebar: {
    color: colors?.grey[100],
  },
});

const stylesSidebar = (colors?: ITokens): IStylesSidebar => ({
  headerContainer: {
    margin: "10px 0 20px 0",
    color: colors?.grey[100],
  },
});

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const { colors } = useTheme();

  return (
    <Box sx={styles(colors).container}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={stylesSidebar(colors).headerContainer}
          >
            {!isCollapsed && (
              <Box sx={styles().headerSidebar}>
                <Typography variant="h3" sx={styles(colors).titleSidebar}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <PerfilSidebar isCollapsed={isCollapsed} colors={colors} />

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItems />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
