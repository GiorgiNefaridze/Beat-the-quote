import { useState, createContext, useContext } from "react";

import { IProps } from "./UserContext";

interface IAuthContext {
  showPopUp: boolean;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const authContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContext = () => {
  return useContext(authContext);
};

export const AuthContextProvider = ({ children }: IProps) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  return (
    <authContext.Provider value={{ showPopUp, setShowPopUp }}>
      {children}
    </authContext.Provider>
  );
};
