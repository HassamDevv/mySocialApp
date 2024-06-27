import { useState } from "react"
import Login from "../../Components/Login"
import Register from "../../Components/Register"


const Auth = () => {
    const [isRegister, setIsRegiste] = useState(true)


    const OnAuthState = () => {
        setIsRegiste(!isRegister)
        console.log("clicked")
    }

    return (

        <>
            {
                isRegister ? (< Login OnAuthState={OnAuthState} />) : (<Register OnAuthState={OnAuthState} />)
            }




        </>
    )
}

export default Auth