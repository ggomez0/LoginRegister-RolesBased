import React from "react";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {AdminView} from "../Admin/AdminView"
import { UserView } from "../User/UserView"
import { FirebaseApp } from "../../firebase";


const firestore = getFirestore(FirebaseApp);
const auth = getAuth(FirebaseApp);

export function Home() {
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState([]);


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


  return (
    <div>
      {user.rol === "admin" ? <AdminView /> : <UserView />} 
    </div>
  );
}

export default Home;