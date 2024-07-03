import Navbar from "../../Components/Navbar/Index"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase, ref, onValue, set } from "firebase/database"
import app from "../../../Firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"



const Home = () => {
    const Auth = getAuth(app)
    const Navigate = useNavigate()


    const [userId, setUserId] = useState()
    const [isUserLogedIn, setIsUserLogedIn] = useState(false)
    // const [loading, setLoading] = useState(true)




    useEffect(() => {
        onAuthStateChanged(Auth, (user) => {
            if (!user) {
                console.log("user is not logedIn")

                Navigate("/")
                setIsUserLogedIn(false)
            } else {
                console.log("user is  LogedIn")
                console.log(user.uid)

                // Navigate("/home")
            }

        })

    }, [])


    return (
        <>
            {
                true ? (<div className="container" >

                    <h1>Home Page</h1>
                </div >) : ("loading...")
            }









        </>
    )
}

export default Home