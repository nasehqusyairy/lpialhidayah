import { Link } from "react-router"
import { companies } from "~/models/company"

export default () => (
    <section className="bg-cross dark:bg-none">
        <div className="mx-auto px-4 lg:px-0 pt-12 pb-6 container">
            <div className="lg:flex justify-center items-center mb-6 lg:mb-12 lg:text-center">
                <div className="hidden lg:block w-3/12">
                    <div className="relative w-1/2">
                        <div data-aos="fade-left" className="bg-primary rounded-lg h-[24rem] -rotate-12" />
                    </div>
                </div>
                <div className="lg:w-6/12">
                    <h1 data-aos="fade-up" className="mb-4 text-4xl lg:text-6xl leading-snug">
                        <span className="text-primary">Unggul</span> dalam Ilmu, <br />
                        Kokoh dalam <span className="text-primary">Islam</span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="250" className="mb-6 lg:mb-12 text-muted text-lg lg:text-xl">
                        Lembaga pembuka masa depan gemilang bagi generasi penerus bangsa melalui pendidikan Islami yang unggul, berprestasi, dan berkarakter Qur'ani
                    </p>

                    <div className="flex flex-wrap lg:justify-center gap-4 lg:gap-6 text-muted text-center">
                        {companies.map((company, i) => (
                            <Link data-aos="fade-left" data-aos-delay={(i + 1) * 300} key={company.label} className="block hover:text-primary" to={company.href}>
                                <img src={company.logo} loading="lazy" className="mx-auto mb-2 h-12 lg:h-16" alt={company.label} />
                                <p>{company.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex justify-end w-3/12">
                    <div className="relative w-1/2">
                        <div data-aos="fade-right" className="bg-primary rounded-lg h-[24rem] rotate-12" />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
