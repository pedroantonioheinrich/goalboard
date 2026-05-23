import { Link } from "react-router-dom"
import {useEffect} from "react"
import "../styles/about.css"
export function About(){

    useEffect(()=>{
        document.title = "About"
    }, [])
    return (
        <div className="about-page">
            <p className="p-button"><Link to="/" className="link-button">Back to Home</Link>
            </p>
            <h1 className="h1">About</h1>
        </div>

    )
    
}