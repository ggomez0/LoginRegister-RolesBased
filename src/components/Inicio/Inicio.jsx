import { Link, Navigate } from "react-router-dom";
import { Login } from "../Login/Login";

export function Inicio(){
    return(
    <div>
         <Link to="/Login"> Login </Link>
         <Link to="/Signup"> Register </Link>
    </div>)      
}

export default Inicio