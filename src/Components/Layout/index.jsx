import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Index"

const Layout = () => {
    return (

        <>
            <Navbar />
            <Outlet />

        </>
    )
}

export default Layout