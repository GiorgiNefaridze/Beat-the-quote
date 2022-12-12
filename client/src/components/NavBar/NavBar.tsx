import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

import { UserContext } from "../../context/UserContext";
import UserAuth from "../UserAuth/UserAuth";

import { Nav, Avatar } from "./NavBar.style";

const NavBar: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const { user } = UserContext();

  const login = () => {
    setShowPopUp(true);
  };

  return (
    <Nav>
      {!user.email && <button onClick={login}>Login</button>}

      {user.email && (
        <>
          <span>{user?.userName}</span>
          {user?.image ? <Avatar src={user?.image} /> : <FaUserCircle />}
        </>
      )}
      {showPopUp && <UserAuth setShowPopUp={setShowPopUp} />}
    </Nav>
  );
};

export default NavBar;
