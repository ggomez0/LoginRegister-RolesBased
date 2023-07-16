import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import { Signup } from "../components/Signup/Signup";
import { useEffect, useState } from "react";
import { FirebaseApp } from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Inicio } from "../components/Inicio/Inicio";

const auth = getAuth(FirebaseApp);
const firestore = getFirestore(FirebaseApp);

export function MyRoutes(){
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState([])

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if (user){
                setUserName(user.displayName)
            }
            else setUserName("")
        })
    }, [])

    async function getRol(uid) {
      const docuRef = doc(firestore, `usuarios/${uid}`);
      const docuCifrada = await getDoc(docuRef);
      const rol_uid = docuCifrada.data().rol;
      return rol_uid;
    }
  
    function setUserWithFirebaseAndRol(usuarioFirebase) {
      getRol(usuarioFirebase.uid).then((rol) => {
        const userData = {
          uid: usuarioFirebase.uid,
          email: usuarioFirebase.email,
          rol: rol,
        };
        setUser(userData);
      });
    }
  
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {  
        if (!user) {
          setUserWithFirebaseAndRol(usuarioFirebase);
        }
      } 
      else {
        setUser(null);
      }
    });
  

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