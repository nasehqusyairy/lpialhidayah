import About from "~/components/home-sections/about";
import Hero from "~/components/home-sections/hero";
import Articles from "~/components/home-sections/articles";
import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, useEffect, useState } from "react";
import InfinitePhoto from "~/components/home-sections/infinite-photo";
import Contact from "~/components/home-sections/contact";

export default function Home() {
  const [Recap, setRecap] = useState<React.LazyExoticComponent<React.FC> | null>(null);

  useEffect(() => {
    setRecap(lazy(() => import("~/components/home-sections/recap")));
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya terjadi sekali saat elemen muncul
    });
  }, []);

  return (
    <>
      <Hero />
      <InfinitePhoto />
      <About />
      {Recap && <Recap />}
      <Articles />
      <Contact />
    </>
  );
}
