import {
    ArrowRight,
    BadgeCheckIcon,
    ChevronRightIcon,
    ChevronsUpDown,
} from "lucide-react";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemSeparator,
    ItemTitle,
} from "../ui/item";
import React from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import placeholderImage from "~/images/placeholder.jpg";
import { Badge } from "../ui/badge";
import { Link } from "react-router";

const categories = [
    "Umum",
    "Event",
    "Prestasi",
    "Informasi",
    "Kegiatan",
    "Kunjungan",
];

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
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
        null
    );

    const filteredArticles = selectedCategory
        ? articles.filter((a) => a.category === selectedCategory)
        : articles;

    const latestArticle = filteredArticles[0];
    const otherArticles = filteredArticles.slice(1, 5);

    return (
        <section id="articles">
            <div className="mx-auto p-4 lg:px-0 pb-12 container">
                <div className="lg:flex justify-between items-end lg:mb-4">
                    <h1 className="mb-2 text-4xl leading-snug">
                        Berita dan <span className="text-primary">Artikel</span>
                    </h1>
                    <Link to={'#'} className="flex gap-4 mb-4 text-primary">Selengkapnya <ArrowRight /></Link>
                </div>
                <div className="lg:flex gap-6">
                    {/* Kategori */}
                    <div className="mb-6 lg:mb-0 lg:w-2/12">
                        <Collapsible defaultOpen>
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-muted">Kategori</h2>
                                <CollapsibleTrigger asChild>
                                    <Button variant={"outline"} size={"icon"}>
                                        <ChevronsUpDown />
                                    </Button>
                                </CollapsibleTrigger>
                            </div>

                            <CollapsibleContent>
                                <ItemGroup>
                                    {categories.map((category, idx) => (
                                        <React.Fragment key={idx}>
                                            <Item
                                                asChild
                                                className={`hover:bg-secondary ${selectedCategory === category
                                                    ? "bg-secondary/50"
                                                    : "bg-transparent"
                                                    }`}
                                            >
                                                <button onClick={() => setSelectedCategory(category)}>
                                                    <ItemContent>
                                                        <ItemTitle>{category}</ItemTitle>
                                                    </ItemContent>
                                                    <ItemActions>
                                                        <ChevronRightIcon className="size-4" />
                                                    </ItemActions>
                                                </button>
                                            </Item>
                                            {idx !== categories.length - 1 && <ItemSeparator />}
                                        </React.Fragment>
                                    ))}
                                </ItemGroup>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>

                    {/* Artikel terbaru */}
                    <div className="mb-6 lg:mb-0 lg:w-6/12">
                        <h2 className="mb-4 text-muted">Artikel Terbaru</h2>
                        {latestArticle ? (
                            <div
                                className="relative bg-cover bg-center rounded-2xl w-full h-96 overflow-hidden"
                                style={{ backgroundImage: `url(${latestArticle.image})` }}
                            >
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
                                    <p className="text-shadow-sm mb-2 text-white">
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
                    <div className="lg:w-4/12">
                        <h2 className="mb-4 text-muted">Artikel Lainnya</h2>
                        <ItemGroup>
                            {otherArticles.length > 0 ? (
                                otherArticles.map((article, idx) => (
                                    <React.Fragment key={idx}>
                                        <Item asChild className="hover:bg-secondary">
                                            <a href={article.href}>
                                                <ItemMedia>
                                                    <img
                                                        src={article.image}
                                                        alt={article.title}
                                                        className="rounded-md h-12 object-cover aspect-video"
                                                    />
                                                </ItemMedia>
                                                <ItemContent>
                                                    <Badge variant={"secondary"}>{article.category}</Badge>
                                                    <ItemTitle className="font-medium text-sm">
                                                        {article.title}
                                                    </ItemTitle>
                                                    <ItemDescription>
                                                        {article.excerpt}
                                                    </ItemDescription>

                                                    <p className="text-muted text-xs">
                                                        {article.date}
                                                    </p>
                                                </ItemContent>
                                            </a>
                                        </Item>
                                        {idx !== otherArticles.length - 1 && <ItemSeparator />}
                                    </React.Fragment>
                                ))
                            ) : (
                                <p className="px-2 text-muted italic">
                                    Tidak ada artikel lain.
                                </p>
                            )}
                        </ItemGroup>
                    </div>
                </div>
            </div>
        </section>
    );
}
