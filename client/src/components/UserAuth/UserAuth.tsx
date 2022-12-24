import React, { useState } from "react";

import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

import { LoginWrapper, Close } from "./UserAuth.style";
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

  return (
    <LoginWrapper status={logIn}>
      {!logIn ? (
        <Login setShowPopUp={setShowPopUp} setLogIn={setLogIn} />
      ) : (
        <SignUp setShowPopUp={setShowPopUp} setLogIn={setLogIn} />
      )}
    </LoginWrapper>
  );
};

export default UserAuth;
