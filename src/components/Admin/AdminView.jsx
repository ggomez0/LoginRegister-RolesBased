import React from "react";
import { FirebaseApp } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(FirebaseApp)

export function AdminView() {
  return <div><h1>ADMIN</h1>

 <button onClick={() => signOut(auth)}> Cerrar sesión</button> </div>;
}

export default AdminView;