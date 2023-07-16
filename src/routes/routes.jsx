import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import { Signup } from "../components/Signup/Signup";
import { Inicio } from "../components/Inicio/Inicio";
import { useState } from "react";



export function MyRoutes(){
    const [userName, setUserName] = useState([])

    return(
    <Router>
        <Routes>
            <Route exact path="/Inicio" element={<Inicio/>}/>         
            <Route exact path="/" element={<Home name={userName}/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>
        </Routes>
    </Router>)

}