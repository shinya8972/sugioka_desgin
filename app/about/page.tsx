import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center py-20">
            <h1 className="text-4xl font-bold text-sugioka-gray uppercase tracking-widest">
                About Us
            </h1>

            <div className="mt-sugioka-gap max-w-silver-ratio text-center">
                <p className="text-lg leading-relaxed">
                    私たちは大阪を拠点に、1pxの狂いもない美学と<br />
                    圧倒的な余白を大切にするWeb制作チームです。
                </p>
            </div>

            <div className="mt-10">
                <Link href="/" className="text-blue-600 hover:underline">
                    ← トップページに戻る
                </Link>
            </div>
        </main>
    );
}