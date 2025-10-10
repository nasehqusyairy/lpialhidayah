import { Badge } from "./ui/badge";

type CoverProps = {
    background: string;
    title: string;
    metadatas?: string[];
    badges?: string[];
}

export default ({ background, title, metadatas, badges }: CoverProps) => (
    <div className="flex flex-col justify-center items-center gap-4 bg-cover bg-center mb-12 rounded-2xl h-96 text-white"
        style={{
            backgroundImage:
                `linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1)),url('${background}')`,
        }}
    >

        {badges && <div className="flex flex-wrap justify-center gap-2">
            {badges.map((badge, i) => <Badge key={i} className="bg-white/20">{badge}</Badge>)}
        </div>}
        <h1 className="font-bold text-4xl">{title}</h1>
        {metadatas && <p className="text-muted text-sm">{metadatas.join(" • ")}</p>}

    </div>
)