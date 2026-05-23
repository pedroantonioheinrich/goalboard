import {useNavigate} from "react-router-dom"
import "../styles/dashboard.css"
import {useAuth} from "../hooks/useAuth.ts"
import {useEffect} from "react"
import {LogoutButton} from "../components/LogoutButton.tsx"

export function Dashboard() {
  const auth = useAuth()
  const email = auth.user?.email
  const navigate = useNavigate()

  useEffect(()=>{
    document.title = "Dashboard"
  },[])

  const handleLogout = ()=>{
    auth?.logout()
    navigate('/')
  }

  return (
    <div className="dashboard-page">
      <h1 className="h1-dashboard">Welcome, {email??"User"}</h1>
      <LogoutButton onLogout={handleLogout}/>
      <button onClick={()=> navigate('/profile')}>Profile</button>
      <button onClick={()=> navigate('/portfolio')}>Portfolio</button>
      
    </div>
    

  )
}