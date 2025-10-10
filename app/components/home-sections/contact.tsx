import MapNForm from "../contact/map-n-form"
import SocmedsBar from "../contact/socmeds-bar"

export default () => {
    return (
        <section id="contact">
            <div className="mx-auto p-4 pb-12 container">
                <h1 data-aos="fade-right" className="mb-6 text-4xl">
                    <span className="text-primary">Hubungi</span> Kami
                </h1>
                <SocmedsBar />
                <MapNForm />
            </div>
        </section>
    )
}