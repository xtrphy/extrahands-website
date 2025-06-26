"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const components: { img: string; title: string; href: string; description: string }[] = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png",
        title: "ВКонтакте",
        href: "https://vk.com/extra__hands?from=groups",
        description:
            "Наше тёплое и преданное сообщество",
    },
    {
        img: "https://cdn.iconscout.com/icon/free/png-256/free-youtube-logo-icon-download-in-svg-png-gif-file-formats--social-media-70-flat-icons-color-pack-logos-432560.png",
        title: "Youtube",
        href: "https://www.youtube.com/@EXTRA-HANDS",
        description:
            "Youtube канал с дополнительным контентом",
    },
    {
        img: "https://vasyukov.net/upload/donate/donationalerts.png",
        title: "DonationAlerts",
        href: "https://www.donationalerts.com/r/extrahands",
        description:
            "Здесь вы можете поддержать наш проект",
    },
]

export default function NavigationMenuDemo() {
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 150;
            setShowHeader(window.scrollY < threshold);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{
                opacity: showHeader ? 1 : 0,
                filter: showHeader ? "blur(0px)" : "blue(8px)",
                pointerEvents: showHeader ? "auto" : "none",
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`font-advaken font-extralight fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showHeader ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <NavigationMenu viewport={false} className="bg-black/30 p-4">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">Главная</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Соц сети</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        img={component.img}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link target="_blank" href="https://vk.com/im?entrypoint=community_page&media=&sel=-221086064">Сотрудничество</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </motion.header>
    )
}

function ListItem({
    img,
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { img: string; title: string; href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href} target="_blank">
                    <Image
                        width={24}
                        height={24}
                        src={img}
                        alt={title}
                    />
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
