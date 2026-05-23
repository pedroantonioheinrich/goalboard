import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import "../styles/login.css"
import {loginUser} from "../services/authService.ts"
import {useAuth} from "../hooks/useAuth.ts" 
import {Input} from "../components/Input.tsx"
import {validateEmail} from "../utils/validateEmail.ts"


export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const auth = useAuth()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  
  useEffect(()=>{
    document.title = "Login"
  }, [])

  useEffect(()=>{
    if(!message) return
    const timer = setTimeout(()=>{
      setMessage("")
    }, 3000)
    return () => clearTimeout(timer)
  }, [message])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    
    
    if(!email || !password){
      setMessage("Fill all fields...")
      setLoading(false)
      return
    }
    
    if(!validateEmail(email)){
      setMessage("Ivalid e-mail format...")
      return
    }

    setMessage("")

    setLoading(true)
    const success = await loginUser(email, password)
    setLoading(false)

    if(success){
      auth?.login(email)
      navigate(`/dashboard?email=${email}`)
      
    }else{
      setMessage("Login failed..")
    }
  }

  return (
    <div className="login-page">
      <form className="form-container" onSubmit={handleSubmit}>

        <h1 className="h1-form">Account Login</h1>

        <Input label="E-mail" className="input-email" type="text" placeholder="Type your e-mail here..." value={email} onChange={(e)=>{setEmail(e.target.value)}} error={!email? "E-mail required": ""}/>

        <Input label="Pasword" type={showPassword? "text":"password"} className="input-password" placeholder="Type your password here..." value={password} onChange={(e)=>{setPassword(e.target.value)}} error={!password? "Password required": ""}/>

        <button className="button-show-password" type="button" onClick={()=> setShowPassword(!showPassword)} disabled={!email || !password || loading}>{showPassword? "Hide": "Show"}</button>

        <button type="submit" className="button-form" disabled={loading}>{loading? (<><span className="spinner"></span>Loading...</>):("Login")}</button>

        <div className="span-form"><p className="p-form">{message}</p>
        </div>

      </form>
    </div>
  )
}