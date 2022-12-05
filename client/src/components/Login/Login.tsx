import React, { useEffect, useRef } from "react";

import { LoginWrapper } from "./Login.style";

interface Props {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  loginBtn: React.MutableRefObject<HTMLButtonElement | null>;
}

const Login: React.FC<Props> = ({ setShowLogin, loginBtn }) => {
  const LoginRef = useRef<HTMLFormElement | null>(null);

  const handleOutsideClick = (e: any) => {
    const { target } = e;

    if (!LoginRef.current?.contains(target) && loginBtn.current !== target) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <LoginWrapper ref={LoginRef}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>

      <button>Login</button>
    </LoginWrapper>
  );
};

export default Login;
