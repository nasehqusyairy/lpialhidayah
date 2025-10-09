import About from "~/components/home-sections/about";
import Hero from "~/components/home-sections/hero";
import Articles from "~/components/home-sections/articles";
import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, useEffect } from "react";
import InfinitePhoto from "~/components/home-sections/infinite-photo";
import type { Route } from "./+types/home";

export const clientLoader = () => {
  return { Recap: lazy(() => import("~/components/home-sections/recap")) };
}

export default function Home({ loaderData }: Route.ComponentProps) {

  const { Recap } = loaderData;

  useEffect(() => {
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
      <Recap />
      <Articles />
    </>
  );
}
