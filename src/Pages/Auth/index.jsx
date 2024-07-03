import { useState } from "react"
import Login from "../../Components/Login"
import Register from "../../Components/Register"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import app from "../../../Firebase"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Auth = () => {
    const [isRegister, setIsRegiste] = useState(true)
    const [isUserOnLogedPage, setIsUserOnLogedPage] = useState(true)



    const Auth = getAuth(app)
    const navigate = useNavigate()



    const AuthStateChange = () => {
        setIsRegiste(!isRegister)
        console.log("clicked")
    }

    useEffect(() => {
        onAuthStateChanged(Auth, (user) => {
            if (user) {

                navigate("/home")
                setIsUserOnLogedPage(false)
            } else {


            }

        })

    })


    return (



        <>
            {
                isUserOnLogedPage ? (<> {

                    isRegister ? (< Login OnAuthState={AuthStateChange} />) : (<Register OnAuthState={AuthStateChange} />)
                }</>) : ("Loading...")
            }

        </>
    )
}

export default Auth