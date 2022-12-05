import React, { useState, useRef } from "react";

import Login from "../Login/Login";

import { Nav, Avatar } from "./NavBar.style";

const NavBar: React.FC = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>("");

  const loginBtnRef = useRef<HTMLButtonElement | null>(null);

  const login = () => {
    setShowLogin(true);
  };

  return (
    <Nav>
      <button onClick={login} ref={loginBtnRef}>
        Login
      </button>

      {/* <span>User name</span>
      <Avatar src={avatar} /> */}
      {showLogin && (
        <Login setShowLogin={setShowLogin} loginBtn={loginBtnRef} />
      )}
    </Nav>
  );
};

export default NavBar;
