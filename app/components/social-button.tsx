import { Button } from "./ui/button";

export type SocialButtonProps = {
    href: string;
    Icon: React.ElementType;
};

export default ({ href, Icon }: SocialButtonProps) => (
    <Button asChild variant={"secondary"} className="rounded-full" size={"icon"}>
        <a href={href} target="_blank">
            <Icon />
        </a>
    </Button>
)