import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import { Profile } from "../pages/Profile.tsx"
import { Portfolio } from "../pages/Portfolio.tsx"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
      </Routes>
    </BrowserRouter>
  );
}