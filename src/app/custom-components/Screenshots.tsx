"use client";

import React from "react";
import CarouselPlugin from "@/app/custom-components/Carousel";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Screenshots = () => {
    return (
        <section className="flex flex-col font-advaken text-white items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full max-w-7xl mx-auto text-center"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 lg:mb-10 px-2 leading-tight">
                    <Typewriter
                        words={["Нужно начать всё с чистого листа...", "Но всё ли так просто?", "Влияю ли я на что либо?", "", "Нет..."]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h2>
                <div className="w-full flex flex-col justify-center">
                    <CarouselPlugin />
                </div>
            </motion.div>
        </section>
    );
};

export default Screenshots;