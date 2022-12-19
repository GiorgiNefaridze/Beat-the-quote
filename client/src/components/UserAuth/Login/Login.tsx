import React, { useState } from "react";

import { useLogin } from "../../../hooks/useLogin";

import { IData } from "../UserAuth";

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

    if (user) {
      setShowPopUp(false);
    }
  };

  if (loading) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={formData.email}
          name="email"
          type="text"
          id="email"
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
        <button type="submit">Login</button>
        <p>
          Don't have account?
          <span onClick={signUp}>Sign up</span>
        </p>
      </div>
      {error && <span>{error}</span>}
    </form>
  );
};

export default Login;
