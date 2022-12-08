import React, { useState } from "react";

import Login from "../UserAuth/UserAuth";

import { Nav, Avatar } from "./NavBar.style";

const NavBar: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>("");

  const login = () => {
    setShowPopUp(true);
  };

  return (
    <Nav>
      <button onClick={login}>Login</button>

      {/* <span>User name</span>
      <Avatar src={avatar} /> */}
      {showPopUp && <Login setShowPopUp={setShowPopUp} />}
    </Nav>
  );
};

export default NavBar;
