import { API } from "../api/BaseUrl";

import { IUsers } from "../components/Dashboard/Dashboard";

export const useGetAllUsers = () => {
  const getAllUsers = async (): Promise<IUsers[]> => {
    const { data } = await API.get("/api/user/get-users");

    return data;
  };

  return { getAllUsers };
};
