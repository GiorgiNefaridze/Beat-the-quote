import { useState, createContext, useContext, useEffect } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IUser {
  userName: string;
  email: string;
  image: string | null;
}

interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const userContext = createContext<IUserContext>({} as IUserContext);

export const UserContext = () => {
  return useContext(userContext);
};

export const UserContextProvider = ({ children }: IProps) => {
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user") || "false");

    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
