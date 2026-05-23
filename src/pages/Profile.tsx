import {useAuth} from "../hooks/useAuth.ts"

export function Profile(){
    const auth = useAuth()

    return (
        <div>
            <h1>Profile</h1>
            <p>Email:{auth.user?.email}</p>
        </div>
    )
}