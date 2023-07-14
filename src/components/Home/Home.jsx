import { Link } from "react-router-dom";
function Saludo(props) {
    return <h2>{props.name ? `Bienvenido - ${props.name}` : "Iniciar Sesión"}</h2>;
  }

export function Home(){
    const nombreUsuario = ""; // Ejemplo de valor para props.name

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
        <Saludo name={nombreUsuario} />

    </div>
    );
}