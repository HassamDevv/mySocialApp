import { useState, useEffect } from "react";
import styles from "./app.module.css";
import app from "../../../Firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Register = ({ OnAuthState }) => {
    const Auth = getAuth(app);
    const Navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formValidation, setFormValidation] = useState([]);
    const [validationSuccesfully, setValidationSuccessFully] = useState("");
    const [emailAlready, setEmailAlready] = useState("")


    const onRegister = async (e) => {
        e.preventDefault();
        const ErrorList = [];

        if (!name) {
            ErrorList.push("Please Enter your name");
        }
        if (!email) {
            ErrorList.push("Please Enter Your Email");
        }
        if (!password) {
            ErrorList.push("Please enter your password");
        }
        if (!confirmPassword) {
            ErrorList.push("Please enter your confirm password");
        } else if (password !== confirmPassword) {
            ErrorList.push("Password Not Match");
        }

        setFormValidation(ErrorList);
        console.log(formValidation);

        if (ErrorList.length == 0) {
            try {
                const userData = await createUserWithEmailAndPassword(Auth, email, password)
                //save the date in database
                const db = getDatabase()
                const userId = userData.user.uid

                set(ref(db, "users/" + userId), {
                    name: name,
                    bio: "rendom user",

                })



                setValidationSuccessFully("Register Successfully")
                setEmailAlready("")

            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    console.log("Email Already in Use")
                    setEmailAlready("email is already in use")

                }


            }

            // setValidationSuccessFully("")
        }




    };

    // useEffect(() => {
    //     onAuthStateChanged(Auth, (user) => {
    //         if (user) {
    //             Navigate("/home")
    //         } else {
    //             Navigate("/")
    //             setsSignOut(false)
    //         }

    //     })

    // })



    return (
        <>
            <div className="container"></div>
            <div className={`${styles.form_padding} ${styles.register_form} border border-1`}>
                <form className="m-auto" onSubmit={onRegister}>
                    <div className="row g-3">
                        <h2>Register</h2>
                        <p className={styles.emailAllready}>{emailAlready}</p>

                        {validationSuccesfully && <h3 className={styles.register_successfully}>{validationSuccesfully}</h3>}
                        {formValidation.length > 0 && (
                            <ul className="list-unstyled">
                                {formValidation.map((items, key) => (
                                    <li key={key}>{items}</li>
                                ))}
                            </ul>
                        )}
                        <div className="form-group">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="Enter Confirm Password" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary w-100">
                                Register
                            </button>
                        </div>
                        <div className="form-group">
                            <label className={styles.login}>
                                Already have an Account? <b onClick={OnAuthState}>Login</b>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
