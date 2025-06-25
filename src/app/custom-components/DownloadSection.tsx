'use client';

import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
    {
        id: 1,
        title: 'Windows',
        link: 'https://disk.yandex.ru/d/_mKSzpAzOUyPdg',
        fileSize: '455MB',
        lang: 'Lang.jpg',
        textColor: '#F1F1F1',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F1F1F1" viewBox="0 0 24 24" width="24" height="24">
                <path d="M1 3l9-1.5v9H1V3zm10.5-1.7L23 0v10.5h-11.5V1.3zM1 12h9v9L1 19.5V12zm10.5 0H23V24l-11.5-1.8V12z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Android',
        link: 'https://disk.yandex.ru/d/qcMtUSBXmk4bqw',
        fileSize: '491MB',
        lang: 'Lang2.jpg',
        textColor: '#010101',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="-22.5 0 301 301" version="1.1" preserveAspectRatio="xMidYMid">
                <g>
                    <path d="M24.0260725,100.361664 C14.1317,100.361664 6.25861893,108.234747 6.25861893,118.129121 L6.25861893,192.137501 C6.25861893,202.031875 14.1317,209.904958 24.0260725,209.904958 C33.9204441,209.904958 41.7935257,202.031875 41.7935257,192.137501 L41.7935257,118.129121 C41.7935257,108.234747 33.9204441,100.361664 24.0260725,100.361664 L24.0260725,100.361664 Z M231.249551,100.361664 C221.355176,100.361664 213.482094,108.234747 213.482094,118.129121 L213.482094,192.137501 C213.482094,202.031875 221.355176,209.904958 231.249551,209.904958 C241.143925,209.904958 249.016999,202.031875 249.016999,192.137501 L249.016999,118.129121 C249.016999,108.234747 241.143925,100.361664 231.249551,100.361664 L231.249551,100.361664 Z" fill="#010101">

                    </path>
                    <path d="M98.0338856,184.818075 C88.1395114,184.818075 80.2664341,192.691157 80.2664341,202.585531 L80.2664341,276.593963 C80.2664341,286.488363 88.1395114,294.361308 98.0338856,294.361308 C107.92826,294.361308 115.801342,286.488363 115.801342,276.593963 L115.801342,202.585531 C115.801342,192.691157 107.92826,184.818075 98.0338856,184.818075 L98.0338856,184.818075 Z M157.240595,184.818075 C147.346221,184.818075 139.473138,192.691157 139.473138,202.585531 L139.473138,276.593963 C139.473138,286.488363 147.346221,294.361308 157.240595,294.361308 C167.134969,294.361308 175.008043,286.488363 175.008043,276.593963 L175.008043,202.585531 C175.008043,192.691157 167.134969,184.818075 157.240595,184.818075 L157.240595,184.818075 Z" fill="#010101">

                    </path>
                    <path d="M78.4434341,7.11654228 C78.0234231,7.12083758 77.6320498,7.22919946 77.2462398,7.44304537 C75.9792855,8.14533584 75.5626532,9.60121987 76.2667168,10.8713836 L88.782836,33.4820338 C64.7023936,46.0117562 48.4373365,69.8232526 48.4047377,97.1510121 L206.869751,97.1510121 C206.837193,69.8232526 190.572096,46.0117562 166.491645,33.4820338 L179.007777,10.8713836 C179.711837,9.60121987 179.295201,8.14533584 178.02825,7.44304537 C177.642438,7.22919946 177.251067,7.1205455 176.831055,7.11654228 C175.931919,7.10786577 175.079646,7.55712 174.599912,8.42257181 L161.920533,31.2781058 C151.548297,26.6773219 139.914231,24.0949434 127.637245,24.0949434 C115.360249,24.0949434 103.726174,26.6773219 93.3539479,31.2781058 L80.6745686,8.42257181 C80.1948375,7.55712 79.3425576,7.10791732 78.4434341,7.11654228 L78.4434341,7.11654228 Z M48.4047377,103.40907 L48.4047377,218.258109 C48.4047377,228.870039 56.9479173,237.413214 67.5598484,237.413214 L187.714637,237.413214 C198.326576,237.413214 206.869751,228.870039 206.869751,218.258109 L206.869751,103.40907 L48.4047377,103.40907 L48.4047377,103.40907 Z" fill="#010101">

                    </path>
                    <path d="M91.0681772,54.9226953 C87.4507168,54.9226953 84.4563973,57.9170105 84.4563973,61.5344795 C84.4563973,65.1519399 87.4507168,68.146255 91.0681772,68.146255 C94.6856376,68.146255 97.6799528,65.1519399 97.6799528,61.5344795 C97.6799528,57.9170105 94.6856376,54.9226953 91.0681772,54.9226953 L91.0681772,54.9226953 Z M164.205874,54.9226953 C160.588413,54.9226953 157.59409,57.9170105 157.59409,61.5344795 C157.59409,65.1519399 160.588413,68.146255 164.205874,68.146255 C167.823326,68.146255 170.817649,65.1519399 170.817649,61.5344795 C170.817649,57.9170105 167.823326,54.9226953 164.205874,54.9226953 L164.205874,54.9226953 Z" fill="#010101">

                    </path>
                </g>
            </svg>
        ),
    },
];

const DownloadSection = () => {
    return (
        <section id='main' className="relative h-screen overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-left sm:bg-center sm:bg- bg-cover z-0"
                style={{
                    backgroundImage: `url('https://sun9-69.userapi.com/s/v1/if2/8C3ZDg-FlSfWCa1p6zxH2AQZfZdJaY0ufUyMh5X0j5Q1KiwrzJfPn1Cu6x0caiQeZN2wNbcOd5x6KCRbQlSTIaqu.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1920x1080&from=bu&cs=1920x0')`,
                }}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(4px)" }}
                transition={{ duration: 1, delay: 0.2 }}
            />

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center text-center h-full font-rubik px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <h2
                    className="text-3xl md:text-5xl text-white mb-14 sm:mb-8 font-advaken font-extralight">
                    Первый эпизод уже доступен!
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {platforms.map(({ id, title, textColor, link, fileSize, icon, lang }) => (
                        <div className='flex flex-col' key={id}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group rounded-xl overflow-hidden w-[180px]"
                            >
                                <div
                                    className="absolute inset-0 z-0 bg-cover bg-center transition duration-300 group-hover:brightness-65"
                                    style={{ backgroundImage: `url("/${lang}")`, backgroundSize: '800px' }}
                                />
                                <span
                                    className="relative z-10 flex items-center justify-center gap-2 px-6 py-3 font-light text-lg"
                                    style={{ color: textColor }}
                                >
                                    {icon}
                                    {title}
                                </span>
                            </a>
                            <span className='select-none mt-2 text-gray-300 text-[13px] font-extralight'>{fileSize}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
            
            <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-auto'></div>
        </section>
    );
};

export default DownloadSection;