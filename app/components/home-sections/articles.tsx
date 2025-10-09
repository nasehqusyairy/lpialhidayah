import {
    ArrowRight,
} from "lucide-react";
import placeholderImage from "~/images/placeholder.jpg";
import { Badge } from "../ui/badge";
import { Link } from "react-router";


const articles = [
    {
        title: "Judul Artikel 1",
        image: placeholderImage,
        category: "Umum",
        date: "2023-10-01",
        excerpt: "Ini adalah cuplikan dari artikel 1...",
        href: "#",
    },
    {
        title: "Judul Artikel 2",
        image: placeholderImage,
        category: "Event",
        date: "2023-10-05",
        excerpt: "Ini adalah cuplikan dari artikel 2...",
        href: "#",
    },
    {
        title: "Judul Artikel 3",
        image: placeholderImage,
        category: "Prestasi",
        date: "2023-10-10",
        excerpt: "Ini adalah cuplikan dari artikel 3...",
        href: "#",
    },
    {
        title: "Judul Artikel 4",
        image: placeholderImage,
        category: "Informasi",
        date: "2023-10-15",
        excerpt: "Ini adalah cuplikan dari artikel 4...",
        href: "#",
    },
];

export default function ArticlesSection() {

    const latestArticle = articles[0];
    const otherArticles = articles.slice(1, 5);

    return (
        <section id="articles">
            <div className="mx-auto p-4 lg:px-0 py-12 container">
                <h1 data-aos="fade-right" className="mb-2 text-4xl leading-snug">
                    Berita
                </h1>
                <Link data-aos="fade-right" data-aos-delay="250" to={'#'} className="flex gap-4 mb-4 text-primary">Selengkapnya <ArrowRight /></Link>
                <div className="lg:flex items-center gap-8">
                    {/* Artikel terbaru */}
                    <div className="mb-6 lg:mb-0 lg:w-6/12">
                        {latestArticle ? (
                            <div data-aos="zoom-in" data-aos-delay="250" className="relative rounded-2xl w-full h-96 overflow-hidden">
                                {/* Gambar utama dengan lazy load */}
                                <img
                                    src={latestArticle.image}
                                    alt={latestArticle.title}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Konten teks */}
                                <div className="bottom-0 left-0 z-10 absolute p-6">
                                    <Badge className="mb-4">{latestArticle.category}</Badge>
                                    <h2 className="text-shadow-sm mb-2 font-semibold text-white text-2xl">
                                        <a href={latestArticle.href} className="hover:text-primary">
                                            {latestArticle.title}
                                        </a>
                                    </h2>
                                    <p className="text-shadow-sm mb-4 text-white text-sm">
                                        {latestArticle.excerpt}
                                    </p>
                                    <p className="text-shadow-sm text-white text-sm">
                                        {latestArticle.date}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-muted italic">
                                Tidak ada artikel untuk kategori ini.
                            </p>
                        )}
                    </div>

                    {/* List artikel lainnya */}
                    <div className="lg:w-6/12">
                        {otherArticles.length > 0 ? (
                            otherArticles.map((article, idx) => (
                                <a data-aos="fade-right" href={article.href} className="flex gap-4 py-4 not-last:border-b hover:underline" key={article.title}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        loading="lazy"
                                        className="rounded-md w-4/12 object-cover aspect-video"
                                    />
                                    <div className="flex flex-col justify-between w-8/12">
                                        <div>
                                            <Badge className="mb-2" variant={"outline"}>{article.category}</Badge>
                                            <div className="mb-2 font-medium text-sm">
                                                {article.title}
                                            </div>
                                            <p className="text-muted text-sm">
                                                {article.excerpt}
                                            </p>
                                        </div>

                                        <p className="text-muted text-xs">
                                            {article.date}
                                        </p>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <p className="px-2 text-muted italic">
                                Tidak ada artikel lain.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
