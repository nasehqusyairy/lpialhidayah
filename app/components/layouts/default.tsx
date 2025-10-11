import { Outlet } from "react-router"
import Navbar from "../navbar/navbar"
import Footer from "../footer"
import TransitionProgressbar from "../transition-progressbar"

export default () => {
    return (
        <>
            <TransitionProgressbar />
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}