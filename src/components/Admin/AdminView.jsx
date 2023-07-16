import React from "react";
import { useHistory } from "react-router-dom";
import { FirebaseApp } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(FirebaseApp);

export function AdminView() {
  const history = useHistory();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        history.push("/"); // Redirige al usuario a la vista de inicio después de cerrar sesión
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>ADMIN</h1>
      <button onClick={handleSignOut}>Cerrar sesión</button>
    </div>
  );
}

export default AdminView;
