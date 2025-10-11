import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Link } from "react-router";
import { articles } from "~/models/article";
import ArticleItem from "../article-item";

export default function ArticlesSection() {

    const latestArticle = articles[0];
    const otherArticles = articles.slice(1, 5);

    return (
        <section id="articles">
            <div className="mx-auto p-4 pt-12 container">
                <h1 data-aos="fade-right" className="mb-2 text-4xl leading-snug">
                    Berita
                </h1>
                <Link data-aos="fade-right" data-aos-delay="250" to={'#'} className="flex gap-4 mb-4 text-primary">Selengkapnya <ArrowRight /></Link>
                <div className="lg:flex items-center gap-8">
                    {/* Artikel terbaru */}
                    <div className="mb-6 lg:mb-0 lg:w-6/12">
                        {latestArticle ? (
                            <Link to={latestArticle.href} data-aos="zoom-in" data-aos-delay="250" className="block relative rounded-2xl w-full h-96 overflow-hidden">
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
                                        {latestArticle.title}
                                    </h2>
                                    <p className="text-shadow-sm mb-4 text-white text-sm">
                                        {latestArticle.excerpt}
                                    </p>
                                    <p className="text-shadow-sm text-white text-sm">
                                        {latestArticle.date}
                                    </p>
                                </div>
                            </Link>
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
                                <ArticleItem key={idx} article={article} aos='fade-right' />
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
