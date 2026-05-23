import "../styles/home.css"
import { Link } from "react-router-dom";
import {useEffect} from "react"



export function Home(){

    useEffect(()=>{
    document.title = "Home"
  }, [])

    return (
        <>
        <nav className="navbar">
            <ul className="ul">
                <li className="li"><Link to="/about">About</Link></li>
                <li className="li"><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        </>
    )
}