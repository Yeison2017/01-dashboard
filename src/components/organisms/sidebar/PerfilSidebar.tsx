import "react-pro-sidebar/dist/css/styles.css";
import { Box, Typography } from "@mui/material";

import { IStyles, IStylesSidebar, ITokens } from "../../../interfaces";

const styles = (colors?: ITokens): IStyles => ({
  perfilContainer: {
    mb: "25px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nameUser: {
    color: colors?.grey[100],
    fontWeight: "bold",
    m: "10px 0 0 0",
  },
  rolUser: {
    color: colors?.greenAccent[500],
  },
});

const stylesSidebar: IStylesSidebar = {
  img: {
    cursor: "pointer",
    borderRadius: "50%",
    objectFit: "cover",
    width: "100px",
    height: "100px",
  },
};

interface PerfilSidebarProps {
  isCollapsed: boolean;
  colors: ITokens;
}

import imageUser from "../../../assets/user.png";

const PerfilSidebar = ({ isCollapsed, colors }: PerfilSidebarProps) => {
  return (
    <>
      {!isCollapsed && (
        <Box sx={styles().perfilContainer}>
          <Box sx={styles().imageContainer}>
            <img src={imageUser} alt="profile-user" style={stylesSidebar.img} />
          </Box>

          <Box textAlign="center">
            <Typography variant="h2" sx={styles(colors).nameUser}>
              Ed Roh
            </Typography>
            <Typography variant="h5" sx={styles(colors).rolUser}>
              VP Fancy Admin
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PerfilSidebar;
