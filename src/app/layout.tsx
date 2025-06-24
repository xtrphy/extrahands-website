import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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

const saikono = localFont({
    src: "./fonts/russia.ttf",
    variable: "--font-saikono"
})

export const metadata: Metadata = {
    title: "EXTRA HANDS",
    description: "Официальный сайт команды EXTRA HANDS",
    icons: {
        icon: "/logo.png",
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
                className={`${rubik.variable} ${zaychik.variable} ${advaken.variable} ${saikono.variable} antialiased bg-black`}
            >
                {children}
            </body>
        </html>
    );
}
