import { Outlet } from "react-router"
import Navbar from "../navbar/navbar"
import Footer from "../footer"

export function HydrateFallback() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-4 border-primary border-t-transparent border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
    );
}

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