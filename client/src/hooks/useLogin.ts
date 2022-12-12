import { useState } from "react";
import { isAxiosError } from "axios";

import { API } from "../api/QuoteApi";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const loginUser = async (email: string | undefined, password: string) => {
    setLoading(true);

    try {
      return await API.post("/api/user/log-in", {
        email,
        password,
      });
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data?.error);
      }
    }

    setLoading(false);
  };

  return { loginUser, loading, error, setError };
};
