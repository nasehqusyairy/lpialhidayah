import logo from '~/images/logo-lpi.webp'
import NavLg from "./nav-lg"
import NavSm from './nav-sm'

export default () => {
    return (
        <div className="h-16 relatie">
            <div className="z-50 fixed bg-background p-4 lg:px-0 border-b w-full">
                <div className="mx-auto container">
                    <div className="flex justify-between items-center">
                        <a href='/#' className="flex items-center gap-4">
                            <img loading='lazy' src={logo} alt="LPI Al-Hidayah Logo" className="size-10" />
                            <div className="text-muted text-xl">LPI <span className="text-primary">Al-Hidayah</span></div>
                        </a>
                        <NavLg />
                        <NavSm />
                    </div>
                </div>
            </div>
        </div>
    )
}