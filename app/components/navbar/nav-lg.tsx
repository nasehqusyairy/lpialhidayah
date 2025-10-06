import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "~/components/ui/navigation-menu"
import { Button } from "../ui/button"
import { navigation } from "~/models/navigation"
import { Link } from "react-router"

export default () => (
    <NavigationMenu viewport={false} className="hidden lg:block">
        <NavigationMenuList>
            {navigation.map((item) =>
                item.children ? (
                    <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className={"w-[150px]"}>
                                {item.children.map((child) => (
                                    <li key={child.label}>
                                        <NavigationMenuLink href={child.href ?? "#"}>{child.label}</NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ) : item.isButton ? (
                    <NavigationMenuItem key={item.label}>
                        <Button asChild={item.href !== undefined}>
                            {item.href ? (
                                <Link to={item.href}>{item.label}</Link>
                            ) : item.label}
                        </Button>
                    </NavigationMenuItem>
                ) : (
                    <NavigationMenuItem key={item.label}>
                        <NavigationMenuLink href={item.href ?? "#"}>{item.label}</NavigationMenuLink>
                    </NavigationMenuItem>
                )
            )}
        </NavigationMenuList>
    </NavigationMenu>
)