import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router";
import React from "react";

const kontakList = [
    {
        icon: <Phone className="text-primary" />,
        text: "+62 812-3456-7890",
        href: "tel:+6281234567890",
    },
    {
        icon: <Mail className="text-primary" />,
        text: "info@hidayah.com",
        href: "mailto:info@hidayah.com",
    },
    {
        icon: <Facebook className="text-primary" />,
        text: "@lpialhidayah",
        href: "https://facebook.com/lpialhidayah",
    },
    {
        icon: <Instagram className="text-primary" />,
        text: "@lpialhidayah",
        href: "https://instagram.com/lpialhidayah",
    },
    {
        icon: <Youtube className="text-primary" />,
        text: "@lpialhidayah",
        href: "https://youtube.com/@lpialhidayah",
    },
];

export default () => {

    const { pathname } = useLocation()
    const withAOS = pathname === "/" // hanya aktif di route "/"

    return (
        <div className="lg:flex flex-wrap justify-between items-center gap-6 mb-6 px-6 lg:py-4 border rounded-2xl">
            {kontakList.map((item, index) => (
                <React.Fragment key={index}>
                    <div
                        {...(withAOS && { "data-aos": "fade-up" })}
                        data-aos-delay={index * 250}
                        key={index}
                        className="flex lg:flex-col flex-1 lg:justify-center items-center gap-3 py-4 min-w-[120px] hover:text-primary transition-colors hover:cursor-pointer"
                    >
                        <Link to={item.href} target="_blank">
                            <Button size="icon" variant="secondary" className="rounded-full">
                                {item.icon}
                            </Button>
                        </Link>
                        <span>{item.text}</span>

                    </div>
                    {index < kontakList.length - 1 && (
                        <>
                            <Separator
                                orientation="vertical"
                                className="hidden lg:block bg-border h-20!"
                            />
                            <Separator
                                orientation="horizontal"
                                className="lg:hidden bg-border"
                            />

                        </>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
