import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://girototaxiumuarama.com.br/blog/${post.slug}`,
      siteName: "Giroto Táxi Umuarama",
      locale: "pt_BR",
      type: "article",
    },
  };
}

const WA_LINK = "https://wa.me/5544998913040?text=Ol%C3%A1!%20Preciso%20de%20um%20t%C3%A1xi%20em%20Umuarama%20agora.";
const PHONE = "tel:+5544998913040";

const categoryColors: Record<string, string> = {
  "Dicas": "bg-yellow-400/20 text-yellow-400",
  "Viagens": "bg-blue-400/20 text-blue-400",
  "Aeroporto": "bg-purple-400/20 text-purple-400",
  "Segurança": "bg-red-400/20 text-red-400",
  "Empresas": "bg-green-400/20 text-green-400",
  "Saúde": "bg-pink-400/20 text-pink-400",
  "Preços": "bg-orange-400/20 text-orange-400",
  "Família": "bg-teal-400/20 text-teal-400",
  "Cidade": "bg-indigo-400/20 text-indigo-400",
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Giroto Táxi Umuarama" },
    publisher: { "@type": "Organization", name: "Giroto Táxi Umuarama", url: "https://girototaxiumuarama.com.br" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-[#080808] text-white font-sans antialiased min-h-screen">

        {/* TOP BAR MOBILE */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black text-xs font-bold text-center py-1.5 flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
          </span>
          Disponível Agora • Atendimento Imediato 24h
        </div>

        {/* NAV */}
        <nav className="fixed top-6 md:top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-yellow-400 text-2xl">🚖</span>
              <div>
                <p className="font-bold text-white leading-none">Giroto Táxi</p>
                <p className="text-[10px] text-yellow-400 uppercase tracking-widest">Umuarama 24h</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Início</Link>
              <Link href="/#servicos" className="hover:text-yellow-400 transition-colors">Serviços</Link>
              <Link href="/#faq" className="hover:text-yellow-400 transition-colors">Dúvidas</Link>
              <Link href="/blog" className="text-yellow-400 font-semibold">Blog</Link>
              <Link href="/#contato" className="hover:text-yellow-400 transition-colors">Contato</Link>
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors">
              Chamar no WhatsApp
            </a>
          </div>
        </nav>

        {/* ARTICLE */}
        <article className="pt-28 md:pt-24 pb-16 px-4">
          <div className="max-w-3xl mx-auto">

            {/* BREADCRUMB */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Início</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-300">{post.title}</span>
            </nav>

            {/* META */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-white/10 text-white"}`}>
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.date}</span>
              <span className="text-gray-500 text-sm">· {post.readTime} de leitura</span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">{post.title}</h1>

            {/* EXCERPT */}
            <p className="text-gray-300 text-xl leading-relaxed mb-10 pb-10 border-b border-white/10">{post.excerpt}</p>

            {/* CONTENT */}
            <div className="prose prose-invert max-w-none">
              {paragraphs.map((para, i) => {
                if (para.startsWith("**") && para.endsWith("**")) {
                  return <h2 key={i} className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white">{para.replace(/\*\*/g, "")}</h2>;
                }
                if (para.includes("**")) {
                  const parts = para.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={i} className="text-gray-300 leading-relaxed mb-6 text-lg">
                      {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-white font-bold">{part}</strong> : part)}
                    </p>
                  );
                }
                if (para.startsWith("- ")) {
                  const items = para.split("\n").filter(l => l.startsWith("- "));
                  return (
                    <ul key={i} className="list-none space-y-2 mb-6">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-300 text-lg">
                          <span className="text-yellow-400 mt-1">→</span>
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-gray-300 leading-relaxed mb-6 text-lg">{para}</p>;
              })}
            </div>

            {/* CTA INLINE */}
            <div className="mt-12 bg-white/5 border border-yellow-400/20 rounded-2xl p-6 text-center">
              <p className="font-bold text-lg mb-2">Precisa de táxi em Umuarama?</p>
              <p className="text-gray-400 text-sm mb-4">Chame agora pelo WhatsApp. Atendimento 24 horas.</p>
              <a href={WA_LINK} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-full transition-all">
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </article>

        {/* RELATED POSTS */}
        <section className="py-16 border-t border-white/5 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-8">Leia também</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <article className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-2xl p-6 transition-all hover:-translate-y-1">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[p.category] || "bg-white/10 text-white"} mb-3 inline-block`}>
                      {p.category}
                    </span>
                    <h3 className="font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors leading-snug">{p.title}</h3>
                    <p className="text-gray-500 text-xs">{p.readTime} · {p.date}</p>
                  </article>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
                Ver todos os artigos →
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-8 bg-black/50">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2026 Giroto Táxi Umuarama. Todos os direitos reservados.</p>
            <Link href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">← Voltar para o início</Link>
          </div>
        </footer>

        {/* MOBILE STICKY */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 p-3">
          <div className="flex gap-2.5">
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-0.5 h-14 bg-green-500 rounded-2xl font-bold text-white text-sm">
              <span>WhatsApp</span>
              <span className="text-[10px] text-green-100 font-normal">Resposta em segundos</span>
            </a>
            <a href={PHONE}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 h-14 border border-white/20 rounded-2xl font-semibold text-white text-sm">
              <span>Ligar Agora</span>
              <span className="text-[10px] text-gray-400 font-normal">Atendimento 24h</span>
            </a>
          </div>
        </div>
        <div className="h-20 md:hidden" />
      </div>
    </>
  );
}
