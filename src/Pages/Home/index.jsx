import Navbar from "../../Components/Navbar/Index"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase, ref, onValue } from "firebase/database"
import app from "../../../Firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"



const Home = () => {
    const Auth = getAuth(app)
    const Navigate = useNavigate()
    const [isAuth, setIsAuth] = useState(true)


    useEffect(() => {
        onAuthStateChanged(Auth, (user) => {
            console.log(user)
            if (user) {
                console.log(user)

                console.log("user is Signed in here is user id" + user.uid)
                Navigate("/home")
            } else {
                console.log("user is logout")
                Navigate("/")

                setIsAuth(false)
            }

        })

    }, [])



    return (

        <>
            <div className="container">

                <h1>Home Page</h1>
            </div>


        </>
    )
}

export default Home