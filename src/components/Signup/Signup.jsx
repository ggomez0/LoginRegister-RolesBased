import styles from "./Signup.module.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import {InputControl} from "../InputControl/InputControl"

export function Signup(){
    const navigate = useNavigate();
    const [values, setvalues] = useState({name:"",email:"",pass:""})
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const registro = ()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Llene todos los campos");
        }
        return;
    }
    setErrorMsg("")
    setSubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async (res) => {
        setSubmitButtonDisabled(false)
        const user = res.user
        await updateProfile(user, {
            displayName: values.name,
        })
        navigate("/")
    })
    .catch((err) =>{
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message)
    });
    return(
    <div className={styles.container}>
        <div className={styles.innerbox}>
            <h1 className={styles.heading}>Registro</h1>
            <InputControl label="Name" placeholder="Ingrese un Nombre" 
            onchange={(event)=>setvalues((prev)=> ({...prev, name:event.target.value}))}/>
        </div>
    </div>
    )
}
