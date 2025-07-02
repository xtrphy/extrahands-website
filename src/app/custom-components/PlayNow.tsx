"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { platforms } from './DownloadSection';

const PlayNow = () => {
    return (
        <section className="relative text-white font-advaken flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 min-h-screen px-4 sm:px-6 lg:px-8 py-8">

            <div className='absolute -top-2 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none'></div>

            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden blur-sm">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/Road.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center text-center h-full font-rubik px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, filter: "blur(8px)", y: -50 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >

                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white mb-8 sm:mb-12 font-advaken font-extralight">
                    Играйте уже сейчас!
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
                    {platforms.map(({ id, title, textColor, link, fileSize, icon, lang }) => (
                        <div className='flex flex-col items-center' key={id}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group rounded-xl overflow-hidden w-full sm:w-[180px]"
                            >
                                <div
                                    className="absolute inset-0 z-0 bg-cover bg-center transition duration-300 group-hover:brightness-65"
                                    style={{ backgroundImage: `url("/${lang}")` }}
                                />
                                <span
                                    className="relative z-10 flex items-center justify-center gap-2 px-6 py-3 font-light text-base sm:text-lg"
                                    style={{ color: textColor }}
                                >
                                    {icon}
                                    {title}
                                </span>
                            </a>
                            <span className='select-none mt-2 text-gray-300 text-[12px] sm:text-[13px] font-extralight'>{fileSize}
                            </span>
                        </div>
                    ))}
                </div>

            </motion.div>

        </section>
    );
};

export default PlayNow;