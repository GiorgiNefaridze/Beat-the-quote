import { useState } from "react";
import { isAxiosError } from "axios";

import { UserContext } from "../context/UserContext";
import { API } from "../api/BaseUrl";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { setUser } = UserContext();

  const loginUser = async (email: string | undefined, password: string) => {
    setLoading(true);

    try {
      const { data } = await API.post("/api/user/log-in", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data?.error);
      }
    }

    setLoading(false);
  };

  return { loginUser, loading, error, setError };
};
