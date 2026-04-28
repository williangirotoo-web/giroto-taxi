import { client } from '@/lib/sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const WA_LINK = "https://wa.me/5544998913040?text=Ol%C3%A1!%20Preciso%20de%20um%20t%C3%A1xi%20em%20Umuarama%20agora."
const PHONE = "tel:+5544998913040"

async function getPagina(slug: string) {
  return client.fetch(`*[_type == "pagina" && slug.current == $slug][0]`, { slug })
}

async function getPaginas() {
  return client.fetch(`*[_type == "pagina"] | order(_createdAt asc) { slug }`)
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pagina = await getPagina(slug)
  if (!pagina) return {}
  return {
    title: pagina.metaTitulo || pagina.titulo,
    description: pagina.metaDescricao,
    alternates: { canonical: `https://girototaxiumuarama.com.br/servicos/${slug}` },
    keywords: `${pagina.palavraChave}, táxi umuarama, giroto táxi`,
  }
}

export default async function ServicosPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pagina = await getPagina(slug)
  if (!pagina) notFound()

  const todasPaginas = await getPaginas()

  return (
    <div className="bg-[#080808] text-white min-h-screen font-sans antialiased">

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
            <Link href="/cms" className="hover:text-yellow-400 transition-colors">Serviços</Link>
            <Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
            <Link href="/#contato" className="hover:text-yellow-400 transition-colors">Contato</Link>
          </div>
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors">
            Chamar no WhatsApp
          </a>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div className="pt-28 md:pt-20 pb-4 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Início</Link>
            <span className="mx-2">›</span>
            <Link href="/cms" className="hover:text-yellow-400 transition-colors">Serviços</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-300">{pagina.titulo}</span>
          </nav>
        </div>
      </div>

      {/* CONTEUDO */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {pagina.palavraChave && (
          <span className="inline-block bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {pagina.palavraChave}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{pagina.titulo}</h1>
        {pagina.metaDescricao && (
          <p className="text-gray-400 text-lg leading-relaxed mb-12">{pagina.metaDescricao}</p>
        )}

        <div className="space-y-6">
          {pagina.titulos?.map((titulo: string, i: number) => (
            <div key={i} className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-2xl p-8 transition-all group">
              <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors">
                {titulo}
              </h2>
              {pagina.descricoes?.[i] && (
                <p className="text-gray-300 leading-relaxed text-lg">{pagina.descricoes[i]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a href={WA_LINK} target="_blank" rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all">
            Chamar no WhatsApp
          </a>
          <a href={PHONE}
            className="flex-1 flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all">
            (44) 99891-3040
          </a>
        </div>
      </div>

      {/* OUTROS SERVICOS */}
      <div className="max-w-4xl mx-auto px-4 py-12 border-t border-white/5">
        <h2 className="text-xl font-bold mb-6 text-center">Outros Serviços de Táxi em Umuarama</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {todasPaginas.filter((p: any) => p.slug.current !== slug).slice(0, 12).map((p: any) => (
            <Link key={p.slug.current} href={`/servicos/${p.slug.current}`}
              className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-xl p-3 text-sm text-gray-300 hover:text-yellow-400 transition-all text-center">
              {p.slug.current.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>
      </div>

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
      <div className="h-20 md:hidden" />
    </div>
  )
}
