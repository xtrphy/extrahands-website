"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react';
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <div className="hidden sm:block bg-black/30 p-4">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/">Главная</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Соц сети</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-2 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
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
            </div>

            <div className="sm:hidden bg-black/30 p-4 flex items-center justify-between">
                <Link href='/' className="text-white text-lg">EXTRA HANDS</Link>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white"
                    aria-label="Открыть меню"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="sm:hidden bg-black/90 px-4 pb-4 pt-2 space-y-4 text-white text-md overflow-hidden"
                    >
                        {[
                            { href: "/", label: "Главная" },
                            { href: "https://vk.com/extra__hands?from=groups", label: "ВКонтакте", external: true },
                            { href: "https://www.youtube.com/@EXTRA-HANDS", label: "YouTube", external: true },
                            { href: "https://www.donationalerts.com/r/extrahands", label: "Поддержать", external: true },
                            { href: "https://vk.com/im?entrypoint=community_page&media=&sel=-221086064", label: "Сотрудничество", external: true },
                        ].map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: 0.05 * index, duration: 0.3 }}
                            >
                                <Link
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block hover:underline transition-all duration-200"
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
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
