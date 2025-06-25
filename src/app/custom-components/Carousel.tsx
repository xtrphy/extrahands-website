"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    const images = [
        {
            src: "/kholl.png",
            alt: "Коридор",
        },
        {
            src: "/kladovka.png",
            alt: "Кладовка"
        },
        {
            src: "/krovat.png",
            alt: "Кровать"
        },
        {
            src: "/poselok.png",
            alt: "Посёлок"
        },
        {
            src: "/shop.png",
            alt: "Магазин"
        },
        {
            src: "/tip.png",
            alt: "Мальчик",
        },
        {
            src: "/school.png",
            alt: "Школа",
        }
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform hover:scale-102 duration-300"
                                priority={index === 0}
                                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, (max-width: 1280px) 60vw, 50vw"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}