import React, { useState } from "react"
import { Card, CardContent } from "../ui/card"
import strukturLow from "~/images/struktur.webp"
import { Link } from "react-router"

const strukturHigh = "/images/struktur.png"
const missions = [
    "Terwujudnya Yayasan yang unggul dan rujukan dalam istikomah menghafal dan mengamalkan al-Qur'an",
    "Terwujudnya Yayasan yang unggul dalam Berakhakhul karimah dan kuat dalam karakter kepemimpinan.",
    "Mewujudkan Yayasan yang membentuk masyarakat qur'ani dan kuat dalam Aqidah ahlusunnah wal jamaah.",
    "Mewujudkan Yayasan yang multilingual dalam insan yang wawasan global dan shaleh.",
    "Mengembangkan potensi peserta didik dalam menggunakan ilmu pengetahuan dan teknologi untuk kemaslahatan umat."
]

export default function AboutSection() {
    const [showModal, setShowModal] = useState(false)

    return (
        <section id="about">
            <div className="mx-auto p-4 lg:px-0 container">
                <h1 className="mb-4 text-4xl leading-snug">
                    <span className="text-primary">Tentang</span> Kami
                </h1>
                <div className="lg:flex gap-8">
                    {/* Kolom kiri */}
                    <div className="lg:w-1/2">
                        <h2 className="mb-4 text-muted">Visi</h2>
                        <Card className="mb-4">
                            <CardContent>
                                Mewujudkan generasi qur'an unggul dan rujukan yang berwawasan luas, berfikir maju dalam iptek, kuat dalam aqidah dan menjadi pelopor multilingual masyarakat qur'ani.
                            </CardContent>
                        </Card>

                        <h2 className="mb-4 text-muted">Misi</h2>
                        {missions.map((misi, idx) => (
                            <Card className="mb-4" key={idx}>
                                <CardContent>{misi}</CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Kolom kanan */}
                    <div className="lg:w-1/2">
                        <h2 className="mb-4 text-muted">Struktur Organisasi</h2>
                        <Link to={strukturHigh} target="_blank"
                            className="flex justify-center items-center mb-4 border rounded-2xl h-96 lg:h-[calc(100%-3rem)] overflow-hidden cursor-pointer"
                        >
                            {/* Gunakan gambar low-quality + lazy load */}
                            <img
                                src={strukturLow}
                                alt="Struktur Organisasi"
                                loading="lazy"
                                className="hover:opacity-90 w-full h-full object-contain transition-opacity duration-300"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
