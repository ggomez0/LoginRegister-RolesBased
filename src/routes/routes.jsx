import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import { Signup } from "../components/Signup/Signup";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

export function MyRoutes(){
    const [userName, setUsernName] = useState([])
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if (user){
                setUsernName(user.displayName)
            }
            else setUsernName("")
        })
    }, [])

    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Home name={userName}/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>

        </Routes>
    </Router>)
}