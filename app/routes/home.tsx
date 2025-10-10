import About from "~/components/home-sections/about";
import Hero from "~/components/home-sections/hero";
import Articles from "~/components/home-sections/articles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "~/components/home-sections/contact";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya terjadi sekali saat elemen muncul
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Articles />
      <Contact />
    </>
  );
}
