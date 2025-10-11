import placeholderImage from "~/images/placeholder.jpg";

export type Article = {
    title: string;
    image: string;
    category: string;
    date: string;
    excerpt: string;
    href: string;
}

export const articles: Article[] = [
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