import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    subsets: ["cyrillic"],
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "EXTRA HANDS",
    description: "Официальный сайт команды EXTRA HANDS",
    icons: {
        icon: '/logo.png',
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
                className={`${rubik.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
