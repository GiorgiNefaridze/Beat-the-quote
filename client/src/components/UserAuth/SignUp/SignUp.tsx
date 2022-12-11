import React, { useState } from "react";

import { IData } from "../UserAuth";

interface IProps {
  setLogIn: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<IProps> = ({ setLogIn, setShowPopUp }) => {
  const [formData, setFormData] = useState<IData>({} as IData);
  const [image, setImage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    const reader = new FileReader();
    if (files) {
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
    }
  };

  const logIn = () => {
    setLogIn(false);
  };

  return (
    <>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          value={formData.userName}
          type="text"
          id="username"
          name="username"
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
        <img style={{ width: "40px", height: "40px" }} src={image} />
      </div>
      <div>
        <button type="submit">Sign up</button>
        <p>
          Already have an account?
          <span onClick={logIn}>Log in</span>
        </p>
      </div>
    </>
  );
};

export default SignUp;
