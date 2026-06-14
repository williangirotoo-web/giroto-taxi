import type { Metadata } from "next";
import Link from "next/link";
import { pagesData } from "@/lib/pages-data";
import WAButton from "@/components/WAButton";

export const metadata: Metadata = {
  title: "Táxi em Umuarama 24h | Giroto Táxi — (44) 99891-3040",
  description: "Táxi em Umuarama há 50 anos. Corridas 24h a partir de R$ 25, táxi executivo, aeroporto de Maringá R$ 550, viagens para Maringá R$ 600. Frota 2026, 8 motoristas. Chame pelo WhatsApp!",
  alternates: { canonical: "https://www.girototaxiumuarama.com.br" },
  keywords: "táxi umuarama, taxi em umuarama, taxi de umuarama, serviço de táxi umuarama, corridas em umuarama taxi, táxi 24h umuarama, táxi executivo umuarama, chamar táxi umuarama, giroto táxi",
};

const WA_LINK = "https://wa.me/5544998913040?text=Ol%C3%A1!%20Preciso%20de%20um%20t%C3%A1xi%20em%20Umuarama%20agora.";
const PHONE = "tel:+5544998913040";
const PHONE2 = "tel:+5544984160050";

const services = [
  { icon: "🚖", title: "Táxi em Umuarama", desc: "Corridas rápidas 24h por Zona 1, Zona 2, Centro, Jardim Panorama e toda Umuarama. ~R$ 25 pelo taxímetro oficial.", slug: "corridas-taxi-umuarama" },
  { icon: "✈️", title: "Táxi para Aeroporto", desc: "Traslado Umuarama → Aeroporto de Maringá (HMG). Preço fixo R$ 550. Monitoramos o voo. Saída de qualquer bairro.", slug: "taxi-aeroporto-umuarama" },
  { icon: "🌆", title: "Viagens Intermunicipais", desc: "Viagem diária pela PR-323, 130 km, ~1h30. Preço fixo R$ 600. Também Cianorte, Goioerê, Londrina e Curitiba.", slug: "taxi-umuarama-maringa" },
  { icon: "💼", title: "Táxi Executivo", desc: "Frota 2026 para executivos e empresas. Atendemos CVale, Capacol e Umuarama Indústria. Nota fiscal disponível.", slug: "taxi-executivo-umuarama" },
  { icon: "👨‍👩‍👧‍👦", title: "Carro 7 Lugares", desc: "Espaço de sobra para toda a família ou grupo.", slug: "taxi-7-lugares-umuarama" },
  { icon: "🏥", title: "Táxi para Hospital", desc: "Transporte 24h para Hospital Nossa Senhora Aparecida, Uopeccan, UPA e clínicas de Umuarama.", slug: "taxi-hospital-umuarama" },
];

const reviews = [
  { name: "Ricardo Mendonça", text: "Precisei ir ao aeroporto de Maringá às 4h da manhã. O motorista chegou pontualmente no Jardim Panorama e me deixou no aeroporto com tempo de sobra. Serviço impecável!", stars: 5, label: "Zona 1 → Aeroporto Maringá" },
  { name: "Carla Beatriz", text: "Uso toda semana para ir da Zona 2 até a Capacol. Frota nova 2026, motoristas educados e sempre no horário. Recomendo para qualquer empresa em Umuarama!", stars: 5, label: "Cliente corporativo" },
  { name: "José Aparecido", text: "Minha esposa entrou em trabalho de parto de madrugada. Liguei para a Giroto Táxi e em minutos estávamos a caminho do hospital. Gratidão eterna!", stars: 5, label: "Emergência médica" },
];

