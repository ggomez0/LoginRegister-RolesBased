import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import { Signup } from "../components/Signup/Signup";

export function MyRoutes(){
    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>

        </Routes>
    </Router>)
}