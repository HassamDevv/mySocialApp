
import { useState } from "react"
import styles from "./app.module.css"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from "../../../Firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const Login = ({ OnAuthState }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginValidation, setLoginValidation] = useState([])
    const [loginError, setLoginError] = useState()
    const [isSignOut, setsSignOut] = useState(true)

    const navigate = useNavigate()
    const Auth = getAuth(app)


    const OnLogin = (e) => {
        e.preventDefault()
        const ErrorList = []
        if (!email) {
            ErrorList.push("Enter Your Email")
            setLoginValidation(ErrorList)
        } if (!password) {
            ErrorList.push("Enter Your Password")
            setLoginValidation(ErrorList)
        }
        if (ErrorList.length === 0) {

            setLoginValidation([])
            const Auth = getAuth(app)
            signInWithEmailAndPassword(Auth, email, password).then((userCredential) => {
                const user = userCredential
                console.log(user)
                console.log("login Successfully")
                navigate("/home")

            }).catch((err) => {
                if (err.code == "auth/invalid-credential") {
                    setLoginError("Invalid Credentials")
                }



            })

        }




    }


    const SignInWithGoogle = (e) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider()
        signInWithPopup(Auth, provider).then((result) => {
            console.log(result)

        }).catch((err) => {
            console.log(err)
        })
    }
    // useEffect(() => {
    //     onAuthStateChanged(Auth, (user) => {
    //         if (user) {
    //             navigate("/home")
    //         } else {
    //             navigate("/")
    //             setsSignOut(false)
    //         }

    //     })

    // })




    return (
        <>
            <div className={styles.login_form}>
                <div className="container">
                    <div className={`${styles.form_padding} border border-1 `}>
                        <form className=" m-auto" onSubmit={OnLogin}>
                            <div className="row g-3  ">
                                <h2>Please Login</h2>
                                {loginError && (<p className={styles.login_error}>{loginError}</p>)}

                                {
                                    loginValidation.length > 0 && (<ul className="list-unstyled">
                                        {
                                            loginValidation.map((items, key) => {
                                                return (
                                                    <li key={key}>{items}</li>
                                                )

                                            })
                                        }
                                    </ul>)
                                }

                                <div className="form-group">
                                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="Password" />
                                </div>
                                <div lass="form-group ">

                                    <button type="submit" className="btn btn-primary w-100">Login</button>
                                </div>

                            </div>
                        </form>
                        <div>
                            <button onClick={SignInWithGoogle} className={styles.signIn_with_google}>Sign In With Google</button>
                        </div>
                        <div lass="form-group ">

                            <label className={styles.register} onClick={OnAuthState}> Create Your Account <b>Register</b> </label>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}

export default Login