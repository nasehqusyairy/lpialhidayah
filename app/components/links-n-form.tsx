import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Info, } from "lucide-react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { Alert, AlertTitle } from "./ui/alert"
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

const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7900.889297545219!2d111.86641900000001!3d-8.056044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e300c4156a41%3A0xeb19fa0c03d695d3!2sMA%20AL%20HIDAYAH!5e0!3m2!1sid!2sid!4v1760003421799!5m2!1sid!2sid"

export default () => {

    const { pathname } = useLocation()
    const withAOS = pathname === "/" // hanya aktif di route "/"

    return (
        <>
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
            <div className="lg:flex flex-row-reverse items-stretch gap-8">
                <div className="mb-8 lg:mb-0 lg:w-6/12">
                    <iframe title="Lokasi MA AL HIDAYAH" {...(withAOS && { "data-aos": "zoom-in" })} src={mapUrl} loading="lazy" className="rounded-2xl lg:w-full lg:h-full aspect-video" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="lg:mb-0 lg:w-6/12" {...(withAOS && { "data-aos": "fade-left" })}>
                    <Alert variant="default" className="bg-primary/10 mb-6 border-primary text-primary">
                        <Info />
                        <AlertTitle>
                            Silakan isi formulir berikut untuk mengirim pesan atau aduan kepada kami.
                        </AlertTitle>
                    </Alert>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="nama">Nama Lengkap</Label>
                                <Input id="nama" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Alamat Email</Label>
                                <Input id="email" type="email" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="pendidikan">Pendidikan</Label>
                            <Select>
                                <SelectTrigger id="pendidikan" className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="umum">Umum</SelectItem>
                                    <SelectItem value="sd">SD</SelectItem>
                                    <SelectItem value="smp">SMP</SelectItem>
                                    <SelectItem value="sma">SMA</SelectItem>
                                    <SelectItem value="kuliah">Kuliah</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subjek">Subjek Pengaduan</Label>
                            <Input id="subjek" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="pesan">Pesan</Label>
                            <Textarea id="pesan" className="min-h-[120px]" />
                        </div>

                        <Button className="w-full">
                            Kirim Pesan
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
