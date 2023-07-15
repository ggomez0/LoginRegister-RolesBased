import React from "react";

import {AdminView} from "../Admin/AdminView"
import {UserView} from "../User/UserView"

import { FirebaseApp } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(FirebaseApp);

function Home({ user }) {
  return (
    <div>
      Home
      <button onClick={() => signOut(auth)}> Cerrar sesión</button>
      {user.rol === "masteradmin" ? <AdminView /> : <UserView />}
    </div>
  );
}

export default Home;