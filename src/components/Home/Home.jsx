import React from "react";

import {AdminView} from "../Admin/AdminView"
import { UserView } from "../User/UserView"

import { FirebaseApp } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(FirebaseApp);

export function Home() {
  return (
    <div>
      Home
     <button onClick={() => signOut(auth)}> Cerrar sesión</button> 
      {user.rol === "admin" ? <AdminView /> : <UserView />} 
    </div>
  );
}

export default Home;