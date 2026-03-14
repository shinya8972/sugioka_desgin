import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="max-w-silver-ratio mx-auto py-20 px-10">
            <h1 className="text-4xl font-bold text-sugioka-gray tracking-widest mb-10">
                CONTACT
            </h1>

            <p className="text-sm leading-relaxed mb-sugioka-gap">
                制作のご依頼、ご相談は以下のメールアドレス、<br />
                またはSNSよりお気軽にお問い合わせください。
            </p>

            <div className="space-y-6">
                <div>
                    <span className="text-xs uppercase tracking-tighter text-gray-400 block mb-1">Email</span>
                    <a href="mailto:info@example.com" className="text-xl hover:text-sugioka-gray transition-colors">
                        info@example.com
                    </a>
                </div>

                <div>
                    <span className="text-xs uppercase tracking-tighter text-gray-400 block mb-1">Instagram</span>
                    <a href="#" className="text-xl hover:text-sugioka-gray transition-colors">
                        @sugioka_design
                    </a>
                </div>
            </div>
        </div>
    );
}