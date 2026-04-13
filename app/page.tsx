import type { Metadata } from "next";
import Link from "next/link";
import { pagesData } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: "Táxi em Umuarama 24h | Giroto Táxi — (44) 99891-3040",
  description: "Táxi em Umuarama 24 horas por dia, 7 dias por semana. Serviço de táxi em Umuarama com corridas rápidas, táxi executivo, viagens intermunicipais e traslado para aeroporto. Chame agora pelo WhatsApp!",
  keywords: "táxi umuarama, taxi em umuarama, taxi de umuarama, serviço de táxi umuarama, corridas em umuarama taxi, táxi 24h umuarama, táxi executivo umuarama, chamar táxi umuarama, giroto táxi",
};

const WA_LINK = "https://wa.me/5544998913040?text=Ol%C3%A1!%20Preciso%20de%20um%20t%C3%A1xi%20em%20Umuarama%20agora.";
const PHONE = "tel:+5544998913040";

const services = [
  { icon: "🚖", title: "Táxi em Umuarama", desc: "Corridas rápidas por todos os bairros de Umuarama, 24 horas por dia.", slug: "corridas-taxi-umuarama" },
  { icon: "✈️", title: "Táxi para Aeroporto", desc: "Traslado pontual para o aeroporto de Maringá e região.", slug: "taxi-aeroporto-umuarama" },
  { icon: "🌆", title: "Viagens Intermunicipais", desc: "Táxi de Umuarama para Maringá, Cianorte, Goioerê e toda a região.", slug: "taxi-umuarama-maringa" },
  { icon: "💼", title: "Táxi Executivo", desc: "Veículos de alto padrão para reuniões e eventos corporativos.", slug: "taxi-executivo-umuarama" },
  { icon: "👨‍👩‍👧‍👦", title: "Carro 7 Lugares", desc: "Espaço de sobra para toda a família ou grupo.", slug: "taxi-7-lugares-umuarama" },
  { icon: "🏥", title: "Táxi para Hospital", desc: "Transporte rápido e seguro para clínicas e hospitais 24h.", slug: "taxi-hospital-umuarama" },
];

const reviews = [
  { name: "Fernanda Oliveira", text: "Chegou em poucos minutos, excelente atendimento! Motorista super educado e carro impecável. O melhor táxi de Umuarama!", stars: 5, label: "Umuarama" },
  { name: "Carlos Henrique", text: "Motorista educado e carro muito confortável. Paguei via Pix na hora, sem complicação. Recomendo para qualquer corrida.", stars: 5, label: "Cliente recorrente" },
  { name: "Ana Paula Martins", text: "Melhor táxi de Umuarama! Fiz uma viagem até Maringá e foi perfeita — pontual, carro limpo e preço justo.", stars: 5, label: "Umuarama → Maringá" },
];

const faqs = [
  { q: "O táxi em Umuarama funciona 24 horas?", a: "Sim! A Giroto Táxi opera 24 horas por dia, 7 dias por semana, incluindo domingos e feriados. Basta chamar pelo WhatsApp ou ligar para (44) 99891-3040." },
  { q: "Aceita Pix ou cartão de crédito?", a: "Sim, aceitamos Pix, cartão de crédito, cartão de débito e dinheiro em espécie." },
  { q: "Fazem viagens de Umuarama para Maringá?", a: "Sim! Realizamos viagens intermunicipais para Maringá, Cianorte, Goioerê, Cruzeiro do Oeste e toda a região noroeste do Paraná." },
  { q: "Como chamar um táxi rápido em Umuarama?", a: "A forma mais rápida é clicar no botão do WhatsApp — uma mensagem pronta já estará preenchida." },
  { q: "Fazem traslado para o aeroporto de Maringá?", a: "Com certeza! Fazemos traslados pontuais para o aeroporto de Maringá. Informe o horário do voo e garantimos que chegue com tempo de sobra." },
];

