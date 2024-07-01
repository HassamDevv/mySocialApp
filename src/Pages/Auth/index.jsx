import { useState } from "react"
import Login from "../../Components/Login"
import Register from "../../Components/Register"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import app from "../../../Firebase"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Auth = () => {
    const [isRegister, setIsRegiste] = useState(true)
    
    const Auth = getAuth(app)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(Auth, (user) => {
            if (!user) {
                navigate("/")

            } else (
                navigate("/home")
            )

        })

    }, [])

    const AuthStateChange = () => {
        setIsRegiste(!isRegister)
        console.log("clicked")
    }

    return (

        <>
            {
                isRegister ? (< Login OnAuthState={AuthStateChange} />) : (<Register OnAuthState={AuthStateChange} />)
            }




        </>
    )
}

export default Auth