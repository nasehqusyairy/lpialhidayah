import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export function Example() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
      // ...
        </Carousel>
    )
}

const photos = [
    "https://picsum.photos/500/250.webp",
    "https://picsum.photos/700/350.webp",
    "https://picsum.photos/800/400.webp",
    "https://picsum.photos/600/300.webp",
];

export default () => {

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            className="rounded-2xl w-full overflow-hidden"
        >
            <CarouselContent className="-ml-4">
                {photos.map((src, i) => (
                    <CarouselItem key={i} className="pl-4 basis-1/1">
                        <div className="before:absolute relative before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black shadow-lg rounded-2xl overflow-hidden before:content">
                            <img
                                src={src}
                                alt={`Placeholder ${i + 1}`}
                                className="w-full object-cover aspect-video"
                                loading="lazy"
                            />
                            <div className="bottom-0 left-0 absolute p-6">
                                <h1 className="font-bold text-white text-2xl">Placeholder {i + 1}</h1>
                                <p className="text-white text-sm">This is a description for placeholder {i + 1}</p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
