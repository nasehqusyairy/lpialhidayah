import { Link } from "react-router"
import { Badge } from "../ui/badge"

import logo from '~/images/logo-lpi.webp'
import logoStai from '~/images/logo-stai.webp'
import logoMahad from '~/images/logo-mahad.webp'
import logoMa from '~/images/logo-ma.webp'

export default () => (
    <section className="bg-cross dark:bg-none">
        <div className="mx-auto px-4 lg:px-0 py-12 container">
            <div className="lg:flex justify-center items-center lg:text-center">
                <div className="hidden lg:block w-3/12">
                    <div className="relative w-1/2">
                        <div data-aos="flip-left" className="bg-primary rounded-lg h-[24rem] -rotate-12" />
                    </div>
                </div>
                <div className="lg:w-6/12">
                    <h1 className="mb-4 text-4xl lg:text-6xl leading-snug">
                        <span className="text-primary">Unggul</span> dalam Ilmu, <br />
                        Kokoh dalam <span className="text-primary">Islam</span>
                    </h1>
                    <p className="mb-6 lg:mb-12 text-muted text-lg lg:text-xl">
                        Lembaga pembuka masa depan gemilang bagi generasi penerus bangsa melalui pendidikan Islami yang unggul, berprestasi, dan berkarakter Qur'ani
                    </p>
                    <div className="flex lg:justify-center gap-4 lg:gap-6 text-muted text-center">
                        <Link className="block hover:text-primary" to={'#'}>
                            <img src={logoStai} className="mb-2 h-12 lg:h-16" alt="" />
                            <p>STAI</p>
                        </Link>
                        <Link className="block hover:text-primary" to={'#'}>
                            <img src={logoMa} className="mb-2 h-12 lg:h-16" alt="" />
                            <p>MA</p>
                        </Link>
                        <Link className="block hover:text-primary" to={'#'}>
                            <img src={logo} className="mb-2 h-12 lg:h-16" alt="" />
                            <p>SMP</p>
                        </Link>
                        <Link className="block hover:text-primary" to={'#'}>
                            <img src={logo} className="mb-2 h-12 lg:h-16" alt="" />
                            <p>TPQ</p>
                        </Link>
                        <Link className="block hover:text-primary" to={'#'}>
                            <img src={logoMahad} className="mb-2 h-12 lg:h-16" alt="" />
                            <p>Mahad</p>
                        </Link>
                    </div>
                    {/* <div className="flex justify-center gap-4">
                        <iframe className="rounded-2xl lg:w-8/12 aspect-video" src="https://www.youtube.com/embed/UjwXqJlgPIY" title="HIGHLIGHTS HAFLAH TASYAKKUR PPTQ AL-MANNAN KE-III #pptqalmannan #haflahtasyakkur #wisuda" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div> */}
                </div>
                <div className="hidden lg:flex justify-end w-3/12">
                    <div className="relative w-1/2">
                        <div data-aos="flip-left" className="bg-primary rounded-lg h-[24rem] rotate-12" />
                    </div>
                </div>
            </div>

        </div>
    </section>
)