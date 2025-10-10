import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "~/components/ui/collapsible"
import { Button } from "../ui/button"
import { navigation } from "~/models/navigation"
import { ChevronsUpDown, Menu } from "lucide-react"
import { Link, NavLink } from "react-router"
import { Separator } from "../ui/separator"

export default () => (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden" size="icon">
                <Menu />
            </Button>
        </SheetTrigger>

        <SheetContent className="p-4">
            <SheetHeader className="px-0 border-b">
                <SheetTitle className="font-semibold">
                    Menu
                </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2">
                {navigation.map((item, index) =>
                    item.children ? (
                        <Collapsible key={item.label}>
                            <CollapsibleTrigger className="flex justify-between items-center hover:bg-secondary p-2 rounded w-full">
                                {item.label}
                                <ChevronsUpDown size={16} />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="flex flex-col gap-2 pl-4 text-muted">
                                    {item.children.map((child) => (
                                        <Link to={child.href ?? "#"} key={child.label} className="hover:bg-secondary p-2 rounded w-full">
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ) : item.isButton ? (
                        <Button
                            asChild
                            className="w-full"
                            key={item.label}
                        >
                            <Link to={item.href ?? "#"}>{item.label}</Link>
                        </Button>
                    ) : item.label === 'separator' ? (
                        <Separator orientation="horizontal" key={`separator-${index}`} />
                    ) : (
                        <NavLink
                            key={item.label}
                            to={item.href ?? "#"}
                            className="hover:bg-secondary p-2 rounded w-full nav-link"
                        >
                            {item.label}
                        </NavLink>
                    )
                )}
            </div>
        </SheetContent>
    </Sheet>
)
