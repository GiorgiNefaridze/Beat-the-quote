import { useState, createContext, useContext } from "react";

import { IProps } from "./UserContext";
import { IUsers } from "../components/Dashboard/Dashboard";

interface IAllUsersContext {
  users: IUsers[];
  setUsers: React.Dispatch<React.SetStateAction<IUsers[]>>;
}

const usersContext = createContext<IAllUsersContext>({} as IAllUsersContext);

export const AllUsersContext = () => {
  return useContext(usersContext);
};

export const AllUsersContextProvider = ({ children }: IProps) => {
  const [users, setUsers] = useState<IUsers[]>([]);

  return (
    <usersContext.Provider value={{ users, setUsers }}>
      {children}
    </usersContext.Provider>
  );
};
