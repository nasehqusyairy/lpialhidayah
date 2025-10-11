import type { Article } from "~/models/article";
import { Badge } from "./ui/badge";

export type ArticleItemProps = {
    article: Article;
    aos?: string;
}

export default ({ article, aos }: ArticleItemProps) => (
    <a {...(aos && { "data-aos": aos })} href={article.href} className="flex gap-4 py-4 not-last:border-b hover:underline" key={article.title}>
        <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="rounded-md w-4/12 object-cover aspect-video"
        />
        <div className="flex flex-col justify-between w-8/12">
            <div>
                <Badge className="mb-2" variant={"outline"}>{article.category}</Badge>
                <div className="mb-2 font-medium text-sm">
                    {article.title}
                </div>
                <p className="text-muted text-sm">
                    {article.excerpt}
                </p>
            </div>

            <p className="text-muted text-xs">
                {article.date}
            </p>
        </div>
    </a>
)