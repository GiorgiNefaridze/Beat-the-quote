import { useState, createContext, useContext } from "react";

import { IProps, IUser } from "./UserContext";

interface IAllUsersContext {
  users: IUser[];
  setUser: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const usersContext = createContext<IAllUsersContext>({} as IAllUsersContext);

export const AllUsersContext = () => {
  return useContext(usersContext);
};

export const AllUsersContextProvider = ({ children }: IProps) => {
  const [users, setUser] = useState<IUser[]>([]);

  return (
    <usersContext.Provider value={{ users, setUser }}>
      {children}
    </usersContext.Provider>
  );
};
