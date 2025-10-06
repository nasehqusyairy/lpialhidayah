import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"
import SocialButton, { type SocialButtonProps } from "./social-button"

const socialLinks: SocialButtonProps[] = [
    { Icon: Youtube, href: "https://www.youtube.com/@almannanofficial2948" },
    { Icon: Facebook, href: "https://www.facebook.com/Alhidayah.20" },
    { Icon: Instagram, href: "https://instagram.com/maalhidayah_" },
    { Icon: Phone, href: "https://wa.me/6282234639615" },
    { Icon: Mail, href: "mailto:lpialhidayakauman@gmail.com" },
    { Icon: MapPin, href: "https://maps.app.goo.gl/8SbPTgUXzxc1DPmL6" },
]

export default () => (
    <div className="p-4 lg:px-0 border-t text-sm">
        <div className="mx-auto container">
            <div className="flex lg:flex-row-reverse flex-col justify-between items-center">
                <div className="flex items-center gap-4">
                    {socialLinks.map((el, i) => <SocialButton key={i} {...el} />)}
                </div>
                <div className="lg:m-0 mt-4">© 2025 LPI Al-Hidayah Kauman</div>
            </div>
        </div>
    </div>
)