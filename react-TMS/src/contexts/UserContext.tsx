import { createContext, useState } from "react";
import { USERS } from "../constants/users";
import { useNavigate } from "react-router-dom";
import type { LoginFormData } from "../types/form";

type User = {
  id: number,
  username: string,
  password: string,
  gender: string,
  age: number,
  firstName: string,
  lastName: string,
}

type UserContextType = {
    user: User | null;
    login: ({ username, password }: LoginFormData) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserContextProvider = ({children}: {children: React.ReactNode}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate()

  const login = ({username, password}: LoginFormData) => {
    const user = USERS.find(user => user.username === username && user.password === password);

    if (!user) {
      throw new Error('User not found')
    }

    setCurrentUser(user)
    navigate('/')
  }

  return <UserContext.Provider value={{user: currentUser, login}}>{children}</UserContext.Provider>
}