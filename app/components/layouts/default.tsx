import { Outlet } from "react-router"
import Navbar from "../navbar/navbar"
import Footer from "../footer"

export default () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}