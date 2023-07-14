import { Link } from "react-router-dom";
export function Home(){
    
    return(        
    <div>
        <div>
            <div>
                <h1>
                    <Link to="/Login">Login</Link>
                </h1>
                <br></br>
                <h1>
                    <Link to="/Signup">Registrarse</Link>
                </h1>
            </div>
        </div>
        <h2>{nombreUsuario?`Bienvenido - ${nombreUsuario}`:"Iniciar Sesion"}</h2>

    </div>
    );
}