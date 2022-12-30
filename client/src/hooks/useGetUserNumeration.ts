import { API } from "../api/BaseUrl";

interface IProps {
  (userName: string): Promise<{ userNumeration: number }>;
}

export const userGetUserNumeration = () => {
  const getUserNumeration: IProps = async (userName) => {
    const { data } = await API.post("/api/user/get-numeration", {
      userName,
    });

    return data;
  };

  return { getUserNumeration };
};
