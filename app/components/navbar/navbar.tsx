import logo from '~/images/logo-lpi.webp'
import NavLg from "./nav-lg"
import NavSm from './nav-sm'
import { Link } from 'react-router'

export default () => {
    return (
        <nav className="relative h-16">
            <div className="z-30 fixed bg-background p-4 border-b w-full">
                <div className="mx-auto container">
                    <div className="flex justify-between items-center">
                        <Link to='/' className="flex items-center gap-4">
                            <img loading='lazy' src={logo} alt="LPI Al-Hidayah Logo" className="size-10" />
                            <div className="text-xl">LPI <span className="text-primary">Al-Hidayah</span></div>
                        </Link>
                        <NavLg />
                        <NavSm />
                    </div>
                </div>
            </div>
        </nav>
    )
}