import Link from "next/link";
import Image from "next/image";
import { client, Blog } from "@/libs/client"; // 1. 窓口をインポート

export default async function Home() { // 2. async を追加
                                       // 3. microCMSからブログ記事を取得
    const data = await client.get({ endpoint: "blogs" });
    const posts: Blog[] = data.contents;

    return (
        <main className="min-h-screen">
            {/* --- メインビジュアルセクション（既存のまま） --- */}
            <div className="grid grid-cols-12 items-center gap-x-sugioka-gap px-10 py-20 mx-auto">
                <div className="col-span-5 space-y-6">
                    <h1 className="text-6xl font-bold leading-tight tracking-tighter text-sugioka-black text-balance">
                        大阪の品格、<br />
                        ミニマルの美学。
                    </h1>
                    <p className="text-lg text-sugioka-gray max-w-md">
                        1pxの狂いもない精度と、180pxの余白が織りなす、<br />
                        本質だけを残したWebデザイン。
                    </p>
                    <div className="pt-4">
                        <a href="/works" className="inline-block px-8 py-4 bg-sugioka-black text-white text-sm font-bold tracking-widest hover:bg-sugioka-gray transition-colors">
                            VIEW WORKS
                        </a>
                    </div>
                </div>

                <div className="col-span-7">
                    <div className="relative w-full aspect-[1.414/1] bg-gray-100 overflow-hidden shadow-2xl">
                        <Image
                            src="/logo_sugi.svg"
                            alt="SUGIOKA DESIGN Main Visual"
                            fill
                            className=""
                            priority
                            sizes="(max-width: 1280px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>

            {/* --- 次のセクションへの区切り（180px） --- */}
            <div className="h-sugioka-gap"></div>

            {/* --- 4. 追加：ブログ一覧セクション --- */}
            <section className="px-10 py-20 mx-auto">
                <h2 className="text-sm tracking-widest text-sugioka-gray mb-10">LATEST BLOG</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <Link key={post.id} href={`/blogs/${post.id}`}> {/* ← mapの内側に移動 */}
                            <article className="group cursor-pointer">
                                {/* アイキャッチ画像があれば表示（白銀比） */}
                                {post.eyecatch && (
                                    <div className="relative w-full aspect-[1.414/1] mb-4 overflow-hidden bg-gray-100">
                                        <Image
                                            src={post.eyecatch.url}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-2 group-hover:text-sugioka-gray transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-400">
                                    {new Date(post.publishedAt || "").toLocaleDateString()}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>

            <div className="h-sugioka-gap"></div>
        </main>
    );
}