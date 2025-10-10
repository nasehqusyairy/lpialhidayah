import Cover from "~/components/cover"
import VisionMission from "~/components/vision-mission";

const background = "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80";

export default () => {
    return (
        <div className="mx-auto px-4 py-12 container">
            <Cover background={background} title="Tentang Kami" />
            <VisionMission />
        </div>
    )
}