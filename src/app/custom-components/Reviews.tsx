"use client";

import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";
import { reviews } from "@/data/reviews";

const Reviews = () => {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleShowMore = () => {
        setVisibleCount(reviews.length);
    };

    const handleShowLess = () => {
        setVisibleCount(3);
    };

    return (
        <section className="relative text-white font-advaken flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 min-h-screen px-4 sm:px-6 lg:px-8 py-8 rounded-b-3xl">

            <div className='absolute -top-2 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none'></div>

            <motion.div
                className="absolute inset-0 bg-center bg-cover z-0"
                style={{
                    backgroundImage: `url('/corner.webp')`,
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(4px)" }}
                transition={{ duration: 1, delay: 0.2 }}
            />

            <div className="flex flex-col items-center gap-12 z-1 my-16 sm:mt-32">

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">Отзывы от наших игроков</h1>

                <div className="w-4xs md:w-4xl lg:w-5xl xl:w-7xl flex flex-wrap place-content-center gap-5">
                    {reviews.slice(0, visibleCount).map(review => (
                        <ReviewCard key={review.nickname} review={review} />
                    ))}
                </div>

                {visibleCount < reviews.length && (
                    <button
                        onClick={handleShowMore}
                        className="bg-transparent border-1 backdrop-blur-lg text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-black transition cursor-pointer"
                    >
                        Показать ещё
                    </button>
                )}

                {visibleCount === reviews.length && (
                    <button
                        onClick={handleShowLess}
                        className="bg-transparent border-1 backdrop-blur-lg text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-black transition cursor-pointer"
                    >
                        Свернуть
                    </button>
                )}

            </div>

        </section>
    );
};

export default Reviews;