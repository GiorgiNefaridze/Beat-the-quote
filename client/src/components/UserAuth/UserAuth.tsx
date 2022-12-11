import React, { useState } from "react";

import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

import { LoginWrapper } from "./UserAuth.style";
export interface Props {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IData {
  userName: string;
  password: string;
  email?: string;
  image?: string;
}

const UserAuth: React.FC<Props> = ({ setShowPopUp }) => {
  const [logIn, setLogIn] = useState<boolean>(false);

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <LoginWrapper>
      <h2 onClick={closePopUp}>X</h2>
      {!logIn ? (
        <Login setShowPopUp={setShowPopUp} setLogIn={setLogIn} />
      ) : (
        <SignUp setLogIn={setLogIn} setShowPopUp={setShowPopUp} />
      )}
    </LoginWrapper>
  );
};

export default UserAuth;
