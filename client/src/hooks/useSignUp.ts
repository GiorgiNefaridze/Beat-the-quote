import { useState } from "react";
import { isAxiosError } from "axios";

import { API } from "../api/BaseUrl";

interface IData {
  userName: string;
  email: string;
  password: string;
  image: string;
}

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const signUp = async (data: IData) => {
    setLoading(true);

    try {
      const {
        data: { text },
      } = await API.post("/api/user/sign-up", data);

      setLoading(false);

      return { message: text, status: "ok" };
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error?.response?.data?.error);
      }
      setLoading(false);

      return { message: "Something went wrong", status: "bad" };
    }
  };

  return { signUp, loading, error, setError };
};
