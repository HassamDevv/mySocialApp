
import { useState } from "react"
import styles from "./app.module.css"
import app from "../../../Firebase"
import { getDatabase } from "firebase/database"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { getAuth } from "firebase/auth"

const Register = ({ OnAuthState }) => {
    console.log(app)
    const db = getDatabase(app)
    console.log(db)
    const Auth = getAuth(app)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [formValidation, setFormValidation] = useState([])
    const [validationSuccesfully, setValidationSuccessFully] = useState("")

    const onRegister = (e) => {
        e.preventDefault()
        const ErrorList = []
        if (!name) {
            ErrorList.push("Please Enter you name")
        } if (!email) {
            ErrorList.push("Please Enter Your Email")
        } if (!password) {
            ErrorList.push("Please enter your password")
        } if (!confirmPassword) {
            ErrorList.push("Please enter your confirm password")
        }
        else if (password !== confirmPassword) {
            ErrorList.push("Password Not Match")
        }
        setFormValidation(ErrorList)
        console.log(formValidation)

        if (ErrorList.length === 0) {
            console.log("Registerd Successfully")
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setValidationSuccessFully("Register SuccessFully")

            //here user is created
            createUserWithEmailAndPassword(Auth, email, password)
            //here user is created


        }

    }

    return (
        <>
            <div className="container">


            </div>
            <div className={`${styles.form_padding} ${styles.register_form} border border-1`}>
                <form className=" m-auto" onSubmit={onRegister}>
                    <div className="row g-3">
                        <h2>Register</h2>
                        {validationSuccesfully && <h3 className={styles.register_successfully}>{validationSuccesfully}</h3>}

                        {formValidation.length > 0 && (<ul className="list-unstyled" >

                            {
                                formValidation.map((items, key) => {
                                    return (
                                        <li >{items}</li>

                                    )

                                })
                            }
                        </ul>)}


                        <div className="form-group">
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="Enter Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} className="form-control" placeholder="Enter Confirm Password" />
                        </div>
                        <div lass="form-group ">
                            <button type="submit" className="btn btn-primary w-100">Register</button>
                        </div>
                        <div lass="form-group ">
                            <label className={styles.login} >Already have an Account? <b onClick={OnAuthState}>Login</b></label>                        </div>
                    </div>
                </form>
            </div>




        </>
    )
}

export default Register