'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className='relative text-white font-advaken flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 min-h-screen px-4 sm:px-6 lg:px-8 py-8'>

            <div className='absolute -top-2 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none'></div>

            <div className="absolute inset-0 bg-[url('/corner.webp')] bg-cover bg-center z-0 blur-xs" />

            <motion.div
                className='flex flex-col gap-6 sm:gap-8 md:gap-10 items-center z-1 max-w-6xl w-full'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true, amount: 0.2 }}
            >

                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-center leading-tight max-w-4xl'>
                    Посмотрите трейлер 1 эпизода!
                </h1>

                <div
                    className='w-full max-w-4xl aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-gray-400 shadow-lg ring-2 sm:ring-3 ring-white/20 z-1'
                >

                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/jCy9S05YJWA?si=ZXVThCT4LcWFfJEi"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />

                </div>

            </motion.div>

        </section>
    );
};

export default About;