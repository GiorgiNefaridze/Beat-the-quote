import { useState } from "react";

import { API } from "../api/BaseUrl";

import { IUsers } from "../components/Dashboard/Dashboard";

export const useGetAllUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getAllUsers = async (): Promise<IUsers[]> => {
    setLoading(true);

    const { data } = await API.get("/api/user/get-users");

    setLoading(false);
    return data;
  };

  return { getAllUsers, loading };
};
