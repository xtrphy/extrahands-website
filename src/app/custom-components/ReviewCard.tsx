import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';

interface ReviewProps {
    nickname: string;
    avatar: string;
    content: string;
}

const AvatarComponent = ({ avatar, nickname }: { avatar: string, nickname: string }) => {
    const firstTwoLetters = nickname.slice(0, 2);
    return (
        <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{firstTwoLetters}</AvatarFallback>
        </Avatar>
    );
}

const ReviewCard = ({ review }: { review: ReviewProps }) => {
    return (
        <div
            className="max-w-sm border border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-3 hover:scale-103 transition-transform duration-250"
        >
            <div className="flex items-center space-x-4">
                <div
                    className="h-12 w-12 flex items-center justify-center bg-gray-400 text-white text-lg font-semibold rounded-full"
                >
                    <AvatarComponent avatar={review.avatar} nickname={review.nickname} />

                </div>
                <div className="text-gray-900 font-medium">{review.nickname}</div>
            </div>

            <div className="flex text-black text-xl">★★★★★</div>

            <p className="text-gray-700">
                {review.content}
            </p>

            <Link href="https://vk.com/extra__hands?from=groups&w=wall-221086064_2786" target="_blank" className="text-red-500 font-medium cursor-pointer hover:underline">
                Читать ещё
            </Link>
        </div>

    );
};

export default ReviewCard;