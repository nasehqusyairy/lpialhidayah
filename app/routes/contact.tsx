import MapNForm from "~/components/contact/map-n-form";
import SocmedsBar from "~/components/contact/socmeds-bar";
import Cover from "~/components/cover"

const background = "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80";

export default () => {
    return (
        <div className="mx-auto px-4 py-12 container">
            <Cover background={background} title="Hubungi Kami" />
            <SocmedsBar />
            <MapNForm />
        </div>
    )
}