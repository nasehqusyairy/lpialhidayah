import { Info, } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import ContactBar from "./contact-bar"
import { Alert, AlertTitle } from "../ui/alert"

export default () => {
    return (
        <section id="contact">
            <div className="mx-auto p-4 lg:px-0 pb-12 container">
                <h1 data-aos="fade-right" className="mb-6 text-4xl">
                    <span className="text-primary">Hubungi</span> Kami
                </h1>
                <ContactBar />
                <div className="lg:flex flex-row-reverse items-stretch gap-8">
                    <div className="mb-8 lg:mb-0 lg:w-6/12">
                        <iframe title="Lokasi MA AL HIDAYAH" data-aos="zoom-in" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7900.889297545219!2d111.86641900000001!3d-8.056044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e300c4156a41%3A0xeb19fa0c03d695d3!2sMA%20AL%20HIDAYAH!5e0!3m2!1sid!2sid!4v1760003421799!5m2!1sid!2sid" loading="lazy" className="rounded-2xl lg:w-full lg:h-full aspect-video" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="lg:mb-0 lg:w-6/12" data-aos="fade-right">
                        <Alert variant="default" className="bg-primary/10 mb-6 border-primary text-primary">
                            <Info />
                            <AlertTitle>
                                Silakan isi formulir berikut untuk mengirim pesan atau aduan kepada kami.
                            </AlertTitle>
                        </Alert>
                        <div className="space-y-5">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}