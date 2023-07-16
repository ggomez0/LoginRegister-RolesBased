import { Link, Navigate } from "react-router-dom";
import { Login } from "../Login/Login";

export function Inicio(){
    return(
    <div>
        <h1> <Link to="/Login"> Login </Link>
         <br></br>
         <Link to="/Signup"> Register </Link></h1>
    </div>)      
}

export default Inicio