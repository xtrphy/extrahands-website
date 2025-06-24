'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className='relative text-white font-advaken flex flex-col items-center justify-center gap-12 h-screen'>

            <div className='absolute -top-2 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-auto'></div>

            <motion.div
                className="absolute inset-0 bg-left sm:bg-center sm:bg- bg-cover z-0"
                style={{
                    backgroundImage: `url('/corner.png')`,
                }}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(4px)" }}
                transition={{ duration: 1, delay: 0.2 }}
            />

            <motion.div
                className='flex flex-col gap-10 items-center z-1'
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <h1
                    className='text-6xl'
                >
                    Посмотрите трейлер 1 эпизода!
                </h1>

                <motion.div
                    className='rounded-xl overflow-hidden shadow-gray-400 shadow-lg ring-3 ring-white/20 z-1'>
                    <iframe width="650" height="365" src="https://www.youtube.com/embed/jCy9S05YJWA?si=ZXVThCT4LcWFfJEi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default About;