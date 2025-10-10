import { Link } from "react-router"
import { companies } from "~/models/company"
import InfinitePhoto from "./infinite-photo"

export default () => (
    <section className="bg-cross dark:bg-none">
        <div className="mx-auto px-4 lg:px-0 pt-12 pb-6 container">
            <div className="lg:flex justify-center items-center mb-6 lg:mb-12">
                <div className="lg:m-0 mb-6 lg:w-6/12">
                    <h1 data-aos="fade-up" className="mb-4 text-4xl lg:text-6xl leading-snug">
                        <span className="text-primary">Unggul</span> dalam Ilmu, <br />
                        Kokoh dalam <span className="text-primary">Islam</span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="250" className="mb-6 lg:mb-12 text-muted text-lg lg:text-xl">
                        Lembaga pembuka masa depan gemilang bagi generasi penerus bangsa melalui pendidikan Islami yang unggul, berprestasi, dan berkarakter Qur'ani
                    </p>

                    <div className="flex flex-wrap gap-4 lg:gap-6 text-muted">
                        {companies.map((company, i) => (
                            <Link data-aos="fade-left" data-aos-delay={(i + 1) * 300} key={company.label} className="block hover:text-primary text-center" to={company.href}>
                                <img src={company.logo} loading="lazy" className="mx-auto mb-2 h-12 lg:h-16" alt={`Logo ${company.label}`} />
                                <p>{company.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="lg:w-6/12">
                    <InfinitePhoto />
                </div>
            </div>
        </div>
    </section>
)
