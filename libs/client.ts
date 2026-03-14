import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'sugioka-design',
    apiKey: 'Km8sy1HF8x16BUGgY7nCUyqBBtnxwU0NS2yH',
});

// スクリーンショットの項目に合わせた型定義
export type Blog = {
    id: string;
    title: string;
    content: string; // 「内容」
    eyecatch?: {     // 「アイキャッチ」
        url: string;
        height: number;
        width: number;
    };
    category?: {    // 「カテゴリ」
        name: string;
    };
    publishedAt: string;
    updatedAt: string;
};