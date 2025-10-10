import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "~/components/ui/navigation-menu"
import { Button } from "../ui/button"
import { navigation } from "~/models/navigation"
import { Link, NavLink } from "react-router"
import { Separator } from "../ui/separator"

export default () => (
    <NavigationMenu viewport={false} className="hidden lg:block">
        <NavigationMenuList>
            {navigation.map((item, index) =>
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
                ) : item.label === 'separator' ? (
                    <NavigationMenuItem key={index}>
                        <Separator orientation="vertical" className="h-8!" />
                    </NavigationMenuItem>
                ) : (
                    <NavigationMenuItem key={item.label}>
                        <NavigationMenuLink asChild>
                            <NavLink to={item.href ?? "#"} className="nav-link">{item.label}</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                )
            )}
        </NavigationMenuList>
    </NavigationMenu>
)