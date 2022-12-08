import React, { useState } from "react";

import { LoginWrapper } from "./UserAuth.style";
interface Props {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserAuth: React.FC<Props> = ({ setShowPopUp }) => {
  const [signUp, setSignUp] = useState<boolean>(false);

  const closePopUp = () => {
    setShowPopUp(false);
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const SignUp = () => {
    setSignUp(true);
  };

  const LogIn = () => {
    setSignUp(false);
  };

  return (
    <LoginWrapper onSubmit={handelSubmit}>
      <h2 onClick={closePopUp}>X</h2>
      {!signUp ? (
        <>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <div>
            <button>Login</button>
            <p>
              Don't have account?
              <span onClick={SignUp}>Sign up</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <div>
            <button>Sign up</button>
            <p>
              Already have an account?
              <span onClick={LogIn}>Log in</span>
            </p>
          </div>
        </>
      )}
    </LoginWrapper>
  );
};

export default UserAuth;
