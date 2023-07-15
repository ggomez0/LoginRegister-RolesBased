import styles from "./Login.module.css"
import { Link } from "react-router-dom"

export function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.innerbox}>
                <h1 className={styles.heading}>Login</h1>
                <div className={styles.footer}>
                    <b className={styles.error}>Error</b>
                    <button>
                        Login btn
                    </button>
                    <p>Crear cuenta
                        <span>
                            <Link to="/Signup">Registrar</Link>                            
                        </span>
                    </p>
                
                </div>
            </div>
        </div>
    )
}