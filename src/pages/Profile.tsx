import {useAuth} from "../hooks/useAuth.ts"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

export function Profile(){
    const auth = useAuth()
    const [newEmail, setNewEmail] = useState(auth.user?.email || "")
    const navigate = useNavigate()

    function handleEmail(){
        auth.updateUserEmail(newEmail)
    }


    return (
        <div>
            <h1>Profile</h1>
            <p style={{'color':'#000'}}>Email:{auth.user?.email}</p>
            <input type="text" placeholder="New Email" value={newEmail} onChange={(e)=> {setNewEmail(e.target.value)}}/>
            <button onClick={handleEmail}>Save</button>
            <button onClick={()=> navigate('/dashboard')}>Back to dashboard</button>
            <button onClick={()=> navigate('/dashboard')}></button>
        </div>
    )
}