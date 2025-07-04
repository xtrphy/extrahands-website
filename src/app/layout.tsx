import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Header from '@/app/custom-components/Header';
import Footer from "./custom-components/Footer";

const rubik = Rubik({
    subsets: ["cyrillic"],
    variable: "--font-rubik",
});

const zaychik = localFont({
    src: "./fonts/Zaychik-Regular.ttf",
    variable: "--font-zaychik"
});

const advaken = localFont({
    src: "./fonts/Advaken-Sans.otf",
    variable: "--font-advaken"
});

export const metadata: Metadata = {
    title: "EXTRA HANDS",
    description: "Официальный сайт команды EXTRA HANDS",
    icons: {
        icon: "/logo.webp",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${advaken.variable} ${rubik.variable} ${zaychik.variable} antialiased bg-black`}
            >
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
