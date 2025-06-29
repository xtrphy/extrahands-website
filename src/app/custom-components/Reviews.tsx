"use client";

import React from "react";
import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";

const Reviews = () => {
    const reviews = [
        {
            nickname: "Николай Неколович",
            avatar: "https://sun9-8.userapi.com/s/v1/ig2/sUKz2c-Ey1r86QYoXL9KGvzcmUiP7fkzGMbH73pRHz3MQVq4B7g13C-oFy12UzdkZ1YdnB7y0vCt0AkrwQqpe2us.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,900x900&from=bu&cs=900x0",
            content: "Это афигенно, мне очень понравилось, потому что первый эпизод вышел довольно большим, учитывая интересные ответвления, а особенно скримеры пугающие, что аж дёргало и были мурашки по коже. Очень жду 2 главу!",
        },
        {
            nickname: "Андрей Казанцев",
            avatar: "https://sun9-32.userapi.com/s/v1/ig2/I-W-ytVe-MudAWCcDjEEt6Nb1vLTzuA_CuavzkZDDWiLBTIlqZ6fyM3eJ5cYuvVr6GT7f2RPZCGl_2BkHEfQM1WH.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1024x1024&from=bu&cs=1024x0",
            content: "Прошел мод на все 100%, теперь могу вынести вердикт. Не смотря на то что это первый эпизод, очень много выборов (я этому очень рад) даже понятно что последующие эпизоды будут многообещающими, та же атмосфера, в моментах уютная и жуткая. Работа проделана колоссальная.",
        },
        {
            nickname: "Stranger Sell",
            avatar: "https://sun9-17.userapi.com/s/v1/ig2/1otTIeZ3qIk96s1NddmsLrdWlFg0zs-D4P39YAsTAbHjp3mhY7KkIBiM7IgKBZKbEIamHVW0V21AoO1QrEqgbSbs.jpg?quality=95&as=32x71,48x107,72x160,108x240,160x356,240x534,360x801,480x1068,540x1202,640x1425,720x1603,1080x2404&from=bu&cs=1080x0",
            content: "Что ж, я прошел мод и мне он понравился. Особенно чувствительна динамика прохождения. Хоть время для прохождения не очень большая, но я поздравляю команду с выходом одного из самых качественных модов. Желаю удачи при создании нового эпизода! 😎🥳👍",
        },
        {
            nickname: "Юлька Бирюкова",
            avatar: "https://sun9-62.userapi.com/s/v1/ig2/sTb_VT6HTMNHBIMDF_hm3wU8h7P1qhQx703wBM6Epo17coAFtz0f7T5izS79X1AtwGSflsgqcAVRxRKJjYtl0XJB.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1024x1536&from=bu&cs=1024x0",
            content: "Наконец-то появилась возможность сыграть и... аж дар речи потеряла ещё в начале игры. Это просто - взрыв мозга! И музыкальное сопровождение, и очень интригующий конец.... Прекрасно!!!"
        },
        {
            nickname: "Илья Михайлов",
            avatar: "https://sun9-47.userapi.com/s/v1/ig2/QoYx5fulMBHdFdTMQb-CnB8YUxV1pnVreNPdiWdX1zjgUJbMo5XQGju2gBimk-slTvDoyDlawkcNMYeuYKIYxQs9.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0",
            content: "Хочу сказать больше спасибо за проделанную работу, я прошёл «Зайчик: Я Не Изгой» на все 💯 и получил все достижения, которые есть на данный момент, первый эпизод мне ну очень понравился и вы проделали за два года огромную работы, и я сразу скажу - всё было не зря!"
        },
    ];

    return (
        <section className="relative text-white font-advaken flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 min-h-screen px-4 sm:px-6 lg:px-8 py-8">

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

            <div className="flex flex-col gap-12 z-1 mt-32">

                <h1 className="text-6xl text-center">Отзывы от наших игроков</h1>

                <div className="w-7xl flex flex-wrap place-content-center gap-5">
                    {reviews.map(review => (
                        <ReviewCard key={review.nickname} review={review} />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Reviews;