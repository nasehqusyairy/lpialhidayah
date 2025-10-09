import { companies } from "./company";

export type NavigationItem = {
    label: string;
    href?: string;
    isButton?: boolean;
    children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Berita", href: "/news" },
    { label: "Hubungi", href: "/contact" },
    { label: 'separator' },

    ...companies,

    { label: "PPDB", href: "/ppdb", isButton: true },

]
