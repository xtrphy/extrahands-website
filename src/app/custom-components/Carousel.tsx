"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselPlugin() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);

        return () => {
            window.removeEventListener('resize', checkDesktop);
        }
    }, []);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        }

        api.on("select", onSelect);
        return () => {
            api.off("select", onSelect);
        }
    }, [api]);

    const images = [
        { src: "/poselok.png", alt: "Посёлок" },
        { src: "/Roditeli.png", alt: "Родители идут с коробками" },
        { src: "/Anton_Olya_Hall.png", alt: "Антон и Оля в коридоре" },
        { src: "/kladovka.png", alt: "Кладовка" },
        { src: "/magazin.png", alt: "Магазин" },
        { src: "/Roma_Byasha.png", alt: "Рома и Бяша" },
        { src: "/school.png", alt: "Школа" },
        { src: "/Fox.png", alt: "Лиса" },
    ];

    return (
        <>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-md sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-xl 2xl:max-w-4xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                setApi={setApi}
            >
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative aspect-video overflow-hidden rounded-lg transition-shadow duration-300">
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
                {isDesktop && (
                    <>
                        <CarouselPrevious />
                        <CarouselNext />
                    </>
                )}
            </Carousel>

            <div className="flex justify-center mt-5 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2.25 w-2.25 rounded-full transition-all duration-300 cursor-pointer ${current === index
                            ? "bg-[#7b7b7b] scale-125"
                            : "bg-white hover:brightness-50"
                            }`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Перейти к слайду ${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
}