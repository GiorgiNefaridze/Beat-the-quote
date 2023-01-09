import { useState } from "react";
import { isAxiosError } from "axios";

import { useGetAllUsers } from "./useGetAllUsers";
import { UserContext } from "../context/UserContext";
import { AllUsersContext } from "../context//AllUsersContext";

import { API } from "../api/BaseUrl";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { getAllUsers } = useGetAllUsers();
  const { setUser } = UserContext();
  const { setUsers } = AllUsersContext();

  const loginUser = async (email: string | undefined, password: string) => {
    setLoading(true);

    try {
      const { data } = await API.post("/api/user/log-in", {
        email,
        password,
      });

      const allUsers = await getAllUsers();

      localStorage.setItem("isLogin", data?.isLogin);
      localStorage.setItem("token", data?.token);

      const { data: response } = await API.post("/api/user/get-user", {
        token: data?.token,
      });

      setUser(response);
      setUsers(allUsers);

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
