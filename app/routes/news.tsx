import { SearchIcon } from "lucide-react";
import ArticleItem from "~/components/article-item";
import Cover from "~/components/cover"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput
} from "~/components/ui/input-group"
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { articles } from "~/models/article";

const background = "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80";

const categories = [
    { value: 'all', name: "Semua Kategori" },
    { value: 'berita', name: "Berita" },
    { value: 'pengumuman', name: "Pengumuman" },
    { value: 'artikel', name: "Artikel" },
]

const levels = [
    { value: 'all', name: "Semua Tingkat" },
    { value: 'sd', name: "SD" },
    { value: 'smp', name: "SMP" },
    { value: 'sma', name: "SMA" },
]

export default () => {
    return (
        <div className="mx-auto px-4 py-12 container">
            <Cover background={background} title="Berita" />
            <form onSubmit={e => e.preventDefault()} className="lg:flex gap-4 grid mb-4">
                <div className="lg:w-2/12">
                    <Label htmlFor="category" className="mb-2">Kategori</Label>
                    <Select>
                        <SelectTrigger id="category" name="category" className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map(cat => (
                                <SelectItem key={cat.value} value={cat.value}>{cat.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="lg:w-2/12">
                    <Label htmlFor="level" className="mb-2">Tingkat</Label>
                    <Select>
                        <SelectTrigger id="level" name="level" className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {levels.map(lvl => (
                                <SelectItem key={lvl.value} value={lvl.value}>{lvl.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex-1">
                    <Label htmlFor="title" className="mb-2">Judul</Label>
                    <InputGroup>
                        <InputGroupInput id="title" name="title" />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                            <InputGroupButton variant={"outline"}>Search</InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </form>
            {articles.map(article => (
                <ArticleItem key={article.title} article={article} />
            ))}
        </div>
    )
}