import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { useLogin } from "../../../hooks/useLogin";
import { IData } from "../UserAuth";
import { Close } from "../UserAuth.style";

import { LoginForm, LoginFormComponent, ErrorDiv } from "./Login.style";

interface IProps {
  setLogIn: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<IProps> = ({ setLogIn, setShowPopUp }) => {
  const [formData, setFormData] = useState<IData>({} as IData);

  const { loginUser, loading, error, setError } = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError("");

    setFormData({ ...formData, [name]: value });
  };

  const signUp = () => {
    setLogIn(true);
  };

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = formData;

    const user = await loginUser(email, password);

    if (user?.isLogin) {
      setShowPopUp(false);
    }
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <LoginForm onSubmit={handelSubmit}>
      <Close>
        <CloseIcon titleAccess="close" onClick={closePopUp} />
      </Close>
      <LoginFormComponent>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={formData.email}
          name="email"
          type="text"
          id="email"
        />
      </LoginFormComponent>
      <LoginFormComponent>
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          value={formData.password}
          type="password"
          id="password"
          name="password"
        />
      </LoginFormComponent>
      <LoginFormComponent>
        <button type="submit">Login</button>
        <p>
          Don't have account?
          <span onClick={signUp}>Sign up</span>
        </p>
      </LoginFormComponent>
      {error && <ErrorDiv>{error}</ErrorDiv>}
    </LoginForm>
  );
};

export default Login;
