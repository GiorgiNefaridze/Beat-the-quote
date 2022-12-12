import React, { useState } from "react";

import { useSignUp } from "../../../hooks/useSignUp";

import { IData } from "../UserAuth";

interface IProps {
  setLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<IProps> = ({ setLogIn }) => {
  const [formData, setFormData] = useState<IData>({} as IData);

  const { signUp, error, setError, loading } = useSignUp();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setError("");

    setFormData({ ...formData, [name]: value });
  };

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    const reader = new FileReader();
    if (files) {
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

    const { userName, password, email, image } = formData;

    const createdUser = await signUp(userName, email, password, image);
    if (createdUser?.data.text) {
      console.log(createdUser?.data.text);
      logIn();
    }
  };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          value={formData.userName}
          type="text"
          id="username"
          name="userName"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          value={formData.password}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <div>
        <input
          onChange={uploadImage}
          style={{ display: "none" }}
          type="file"
          id="image"
        />
        <label htmlFor="image">Upload Image</label>
        <img style={{ width: "40px", height: "40px" }} src={formData?.image} />
      </div>
      <div>
        <button type="submit">Sign up</button>
        <p>
          Already have an account?
          <span onClick={logIn}>Log in</span>
        </p>
      </div>
      {error}
    </form>
  );
};

export default SignUp;
