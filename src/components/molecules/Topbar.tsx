import { Box, IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { useTheme } from "../../hooks";
import { IStyles } from "../../interfaces";
import { Input } from "../";

export const styles: IStyles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    p: 2,
  },
};

const Topbar = () => {
  const { mode, toggleColorMode } = useTheme();

  return (
    <Box sx={styles.container}>
      <Input placeholder="Search" Icon={SearchIcon} />

      <Box display="flex">
        <IconButton onClick={toggleColorMode}>
          {mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
