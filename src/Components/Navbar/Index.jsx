import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import app from "../../../Firebase"


const Navbar = () => {
    const Auth = getAuth(app)
    const Navigate = useNavigate()

    const Signout = () => {
        signOut(Auth)
        console.log("user Logout")
        Navigate("/")
    }



    const Nav = [
        {
            placeholeder: "Home",
            path: "/home"
        },
        {
            placeholeder: "Followers",
            path: "/followers"
        },
        {
            placeholeder: "Following",
            path: "/following"
        },
        {
            placeholeder: "Settings",
            path: "/settings"
        }
    ]
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                Nav.map((items, key) => {
                                    return (
                                        <li className="nav-item">
                                            <Link className="nav-link" to={items.path}>{items.placeholeder}</Link>
                                        </li>
                                    )

                                })
                            }


                        </ul>
                        <div>
                            <button onClick={Signout}>Logout</button>
                        </div>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar