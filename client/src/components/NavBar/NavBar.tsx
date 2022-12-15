import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { AuthContext } from "../../context/AuthPopUpContext";
import { UserContext } from "../../context/UserContext";
import UserAuth from "../UserAuth/UserAuth";

import { Nav, Avatar } from "./NavBar.style";

const NavBar: React.FC = () => {
  const { user } = UserContext();
  const { showPopUp, setShowPopUp } = AuthContext();

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
