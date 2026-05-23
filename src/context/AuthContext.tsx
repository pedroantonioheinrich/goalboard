import { createContext } from "react";

export type User = {
  email: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  login: (email : string) => void
  logout: () => void
  updateUserEmail: (email:string) => void
};

export const AuthContext = createContext<AuthContextType | null>(null)

