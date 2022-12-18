import { API } from "../api/BaseUrl";

export const useGetAllUsers = () => {
  const getAllUSers = async () => {
    const users = await API("/api/users/get-users");

    return users;
  };

  return { getAllUSers };
};
