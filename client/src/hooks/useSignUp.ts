import { useState } from "react";
import { isAxiosError } from "axios";

import { API } from "../api/BaseUrl";

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const signUp = async (
    userName: string | undefined,
    email: string | undefined,
    password: string | undefined,
    image?: string | undefined
  ) => {
    setLoading(true);
    try {
      const response = await API.post("/api/user/sign-up", {
        userName,
        email,
        password,
        image,
      });

      setLoading(false);

      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error?.response?.data?.error);
      }
      setLoading(false);
    }
  };

  return { signUp, loading, error, setError };
};
