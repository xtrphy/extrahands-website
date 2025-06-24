'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Separator = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    const x1 = useTransform(scrollYProgress, [0, 1], [300, -300]);
    const y1 = useTransform(scrollYProgress, [0.2, 1], [-100, 0]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0.2, 1], [200, 200]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

    return (
        <section
            ref={ref}
            className='relative h-screen bg-black flex items-center justify-center font-advaken text-white overflow-hidden'
        >
            <motion.div
                style={{ scale }}
                className='absolute bottom-0 z-1'
            >
                <Image
                    src='/Anton.png'
                    alt='Anton'
                    width={1400}
                    height={600}
                />
            </motion.div>

            <motion.h2
                style={{ x: x1, y: y1 }}
                className='text-6xl text-shadow-lg text-shadow-white/50'
            >
                Я не изгой, всем докажу...
            </motion.h2>

            <motion.h2
                style={{ x: x2, opacity: opacity2, y: y2 }}
                className='text-5xl text-shadow-lg text-shadow-white/50'
            >
                Или нет?...
            </motion.h2>

            <div className='absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-black z-10 pointer-events-auto'></div>
        </section>
    );
};

export default Separator;