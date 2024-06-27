
import styles from "./app.module.css"
const Login = ({ OnAuthState }) => {
    return (
        <>
            <div className={styles.login_form}>
                <div className="container">
                    <div className={`${styles.form_padding} border border-1 `}>
                        <form className=" m-auto">
                            <div className="row g-3  ">
                                <h2>Please Login</h2>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div lass="form-group ">

                                    <button type="submit" className="btn btn-primary w-100">Login</button>
                                </div>
                                <div lass="form-group ">

                                    <label className={styles.register} onClick={OnAuthState}> Create Your Account <b>Register</b> </label>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>






        </>
    )
}

export default Login