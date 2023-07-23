import { User } from "@/utils/types";
import { ReactNode, createContext, useContext, useState } from "react";

interface UserContextType {
  hasLoggedUser: boolean;
  loggedUser?: User;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

export const UserContext = createContext({} as UserContextType);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [loggedUser, setLoggedUser] = useState<User | undefined>(undefined);

  const hasLoggedUser = !!loggedUser;

  const loginUser = (user: User) => {
    setLoggedUser(user);
  };

  const logoutUser = () => {
    setLoggedUser(undefined);
  };

  return (
    <UserContext.Provider
      value={{
        hasLoggedUser,
        loggedUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
