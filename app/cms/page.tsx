import { client } from '@/lib/sanity'
import Link from 'next/link'

const WA_LINK = "https://wa.me/5544998913040?text=Ol%C3%A1!%20Preciso%20de%20um%20t%C3%A1xi%20em%20Umuarama%20agora."
const PHONE = "tel:+5544998913040"

async function getPaginas() {
  return client.fetch(`*[_type == "pagina"] | order(_createdAt asc)`)
}

export default async function CMSPage() {
  const paginas = await getPaginas()

  return (
    <div className="bg-[#080808] text-white min-h-screen font-sans">
      <nav className="bg-black/80 border-b border-white/5 px-4 h-16 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-yellow-400 text-2xl">🚖</span>
          <div>
            <p className="font-bold text-white leading-none">Giroto Táxi</p>
            <p className="text-[10px] text-yellow-400 uppercase tracking-widest">Umuarama 24h</p>
          </div>
        </Link>
        <a href={WA_LINK} target="_blank" rel="noreferrer"
          className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors">
          Chamar no WhatsApp
        </a>
      </nav>

      {paginas.map((pagina: any) => (
        <div key={pagina._id} className="max-w-4xl mx-auto px-4 py-16 border-b border-white/5">
          <p className="text-yellow-400 text-xs uppercase tracking-wider mb-2">{pagina.palavraChave}</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-8">{pagina.titulo}</h1>

          <div className="space-y-12">
            {pagina.titulos?.map((titulo: string, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-yellow-400/30 transition-all">
                <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">{titulo}</h2>
                {pagina.descricoes?.[i] && (
                  <p className="text-gray-300 leading-relaxed text-lg">{pagina.descricoes[i]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-12">
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
      ))}
    </div>
  )
}
