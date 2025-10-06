import { Badge } from "../ui/badge"

export default () => (
    <section className="bg-cross">
        <div className="mx-auto px-4 lg:px-0 py-12 container">
            <div className="lg:flex justify-center items-center lg:text-center">
                <div className="hidden lg:block w-3/12">
                    <div className="relative w-1/2">
                        <div data-aos="flip-left" className="bg-primary rounded-lg h-[24rem] -rotate-12" />
                        {/* <img data-aos="flip-left" data-aos-delay="250" src={myPhoto} className="z-10 absolute bg-foreground rounded-lg w-[18rem] h-[24rem]" /> */}
                    </div>
                </div>
                <div className="lg:w-6/12">
                    <Badge variant={"secondary"} className="mb-4">Beranda</Badge>
                    <h1 className="mb-4 text-4xl lg:text-6xl leading-snug">
                        <span className="text-primary">Unggul</span> dalam Ilmu, <br />
                        Kokoh dalam <span className="text-primary">Iman</span> <br />
                        {/* <span className="text-primary">Berpegang pada</span> Qur'an */}
                    </h1>
                    <p className="mb-12 text-muted text-lg lg:text-xl">
                        Mewujudkan masa depan gemilang bagi putra-putri Anda melalui pendidikan Islami yang unggul, berprestasi, dan berkarakter Qur'ani
                    </p>
                    <div className="flex justify-center">
                        <iframe className="rounded-2xl lg:w-8/12 aspect-video" src="https://www.youtube.com/embed/UjwXqJlgPIY" title="HIGHLIGHTS HAFLAH TASYAKKUR PPTQ AL-MANNAN KE-III #pptqalmannan #haflahtasyakkur #wisuda" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="hidden lg:flex justify-end w-3/12">
                    <div className="relative w-1/2">
                        <div data-aos="flip-left" className="bg-primary rounded-lg h-[24rem] rotate-12" />
                        {/* <img data-aos="flip-left" data-aos-delay="250" src={myPhoto} className="z-10 absolute bg-foreground rounded-lg w-[18rem] h-[24rem]" /> */}
                    </div>
                </div>
            </div>

        </div>
    </section>
)