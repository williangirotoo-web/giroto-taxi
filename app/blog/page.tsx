import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog sobre Táxi em Umuarama | Dicas e Informações — Giroto Táxi",
  description: "Blog com dicas, informações e guias sobre táxi em Umuarama. Saiba como chamar táxi, preços, viagens intermunicipais e muito mais.",
  keywords: "blog táxi umuarama, dicas táxi umuarama, informações táxi umuarama",
};

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

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
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

      {/* HEADER */}
      <div className="pt-28 md:pt-24 pb-16 px-4 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Início</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-300">Blog</span>
          </nav>
          <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Blog</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Dicas e Guias sobre<br />Táxi em Umuarama</h1>
          <p className="text-gray-400 text-lg max-w-2xl">Informações úteis sobre transporte, viagens e como aproveitar melhor o serviço de táxi em Umuarama e região.</p>
        </div>
      </div>

      {/* FEATURED POST */}
      <div className="py-16 px-4 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">Destaque</p>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-3xl p-8 md:p-12 transition-all">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category] || "bg-white/10 text-white"}`}>
                  {featured.category}
                </span>
                <span className="text-gray-500 text-sm">{featured.date}</span>
                <span className="text-gray-500 text-sm">· {featured.readTime} de leitura</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 group-hover:text-yellow-400 transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm">
                Ler artigo completo →
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* ALL POSTS */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-8">Todos os artigos</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-2xl p-6 transition-all hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-white/10 text-white"}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-yellow-400 transition-colors leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <span className="text-yellow-400 text-xs font-semibold">Ler mais →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Precisa de táxi em <span className="text-yellow-400">Umuarama</span>?
          </h2>
          <p className="text-gray-400 mb-8">Chame agora pelo WhatsApp. Atendimento 24 horas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all">
              Chamar no WhatsApp
            </a>
            <a href={PHONE}
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all">
              (44) 99891-3040
            </a>
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
  );
}
