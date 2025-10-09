import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const photos = [
    "https://picsum.photos/seed/1/600/400",
    "https://picsum.photos/seed/2/600/400",
    "https://picsum.photos/seed/3/600/400",
    "https://picsum.photos/seed/4/600/400",
];

export default function InfinitePhotoSection() {
    return (
        <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={16}
            slidesPerView={2}
            freeMode={true}
            loop={true}
            speed={3000}
            autoplay={{
                delay: 0,
                disableOnInteraction: true,
                reverseDirection: true,
            }}
            breakpoints={{
                1024: {
                    slidesPerView: 4,
                },
            }}
            allowTouchMove={false}
            className="w-full"
        >
            {photos.concat(photos).map((src, i) => (
                <SwiperSlide key={i}>
                    <div className="shadow-lg rounded-2xl overflow-hidden">
                        <img
                            loading="lazy"
                            src={src}
                            alt={`Placeholder ${i + 1}`}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
