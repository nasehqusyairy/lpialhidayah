import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const missions = [
    "Terwujudnya Yayasan yang unggul dan rujukan dalam istikomah menghafal dan mengamalkan al-Qur'an",
    "Terwujudnya Yayasan yang unggul dalam Berakhakhul karimah dan kuat dalam karakter kepemimpinan.",
    "Mewujudkan Yayasan yang membentuk masyarakat qur'ani dan kuat dalam Aqidah ahlusunnah wal jamaah.",
    "Mewujudkan Yayasan yang multilingual dalam insan yang wawasan global dan shaleh.",
    "Mengembangkan potensi peserta didik dalam menggunakan ilmu pengetahuan dan teknologi untuk kemaslahatan umat."
]

export default () => {
    return (
        <>
            <section>
                <div className="mx-auto px-4 lg:px-0 py-12 container">
                    <Badge variant={"secondary"} className="mb-4">Tentang</Badge>
                    <h1 className="mb-4 text-4xl leading-snug">
                        Tentang <span className="text-primary">Kami</span>
                    </h1>
                    <div className="lg:flex gap-8">
                        <div className="lg:w-1/2">
                            <h2 className="mb-4 text-primary">Visi</h2>
                            <Card className="mb-4">
                                <CardContent>
                                    Mewujudkan generasi qur'an unggul dan rujukan yang berwawasan luas, berfikir maju dalam iptek, kuat dalam aqidah dan menjadi pelopor multilingual masyarakat qur'ani.
                                </CardContent>
                            </Card>
                            <h2 className="mb-4 text-primary">Misi</h2>
                            {missions.map((misi, idx) => (
                                <Card className="mb-4" key={idx}>
                                    <CardContent>
                                        {misi}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="mb-4 text-primary">Struktur Organisasi</h2>
                            <div className="bg-secondary mb-4 rounded-2xl h-80"></div>
                            <h2 className="mb-4 text-primary">Afiliasi Kampus</h2>
                            <div className="bg-secondary rounded-2xl h-64"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}