const faqs = [
  { q: "O táxi em Umuarama funciona 24 horas?", a: "Sim! A Giroto Táxi opera 24 horas por dia, 7 dias por semana incluindo madrugada, domingos e feriados. Já atendemos partos de madrugada e emergências médicas às 3h da manhã. Ligue (44) 99891-3040 ou WhatsApp a qualquer hora." },
  { q: "Qual o telefone da Giroto Táxi em Umuarama?", a: "Nossos telefones são (44) 99891-3040 e (44) 98416-0050. Você também pode chamar pelo WhatsApp — é a forma mais rápida. Uma mensagem já preenchida é enviada automaticamente ao clicar no botão verde." },
  { q: "Como chamar um táxi em Umuarama?", a: "A forma mais rápida é pelo WhatsApp (44) 99891-3040 — clique no botão verde e uma mensagem pronta é enviada. Também atendemos por ligação nos dois números. Em média o táxi chega em 5 a 10 minutos em qualquer bairro de Umuarama." },
  { q: "Qual o valor de uma corrida de táxi em Umuarama?", a: "Corridas urbanas custam em média R$ 25 pelo taxímetro oficial homologado pela prefeitura. Para viagens intermunicipais: Umuarama para Maringá R$ 600, Umuarama para Aeroporto de Maringá R$ 550. Preços fixos sem surpresas." },
  { q: "Quais bairros de Umuarama vocês atendem?", a: "Atendemos toda Umuarama: Centro, Zona I, Zona II, Zona III, Zona IV, Jardim Panorama, Jardim Aratimbó, Parque Tarumã, Parque San Marino, Jardim Ipanema, Jardim Europa, Shopping Palladium e todos os demais bairros. Rodoviária e hospitais também." },
  { q: "Vocês atendem empresas em Umuarama?", a: "Sim. Atendemos empresas como CVale, Capacol, Localiza e Umuarama Indústria com táxi corporativo, nota fiscal e faturamento mensal. Entre em contato pelo WhatsApp (44) 99891-3040 para condições especiais para empresas." },
  { q: "Fazem viagens de Umuarama para Maringá?", a: "Sim! Viagens diárias pela PR-323, 130 km em ~1h30. Preço fixo R$ 600. Atendemos também Cianorte, Goioerê, Cruzeiro do Oeste, Londrina, Campo Mourão e Curitiba. Preço combinado antes da viagem, sem taxímetro rodando." },
  { q: "Aceitam Pix ou cartão de crédito?", a: "Aceitamos Pix, cartão de crédito, cartão de débito e dinheiro em espécie. Para empresas aceitamos também cartão corporativo e faturamento mensal com nota fiscal." },
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
      "@id": "https://www.girototaxiumuarama.com.br/#business",
      name: "Giroto Táxi Umuarama",
      description: "Giroto Táxi — serviço de táxi em Umuarama PR há mais de 50 anos. Equipe familiar de 8 motoristas, frota 2026, corridas a partir de R$ 25, traslado aeroporto Maringá R$ 550.",
      url: "https://www.girototaxiumuarama.com.br",
      telephone: "+55-44-99891-3040",
      address: { "@type": "PostalAddress", addressLocality: "Umuarama", addressRegion: "PR", postalCode: "87501-000", addressCountry: "BR" },
      geo: { "@type": "GeoCoordinates", latitude: -23.7659, longitude: -53.3208 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
      priceRange: "R$ 25 - R$ 600",
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

        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black text-xs font-bold text-center py-1.5 flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
          </span>
          Disponível Agora • Atendimento Imediato 24h
        </div>

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
            <WAButton className="flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors">
              Chamar no WhatsApp
            </WAButton>
          </div>
        </nav>

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
                A Giroto Táxi atende Umuarama há mais de 50 anos. Equipe familiar de 8 motoristas, frota 2026 e atendimento imediato pelo WhatsApp ou telefone. Corridas urbanas a partir de R$ 25.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <WAButton className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                  Chamar no WhatsApp
                </WAButton>
                <a href={PHONE}
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all">
                  (44) 99891-3040
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                {["✓ 50 Anos em Umuarama", "✓ Aceitamos Pix", "✓ Atendimento 24h", "✓ Frota 2026"].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { value: "50 anos", label: "Servindo Umuarama" },
                { value: "8", label: "Motoristas experientes" },
                { value: "24h", label: "Disponivel sempre" },
                { value: "R$ 25", label: "Corrida urbana" },
              ].map(s => (
                <div key={s.value} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors">
                  <p className="text-3xl font-extrabold text-yellow-400 mb-1">{s.value}</p>
                  <p className="text-sm text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* 50 ANOS */}
        <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Nossa História</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Há mais de 50 anos transportando Umuarama</h2>
            </div>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>A Giroto Táxi nasceu em Umuarama há mais de cinco décadas, quando a família Giroto decidiu dedicar sua vida ao transporte de passageiros na cidade. O que começou com um único carro e muito trabalho se transformou em uma das empresas de táxi mais tradicionais do noroeste do Paraná — hoje com uma equipe familiar de 8 motoristas experientes e frota completamente renovada em 2026.</p>
              <p>Em mais de 50 anos, a Giroto Táxi já transportou gerações inteiras de famílias umuaramenses. Levamos estudantes para a faculdade, pacientes ao Hospital Nossa Senhora Aparecida e ao Hospital Uopeccan, trabalhadores para a CVale, Capacol e as principais indústrias da cidade. Estivemos presentes em momentos alegres — casamentos, formaturas, nascimentos — e nos momentos difíceis, quando a urgência médica não espera horário.</p>
              <p>Nossos motoristas conhecem cada rua de Umuarama. Cada atalho da Zona I para o Centro, cada saída do Jardim Panorama para a Rodoviária, cada caminho do Parque Tarumã para a UPA. Esse conhecimento acumulado em décadas de trabalho é o que garante que seu táxi chegue rápido e pelo melhor caminho — todos os dias, a qualquer hora.</p>
              <p>Ser o taxista de Umuarama que as famílias confiam não é algo que se conquista da noite para o dia. É o resultado de mais de 50 anos de pontualidade, respeito e dedicação. Quando você chama a Giroto Táxi em Umuarama, está chamando a empresa que sua família provavelmente já usou antes.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { n: "50+", l: "Anos em Umuarama" },
                { n: "8", l: "Motoristas da família" },
                { n: "24h", l: "Disponível sempre" },
                { n: "2026", l: "Frota renovada" },
              ].map(s => (
                <div key={s.n} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <p className="text-2xl font-extrabold text-yellow-400 mb-1">{s.n}</p>
                  <p className="text-xs text-gray-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS ATENDIDAS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Cobertura Total</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Atendemos toda Umuarama</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Do Centro à Zona IV, do Jardim Panorama ao Parque Tarumã — se você está em Umuarama, a Giroto Táxi chega até você em minutos.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {["Centro de Umuarama","Zona I","Zona II","Zona III","Zona IV","Jardim Panorama","Jardim Aratimbó","Parque Tarumã","Parque San Marino","Jardim Ipanema","Jardim Europa","Jardim Bandeirantes","Shopping Palladium","Rodoviária de Umuarama","Hospital Nossa Senhora Aparecida","Hospital Uopeccan","UPA de Umuarama","Aeroporto Orlando de Carvalho"].map(b => (
                <div key={b} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-yellow-400">📍</span> {b}
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed text-lg">Nossa frota de táxi em Umuarama cobre todos os bairros da cidade, 24 horas por dia. Atendemos corridas urbanas dentro de Umuarama a partir de R$ 25 pelo taxímetro oficial, além de viagens para cidades da região com preço fixo combinado pelo WhatsApp. Seja qual for o seu bairro em Umuarama, nosso motorista mais próximo chega em média em 5 a 10 minutos após o contato.</p>
            </div>
          </div>
        </section>

        {/* DESTINOS */}
        <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Viagens Intermunicipais</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Destinos mais solicitados</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Preço fixo combinado antes da viagem. Sem taxímetro, sem surpresas.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { city: "Maringá", price: "R$ 600", km: "130 km", time: "~1h30", slug: "taxi-umuarama-maringa" },
                { city: "Aeroporto Maringá", price: "R$ 550", km: "130 km", time: "~1h30", slug: "taxi-aeroporto-umuarama" },
                { city: "Londrina", price: "Consultar", km: "230 km", time: "~3h", slug: "taxi-umuarama-londrina" },
                { city: "Curitiba", price: "Consultar", km: "460 km", time: "~5h", slug: "taxi-umuarama-curitiba" },
                { city: "Cianorte", price: "Consultar", km: "60 km", time: "~1h", slug: "taxi-umuarama-cianorte" },
                { city: "Campo Mourão", price: "Consultar", km: "150 km", time: "~2h", slug: "taxi-umuarama-campo-mourao" },
              ].map(d => (
                <Link key={d.city} href={"/" + d.slug} className="bg-white/5 border border-white/10 hover:border-yellow-400/40 rounded-2xl p-6 transition-all group">
                  <p className="font-bold text-lg group-hover:text-yellow-400 transition-colors mb-1">{d.city}</p>
                  <p className="text-yellow-400 font-extrabold text-xl mb-2">{d.price}</p>
                  <p className="text-gray-500 text-xs">{d.km} · {d.time}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">Valores aproximados. Confirme pelo WhatsApp antes de agendar.</p>
          </div>
        </section>

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

        <section id="contato" className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Contato</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Telefone do Táxi em <span className="text-yellow-400">Umuarama</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">A Giroto Táxi atende pelo WhatsApp e por ligação, 24 horas por dia. Dois números disponíveis para que você nunca fique sem atendimento em Umuarama.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <a href={PHONE} className="flex flex-col items-center justify-center gap-2 bg-white/5 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-6 rounded-2xl text-xl transition-all">
                <span className="text-yellow-400 text-2xl">📞</span>
                (44) 99891-3040
                <span className="text-xs text-gray-400 font-normal">Ligar agora</span>
              </a>
              <a href={PHONE2} className="flex flex-col items-center justify-center gap-2 bg-white/5 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-bold px-8 py-6 rounded-2xl text-xl transition-all">
                <span className="text-yellow-400 text-2xl">📞</span>
                (44) 98416-0050
                <span className="text-xs text-gray-400 font-normal">Ligar agora</span>
              </a>
            </div>
            <WAButton className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all">
              Chamar pelo WhatsApp agora
            </WAButton>
            <p className="text-gray-500 text-sm mt-4">Resposta em segundos · Atendimento 24 horas · Todos os bairros de Umuarama</p>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-16 pb-8 bg-black/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
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
                <a href={PHONE2} className="text-yellow-400 font-bold text-sm hover:text-yellow-300 transition-colors block mb-1">(44) 98416-0050</a>
                <WAButton className="text-green-400 font-bold text-sm hover:text-green-300 transition-colors block">WhatsApp</WAButton>
              </div>
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
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
              <p>© 2026 Giroto Táxi Umuarama. Todos os direitos reservados.</p>
              <p>Táxi em Umuarama · Taxista em Umuarama · Táxi 24h Umuarama · Telefone Táxi Umuarama</p>
            </div>
          </div>
        </footer>

        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 p-3">
          <div className="flex items-center justify-center gap-1.5 mb-2 text-[11px] text-gray-400 font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
            </span>
            Táxi disponível agora em Umuarama
          </div>
          <div className="flex gap-2.5">
            <WAButton className="flex-1 flex flex-col items-center justify-center gap-0.5 h-14 bg-green-500 rounded-2xl font-bold text-white text-sm active:scale-95 transition-transform">
              <span>WhatsApp</span>
              <span className="text-[10px] text-green-100 font-normal">Resposta em segundos</span>
            </WAButton>
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
