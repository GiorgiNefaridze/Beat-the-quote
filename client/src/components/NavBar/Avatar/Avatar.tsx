import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { UserContext } from "../../../context/UserContext";
import { AuthContext } from "../../../context/AuthPopUpContext";

const UserAvatar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { user, setUser } = UserContext();
  const { setShowPopUp } = AuthContext();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setUser({ score: 0, image: "", userName: "" });
    localStorage.clear();
  };

  const addAnotherAccount = () => {
    setShowPopUp(true);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {user?.image ? (
              <img
                style={{ width: "30px", height: "30px", borderRadius: "20px" }}
                src={user?.image}
              />
            ) : (
              <Avatar sx={{ width: 32, height: 32 }}>
                {user?.userName?.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 15,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem style={{ color: "black" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0 10px" }}>
            {user?.image ? (
              <img
                style={{ width: "30px", height: "30px", borderRadius: "20px" }}
                src={user?.image}
              />
            ) : (
              <Avatar />
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ color: "black" }}>{user?.userName}</p>
              <span style={{ color: "black", fontSize: "12px" }}>
                {user?.email}
              </span>
            </div>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem style={{ color: "black" }} onClick={addAnotherAccount}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem style={{ color: "black" }} onClick={logOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;
