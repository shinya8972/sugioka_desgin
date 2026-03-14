import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // ← これを追加！

const geist = Geist({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SUGIOKA DESIGN",
    description: "Web production based in Osaka",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
        <body className={`${geist.className} antialiased text-sugioka-black`}>
        {/* --- 共通ヘッダー --- */}
        <header className="flex justify-between items-center px-10 h-20 border-b border-gray-100 bg-white">
            <div className="font-bold text-lg tracking-widest">SUGIOKA DESIGN</div>
            <nav className="flex gap-8 text-sm font-medium">
                <Link href="/" className="hover:text-sugioka-gray transition-colors">HOME</Link>
                <Link href="/about" className="hover:text-sugioka-gray transition-colors">ABOUT</Link>
                <Link href="/contact" className="hover:text-sugioka-gray transition-colors">CONTACT</Link>
            </nav>
        </header>

        {/* --- 各ページの中身 --- */}
        <main className="grow">
            {children}
        </main>
        <footer className="py-10 border-t border-gray-100 text-center">
            <p className="text-xs text-sugioka-gray tracking-widest">
                © 2026 SUGIOKA DESIGN. ALL RIGHTS RESERVED.
            </p>
        </footer>
        </body>
        </html>
    );
}