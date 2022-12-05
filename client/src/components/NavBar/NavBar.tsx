import React, { useState } from "react";

import { Nav, Avatar } from "./NavBar.style";

const NavBar: React.FC = () => {
  const [avatar, setAvatar] = useState<string>("");

  return (
    <Nav>
      <button>Login</button>

      {/* <span>User name</span>
      <Avatar src={avatar} /> */}
    </Nav>
  );
};

export default NavBar;