const footerGroups = [
  {
    title: "Serviços Especiais",
    links: pagesData.filter(p => ["taxi-executivo-umuarama","taxi-7-lugares-umuarama","taxi-cadeirinha-umuarama","taxi-pet-umuarama","taxi-noturno-umuarama","taxi-agendado-umuarama","taxi-24h-umuarama","taxi-nota-fiscal-umuarama"].includes(p.slug)),
  },
  {
    title: "Destinos e Viagens",
    links: pagesData.filter(p => ["taxi-umuarama-maringa","taxi-umuarama-cianorte","taxi-umuarama-goioere","taxi-umuarama-cruzeiro-do-oeste","taxi-umuarama-londrina","taxi-umuarama-campo-mourao","taxi-umuarama-curitiba","taxi-aeroporto-umuarama","taxi-rodoviaria-umuarama"].includes(p.slug)),
  },
  {
    title: "Por Necessidade",
    links: pagesData.filter(p => ["taxi-hospital-umuarama","taxi-idosos-umuarama","taxi-farmacia-umuarama","taxi-supermercado-umuarama","taxi-casamento-umuarama","taxi-formatura-umuarama","taxi-show-evento-umuarama","taxi-empresas-umuarama"].includes(p.slug)),
  },
  {
    title: "Por Região",
    links: pagesData.filter(p => ["taxi-centro-umuarama","taxi-zona1-umuarama","taxi-zona2-umuarama","taxi-zona3-umuarama","chamar-taxi-umuarama","corridas-taxi-umuarama"].includes(p.slug)),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://girototaxiumuarama.com.br/#business",
      name: "Giroto Táxi Umuarama",
      description: "Serviço de táxi 24 horas em Umuarama, Paraná.",
      url: "https://girototaxiumuarama.com.br",
      telephone: "+55-44-99891-3040",
      address: { "@type": "PostalAddress", addressLocality: "Umuarama", addressRegion: "PR", postalCode: "87501-000", addressCountry: "BR" },
      geo: { "@type": "GeoCoordinates", latitude: -23.7659, longitude: -53.3208 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
      priceRange: "$$",
      paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, Pix",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-[#080808] text-white font-sans antialiased">

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
              <Link href="#servicos" className="hover:text-yellow-400 transition-colors">Serviços</Link>
              <Link href="#faq" className="hover:text-yellow-400 transition-colors">Dúvidas</Link>
              <Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
              <Link href="#contato" className="hover:text-yellow-400 transition-colors">Contato</Link>
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors">
              Chamar no WhatsApp
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 md:pb-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-yellow-400 font-semibold mb-6 uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Motorista Disponível Agora
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Táxi em <span className="text-yellow-400">Umuarama</span> 24h — Rápido e Seguro
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Serviço de táxi em Umuarama com atendimento imediato, motoristas profissionais e conforto para qualquer destino.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href={WA_LINK} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                  Chamar no WhatsApp
                </a>
                <a href={PHONE}
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all">
                  (44) 99891-3040
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                {["✓ Viagens Rápidas", "✓ Aceitamos Pix", "✓ Atendimento 24h", "✓ Táxi Executivo"].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { value: "24/7", label: "Disponibilidade total" },
                { value: "100%", label: "Frota revisada" },
                { value: "Pix", label: "Pagamento facilitado" },
                { value: "PR", label: "Toda a região noroeste" },
              ].map(s => (
                <div key={s.value} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors">
                  <p className="text-3xl font-extrabold text-yellow-400 mb-1">{s.value}</p>
                  <p className="text-sm text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="servicos" className="py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Nossos Serviços</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Táxi em Umuarama para toda necessidade</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Do táxi urbano ao táxi executivo em Umuarama — temos o veículo certo para o seu destino.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(s => (
                <Link key={s.title} href={`/${s.slug}`}
                  className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-2xl p-6 transition-all hover:-translate-y-1 group">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  <p className="text-yellow-400 text-xs mt-3 font-semibold">Saiba mais →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Como Funciona</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Chamar táxi em Umuarama nunca foi tão fácil</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Clique no WhatsApp", desc: "Toque no botão verde do WhatsApp. Uma mensagem pronta já estará preenchida — é só enviar." },
                { num: "02", title: "Envie sua localização", desc: "Compartilhe onde você está. Nossa central identifica o táxi mais próximo de você em Umuarama." },
                { num: "03", title: "Táxi na sua porta", desc: "Em minutos um motorista profissional estará a caminho. Sem espera, sem complicação." },
              ].map(s => (
                <div key={s.num} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-yellow-400 text-black font-extrabold text-lg flex items-center justify-center mx-auto mb-5">{s.num}</div>
                  <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href={WA_LINK} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-base hover:bg-yellow-300 transition-colors">
                Chamar Táxi Agora
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Avaliações</p>
              <h2 className="text-3xl md:text-5xl font-extrabold">O que nossos clientes dizem</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map(r => (
                <div key={r.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/20 transition-all">
                  <div className="flex gap-0.5 mb-4">{Array.from({ length: r.stars }).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-9 h-9 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold text-sm">{r.name[0]}</div>
                    <div>
                      <p className="font-semibold text-sm">{r.name}</p>
                      <p className="text-xs text-gray-500">{r.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Dúvidas Frequentes</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">Perguntas sobre Táxi em Umuarama</h2>
            </div>
            <div className="space-y-4">
              {faqs.map(f => (
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

        {/* CTA */}
        <section id="contato" className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Precisa de táxi em <span className="text-yellow-400">Umuarama</span> agora?
            </h2>
            <p className="text-gray-400 text-lg mb-10">A Giroto Táxi está disponível 24 horas por dia, 7 dias por semana.</p>
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

        {/* FOOTER RICO */}
        <footer className="border-t border-white/10 pt-16 pb-8 bg-black/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
              {/* BRAND */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400 text-2xl">🚖</span>
                  <div>
                    <p className="font-bold text-white leading-none">Giroto Táxi</p>
                    <p className="text-[10px] text-yellow-400 uppercase tracking-widest">Umuarama 24h</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Serviço de táxi 24 horas em Umuarama. Transporte seguro, rápido e confortável.</p>
                <a href={PHONE} className="text-yellow-400 font-bold text-sm hover:text-yellow-300 transition-colors block mb-1">(44) 99891-3040</a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="text-green-400 font-bold text-sm hover:text-green-300 transition-colors block">WhatsApp</a>
              </div>

              {/* LINK GROUPS */}
              {footerGroups.map(group => (
                <div key={group.title}>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-4">{group.title}</h4>
                  <ul className="space-y-2">
                    {group.links.map(link => (
                      <li key={link.slug}>
                        <Link href={`/${link.slug}`} className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
              <p>© 2026 Giroto Táxi Umuarama. Todos os direitos reservados.</p>
              <p>Táxi em Umuarama · Taxi de Umuarama · Serviço de Táxi Umuarama · Corridas em Umuarama Taxi</p>
            </div>
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
