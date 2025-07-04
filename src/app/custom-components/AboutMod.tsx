"use client";

import React from 'react';

const AboutMod = () => {
    return (
        <section className="relative min-h-screen bg-black flex flex-col items-center justify-center font-advaken text-white overflow-hidden">

            <div className='absolute -top-2 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none'></div>

            <div className="absolute inset-0 bg-[url('/car.webp')] bg-cover bg-center z-0 blur-xs" />

            <div className="relative z-10 flex flex-col items-center gap-12 my-16 sm:mt-32">
                <h1 className='text-7xl'>О моде</h1>
                <p className='text-3xl'>О чем наш мод? В чем отличие от других?</p>
            </div>

            <div className='absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none'></div>

        </section>
    );
};

export default AboutMod;