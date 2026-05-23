import {useState} from "react"
import { AuthContext } from "./AuthContext.tsx"
import type { User } from "./AuthContext.tsx"


export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth") === "true")
  const [user, setUser] = useState<User | null>(localStorage.getItem("userEmail")? { email: localStorage.getItem("userEmail")!, } : null)

  function login(email:string) {
    localStorage.setItem("auth", "true")
    localStorage.setItem("userEmail", email)
    setIsAuthenticated(true);
    setUser({email})
  }

  function logout() {
    localStorage.removeItem("auth")
    localStorage.removeItem("userEmail")
    setIsAuthenticated(false);
    setUser(null)
    
  }

  function updateUserEmail(email: string){
    setUser({email})
    localStorage.setItem("userEmail", email)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        updateUserEmail
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}