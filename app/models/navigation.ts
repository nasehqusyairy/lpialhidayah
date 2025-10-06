export type NavigationItem = {
    label: string;
    href?: string;
    isButton?: boolean;
    children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
    { label: "Beranda", href: "/#" },
    // {
    //     label: "Tentang",
    //     children: [
    //         { label: "Visi & Misi", href: "/visi-misi" },
    //         { label: "Struktur Organisasi", href: "/struktur" },
    //         { label: "Prestasi", href: "/prestasi" },
    //     ],
    // },
    { label: "Tentang", href: "/#about" },
    // { label: "Struktur Organisasi", href: "/struktur" },
    // { label: "Afiliasi Kampus", href: "/#afiliasi" },
    { label: "Galeri", href: "/#gallery" },

    { label: "Blog", href: "/#blogs" },
    // { label: "Hubungi", href: "/#contact" },
    {
        label: "Lembaga",
        children: [
            { label: "MA", href: "/ma" },
            { label: "SMP", href: "/smp" },
            { label: "TPQ", href: "/tpq" },
            { label: "Mahad", href: "/mahad" },
        ],
    },
    { label: "PPDB", href: "/ppdb", isButton: true },
]
