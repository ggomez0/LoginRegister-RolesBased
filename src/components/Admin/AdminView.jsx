import React from "react";
import { FirebaseApp } from "../../firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(FirebaseApp)

export function AdminView() {
  return <div>Hola, admin 
  Home
 <button onClick={() => signOut(auth)}> Cerrar sesión</button> </div>;
}

export default AdminView;