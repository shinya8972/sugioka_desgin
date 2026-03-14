import { client, Blog } from "@/libs/client";
import Image from "next/image";
import { notFound } from "next/navigation"; // 404専用の関数

// Next.js 15以降の型定義に合わせた書き方
type Props = {
    params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
    // 1. paramsを「待ってから」受け取る（Next.js 15の作法）
    const { id } = await params;

    // 2. microCMSから記事を取得
    // try-catchで囲むことで、存在しないIDの時に安全に404を出せます
    try {
        const post: Blog = await client.get({
            endpoint: "blogs",
            contentId: id,
        });

        if (!post) return notFound();

        return (
            <main className="max-w-[800px] mx-auto px-10 py-20">
                {/* アイキャッチ（白銀比） */}
                {post.eyecatch && (
                    <div className="relative w-full aspect-[1.414/1] mb-10 overflow-hidden bg-gray-100">
                        <Image
                            src={post.eyecatch.url}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* 記事ヘッダー */}
                <header className="mb-12">
                    <h1 className="text-4xl font-bold leading-tight text-sugioka-black mb-4">
                        {post.title}
                    </h1>
                    <p className="text-sm text-sugioka-gray tracking-widest">
                        {new Date(post.publishedAt || "").toLocaleDateString("ja-JP")}
                    </p>
                </header>

                {/* 本文（Tailwind Typography: prose を適用） */}
                <div
                    className="prose prose-lg max-w-none
          prose-headings:text-sugioka-black
          prose-p:leading-relaxed
          prose-img:rounded-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-20 pt-10 border-t">
                    <a href="/" className="text-sm tracking-widest hover:text-sugioka-gray transition-colors">
                        ← BACK TO HOME
                    </a>
                </div>
            </main>
        );
    } catch (error) {
        // 記事が見つからない、またはエラーの場合は404ページへ
        return notFound();
    }
}