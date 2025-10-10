import { lazy, useEffect, useState } from "react"
import VisionMission from "../vision-mission";

export default () => {
    const [Recap, setRecap] = useState<React.LazyExoticComponent<React.FC>>();
    useEffect(() => {
        setRecap(lazy(() => import("~/components/home-sections/recap")));

    }, []);
    return (
        <>
            <section id="about">
                <div className="mx-auto p-4 py-12 container">
                    <h1 data-aos="fade-right" className="mb-4 text-4xl">
                        <span className="text-primary">Tentang</span> Kami
                    </h1>
                    <VisionMission />
                </div>
            </section>
            {Recap && <Recap />}
        </>
    )
}
