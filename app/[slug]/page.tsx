import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pagesData } from "@/lib/pages-data";

const WA_LINK = "https://wa.me/5544998913040?text=Ol%C3%A1!%20Preciso%20de%20um%20t%C3%A1xi%20em%20Umuarama%20agora.";
const PHONE = "tel:+5544998913040";

export async function generateStaticParams() {
  return pagesData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pagesData.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: `${page.keyword}, táxi umuarama, giroto táxi, taxi umuarama`,
    alternates: { canonical: `https://girototaxiumuarama.com.br/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://girototaxiumuarama.com.br/${page.slug}`,
      siteName: "Giroto Táxi Umuarama",
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default async function SubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pagesData.find((p) => p.slug === slug);
  if (!page) notFound();

  const otherPages = pagesData.filter((p) => p.slug !== slug).slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": `https://girototaxiumuarama.com.br/${page.slug}#business`,
        name: "Giroto Táxi Umuarama",
        description: page.metaDescription,
        url: `https://girototaxiumuarama.com.br/${page.slug}`,
        telephone: "+55-44-99891-3040",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Umuarama",
          addressRegion: "PR",
          postalCode: "87501-000",
          addressCountry: "BR",
        },
        openingHoursSpecification: [{
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        }],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://girototaxiumuarama.com.br" },
          { "@type": "ListItem", position: 2, name: page.title, item: `https://girototaxiumuarama.com.br/${page.slug}` },
        ],
      },
    ],
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
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="hidden md:flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors">
              Chamar no WhatsApp
            </a>
          </div>
        </nav>

        {/* BREADCRUMB */}
        <div className="pt-28 md:pt-20 pb-2">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Início</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-300">{page.title}</span>
            </nav>
          </div>
        </div>

        {/* HERO */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-yellow-400 font-semibold mb-6 uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Disponível Agora em Umuarama
            </div>

            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight max-w-4xl">
              {page.h1}
            </h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-3xl">
              {page.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={WA_LINK} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.542 5.878L0 24l6.296-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.574 9.574 0 01-4.889-1.34l-.35-.208-3.64.877.908-3.524-.228-.362A9.556 9.556 0 012.4 12C2.4 6.698 6.698 2.4 12 2.4S21.6 6.698 21.6 12 17.302 21.6 12 21.6z" />
                </svg>
                Chamar no WhatsApp
              </a>
              <a href={PHONE}
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (44) 99891-3040
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.features.map((f) => (
                <div key={f.title} className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-2xl p-6 transition-all">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-base mb-2 text-yellow-400">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {page.faq.length > 0 && (
          <section className="py-16 border-t border-white/5 bg-white/[0.02]">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-8 text-center">
                Perguntas sobre {page.title}
              </h2>
              <div className="space-y-4">
                {page.faq.map((f) => (
                  <details key={f.q} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold hover:text-yellow-400 transition-colors list-none">
                      {f.q}
                      <span className="text-yellow-400 text-xl group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
                    </summary>
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Precisa de <span className="text-yellow-400">{page.keyword}</span>?
            </h2>
            <p className="text-gray-400 mb-8">Chame agora pelo WhatsApp ou ligue. Atendimento 24 horas em Umuarama.</p>
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

        {/* OTHER PAGES */}
        <section className="py-16 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 text-center">Outros Serviços de Táxi em Umuarama</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {otherPages.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`}
                  className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-xl p-3 text-sm text-gray-300 hover:text-yellow-400 transition-all text-center">
                  {p.title}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition-colors">
                ← Voltar para o início
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-8 bg-black/50">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>© 2026 Giroto Táxi Umuarama · {page.keyword} · Táxi em Umuarama 24h</p>
          </div>
        </footer>

        {/* MOBILE STICKY */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 p-3">
          <div className="flex items-center justify-center gap-1.5 mb-2 text-[11px] text-gray-400 font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
            </span>
            Táxi disponível agora em Umuarama
          </div>
          <div className="flex gap-2.5">
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-0.5 h-14 bg-green-500 rounded-2xl font-bold text-white text-sm active:scale-95 transition-transform">
              <span>WhatsApp</span>
              <span className="text-[10px] text-green-100 font-normal">Resposta em segundos</span>
            </a>
            <a href={PHONE}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 h-14 border border-white/20 rounded-2xl font-semibold text-white text-sm active:scale-95 transition-transform">
              <span>Ligar Agora</span>
              <span className="text-[10px] text-gray-400 font-normal">Atendimento 24h</span>
            </a>
          </div>
        </div>
        <div className="h-24 md:hidden" />
      </div>
    </>
  );
}
