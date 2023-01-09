import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { useSignUp } from "../../../hooks/useSignUp";
import { IData } from "../UserAuth";

import { LoginForm, LoginFormComponent, ErrorDiv } from "../Login/Login.style";
import { Close } from "../UserAuth.style";

interface IProps {
  setLogIn: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<IProps> = ({ setLogIn, setShowPopUp }) => {
  const [formData, setFormData] = useState<IData>({
    userName: "",
    email: "",
    password: "",
    image: "",
  });

  const { signUp, error, setError, loading } = useSignUp();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError("");

    setFormData({ ...formData, [name]: value });
  };

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setFormData({ ...formData, image: reader.result });
        }
      };
    }
  };

  const logIn = () => {
    setLogIn(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { message, status } = await signUp(formData);

    if (status === "ok") {
      logIn();
    }
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <Close>
        <CloseIcon titleAccess="close" onClick={closePopUp} />
      </Close>
      <LoginFormComponent>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          value={formData.userName}
          type="text"
          id="username"
          name="userName"
        />
      </LoginFormComponent>
      <LoginFormComponent>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={formData.email}
          type="text"
          id="email"
          name="email"
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
      <LoginFormComponent style={{ height: "20%" }}>
        <input
          onChange={uploadImage}
          style={{ display: "none" }}
          type="file"
          id="image"
        />
        <label htmlFor="image">Upload Image</label>
        <img style={{ width: "40px", height: "40px" }} src={formData?.image} />
      </LoginFormComponent>
      <LoginFormComponent>
        <button type="submit">Sign up</button>
        <p>
          Already have an account?
          <span onClick={logIn}>Log in</span>
        </p>
      </LoginFormComponent>
      {error && <ErrorDiv>{error}</ErrorDiv>}
    </LoginForm>
  );
};

export default SignUp;
