import os

path = os.path.expanduser('~/Documents/sites/giroto-taxi/app/page.tsx')

content = open(path).read()

# Adicionar PHONE2 após PHONE
old = "const PHONE = \"tel:+5544998913040\";"
new = "const PHONE = \"tel:+5544998913040\";\nconst PHONE2 = \"tel:+5544984160050\";"
content = content.replace(old, new)

# Atualizar stats do hero
old = '''                { value: "24/7", label: "Disponibilidade total" },
                { value: "100%", label: "Frota revisada" },
                { value: "Pix", label: "Pagamento facilitado" },
                { value: "PR", label: "Toda a região noroeste" },'''
new = '''                { value: "50 anos", label: "Servindo Umuarama" },
                { value: "8", label: "Motoristas experientes" },
                { value: "24h", label: "Disponivel sempre" },
                { value: "R$ 25", label: "Corrida urbana" },'''
content = content.replace(old, new)

# Atualizar badges hero
old = '''                {["✓ Viagens Rápidas", "✓ Aceitamos Pix", "✓ Atendimento 24h", "✓ Táxi Executivo"].map(t => ('''
new = '''                {["✓ 50 Anos em Umuarama", "✓ Aceitamos Pix", "✓ Atendimento 24h", "✓ Frota 2026"].map(t => ('''
content = content.replace(old, new)

# Atualizar subline hero
old = "Serviço de táxi em Umuarama com atendimento imediato, motoristas profissionais e conforto para qualquer destino."
new = "A Giroto Táxi atende Umuarama há mais de 50 anos. Equipe familiar de 8 motoristas, frota 2026 e atendimento imediato pelo WhatsApp ou telefone. Corridas urbanas a partir de R$ 25."
content = content.replace(old, new)

# Remover secao Como Funciona e adicionar secoes novas antes de Reviews
old_como = '''        {/* HOW IT WORKS */}
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
              <WAButton className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-base hover:bg-yellow-300 transition-colors">
                Chamar Táxi Agora
              </WAButton>
            </div>
          </div>
        </section>'''

new_secoes = '''        {/* 50 ANOS */}
        <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Nossa Historia</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Ha mais de 50 anos transportando Umuarama</h2>
            </div>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>A Giroto Taxi nasceu em Umuarama ha mais de cinco decadas, quando a familia Giroto decidiu dedicar sua vida ao transporte de passageiros na cidade. O que comecou com um unico carro e muito trabalho se transformou em uma das empresas de taxi mais tradicionais do noroeste do Parana — hoje com uma equipe familiar de 8 motoristas experientes e frota completamente renovada em 2026.</p>
              <p>Em mais de 50 anos, a Giroto Taxi ja transportou geracoes inteiras de familias umuaramenses. Levamos estudantes para a faculdade, pacientes ao Hospital Nossa Senhora Aparecida e ao Hospital Uopeccan, trabalhadores para a CVale, Capacol e as principais industrias da cidade. Estivemos presentes em momentos alegres — casamentos, formaturas, nascimentos — e nos momentos dificeis, quando a urgencia medica nao espera horario.</p>
              <p>Nossos motoristas conhecem cada rua de Umuarama. Cada atalho da Zona I para o Centro, cada saida do Jardim Panorama para a Rodovaria, cada caminho do Parque Taruma para a UPA. Esse conhecimento acumulado em decadas de trabalho e o que garante que seu taxi chegue rapido e pelo melhor caminho — todos os dias, a qualquer hora.</p>
              <p>Ser o taxista de Umuarama que as familias confiam nao e algo que se conquista da noite para o dia. E o resultado de mais de 50 anos de pontualidade, respeito e dedicacao. Quando voce chama a Giroto Taxi em Umuarama, esta chamando a empresa que sua familia provavelmente ja usou antes.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { n: "50+", l: "Anos em Umuarama" },
                { n: "8", l: "Motoristas da familia" },
                { n: "24h", l: "Disponivel sempre" },
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
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Do Centro a Zona IV, do Jardim Panorama ao Parque Taruma — se voce esta em Umuarama, a Giroto Taxi chega ate voce em minutos.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {["Centro de Umuarama","Zona I","Zona II","Zona III","Zona IV","Jardim Panorama","Jardim Aratimbo","Parque Taruma","Parque San Marino","Jardim Ipanema","Jardim Europa","Jardim Bandeirantes","Shopping Palladium","Rodovaria de Umuarama","Hospital Nossa Senhora Aparecida","Hospital Uopeccan","UPA de Umuarama","Aeroporto Orlando de Carvalho"].map(b => (
                <div key={b} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-yellow-400">📍</span> {b}
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed text-lg">Nossa frota de taxi em Umuarama cobre todos os bairros da cidade, 24 horas por dia. Atendemos corridas urbanas dentro de Umuarama a partir de R$ 25 pelo taximetro oficial, alem de viagens para cidades da regiao com preco fixo combinado pelo WhatsApp. Seja qual for o seu bairro em Umuarama, nosso motorista mais proximo chega em media em 5 a 10 minutos apos o contato.</p>
            </div>
          </div>
        </section>

        {/* DESTINOS */}
        <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Viagens Intermunicipais</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Destinos mais solicitados</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Preco fixo combinado antes da viagem. Sem taximetro, sem surpresas.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { city: "Maringa", price: "R$ 600", km: "130 km", time: "~1h30", slug: "taxi-umuarama-maringa" },
                { city: "Aeroporto Maringa", price: "R$ 550", km: "130 km", time: "~1h30", slug: "taxi-aeroporto-umuarama" },
                { city: "Londrina", price: "Consultar", km: "230 km", time: "~3h", slug: "taxi-umuarama-londrina" },
                { city: "Curitiba", price: "Consultar", km: "460 km", time: "~5h", slug: "taxi-umuarama-curitiba" },
                { city: "Cianorte", price: "Consultar", km: "60 km", time: "~1h", slug: "taxi-umuarama-cianorte" },
                { city: "Campo Mourao", price: "Consultar", km: "150 km", time: "~2h", slug: "taxi-umuarama-campo-mourao" },
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
        </section>'''

content = content.replace(old_como, new_secoes)

# Atualizar secao CTA para Telefone
old_cta = '''        {/* CTA */}
        <section id="contato" className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Precisa de táxi em <span className="text-yellow-400">Umuarama</span> agora?
            </h2>
            <p className="text-gray-400 text-lg mb-10">A Giroto Táxi está disponível 24 horas por dia, 7 dias por semana.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WAButton className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all">
                Chamar no WhatsApp
              </WAButton>
              <a href={PHONE}
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all">
                (44) 99891-3040
              </a>
            </div>
          </div>
        </section>'''

new_cta = '''        {/* TELEFONE */}
        <section id="contato" className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-3">Contato</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Telefone do Taxi em <span className="text-yellow-400">Umuarama</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">A Giroto Taxi atende pelo WhatsApp e por ligacao, 24 horas por dia. Dois numeros disponiveis para que voce nunca fique sem atendimento em Umuarama.</p>
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
        </section>'''

content = content.replace(old_cta, new_cta)

# Atualizar FAQs
old_faqs = '''const faqs = [
  { q: "O táxi em Umuarama funciona 24 horas?", a: "Sim! A Giroto Táxi opera 24 horas por dia, 7 dias por semana incluindo madrugada, domingos e feriados. Já atendemos partos de madrugada e emergências médicas às 3h da manhã. Ligue (44) 99891-3040 ou WhatsApp a qualquer hora." },
  { q: "Qual o valor de uma corrida de táxi em Umuarama?", a: "Corridas urbanas custam em média R$ 25 pelo taxímetro oficial. Umuarama para Maringá: R$ 600 preço fixo. Umuarama para Aeroporto de Maringá: R$ 550. Aceitamos Pix, cartão e dinheiro." },
  { q: "Fazem viagens de Umuarama para Maringá?", a: "Sim! Viagens diárias pela PR-323, 130 km em ~1h30. Preço fixo R$ 600. Atendemos também Cianorte, Goioerê, Cruzeiro do Oeste, Londrina, Campo Mourão e Curitiba." },
  { q: "Quais bairros de Umuarama vocês atendem?", a: "Atendemos toda Umuarama: Zona 1, Zona 2, Zona 3, Centro, Jardim Panorama, Jardim Aratimbó, Parque Tarumã, Parque San Marino, Shopping Palladium, Aeroporto Orlando de Carvalho e Rodoviária de Umuarama." },
  { q: "Fazem traslado para o Aeroporto de Maringá?", a: "Sim! Traslado diário Umuarama → Aeroporto Regional de Maringá (HMG), saindo de qualquer bairro. Preço fixo R$ 550. Monitoramos o voo em tempo real. Disponível 24 horas inclusive de madrugada." },
];'''

new_faqs = '''const faqs = [
  { q: "O táxi em Umuarama funciona 24 horas?", a: "Sim! A Giroto Táxi opera 24 horas por dia, 7 dias por semana incluindo madrugada, domingos e feriados. Já atendemos partos de madrugada e emergências médicas às 3h da manhã. Ligue (44) 99891-3040 ou WhatsApp a qualquer hora." },
  { q: "Qual o telefone da Giroto Táxi em Umuarama?", a: "Nossos telefones são (44) 99891-3040 e (44) 98416-0050. Você também pode chamar pelo WhatsApp — é a forma mais rápida. Uma mensagem já preenchida é enviada automaticamente ao clicar no botão verde." },
  { q: "Como chamar um táxi em Umuarama?", a: "A forma mais rápida é pelo WhatsApp (44) 99891-3040 — clique no botão verde e uma mensagem pronta é enviada. Também atendemos por ligação nos dois números. Em média o táxi chega em 5 a 10 minutos em qualquer bairro de Umuarama." },
  { q: "Qual o valor de uma corrida de táxi em Umuarama?", a: "Corridas urbanas custam em média R$ 25 pelo taxímetro oficial homologado pela prefeitura. Para viagens intermunicipais: Umuarama para Maringá R$ 600, Umuarama para Aeroporto de Maringá R$ 550. Preços fixos sem surpresas." },
  { q: "Quais bairros de Umuarama vocês atendem?", a: "Atendemos toda Umuarama: Centro, Zona I, Zona II, Zona III, Zona IV, Jardim Panorama, Jardim Aratimbó, Parque Tarumã, Parque San Marino, Jardim Ipanema, Jardim Europa, Shopping Palladium e todos os demais bairros. Rodoviária e hospitais também." },
  { q: "Vocês atendem empresas em Umuarama?", a: "Sim. Atendemos empresas como CVale, Capacol, Localiza e Umuarama Indústria com táxi corporativo, nota fiscal e faturamento mensal. Entre em contato pelo WhatsApp (44) 99891-3040 para condições especiais para empresas." },
  { q: "Fazem viagens de Umuarama para Maringá?", a: "Sim! Viagens diárias pela PR-323, 130 km em ~1h30. Preço fixo R$ 600. Atendemos também Cianorte, Goioerê, Cruzeiro do Oeste, Londrina, Campo Mourão e Curitiba. Preço combinado antes da viagem, sem taxímetro rodando." },
  { q: "Aceitam Pix ou cartão de crédito?", a: "Aceitamos Pix, cartão de crédito, cartão de débito e dinheiro em espécie. Para empresas aceitamos também cartão corporativo e faturamento mensal com nota fiscal." },
];'''

content = content.replace(old_faqs, new_faqs)

# Atualizar footer copyright
old_footer = "Táxi em Umuarama · Taxi de Umuarama · Serviço de Táxi Umuarama · Corridas em Umuarama Taxi"
new_footer = "Táxi em Umuarama · Taxista em Umuarama · Táxi 24h Umuarama · Telefone Táxi Umuarama"
content = content.replace(old_footer, new_footer)

# Adicionar PHONE2 no footer
old_footer_phone = '                <a href={PHONE} className="text-yellow-400 font-bold text-sm hover:text-yellow-300 transition-colors block mb-1">(44) 99891-3040</a>\n                <WAButton className="text-green-400 font-bold text-sm hover:text-green-300 transition-colors block">WhatsApp</WAButton>'
new_footer_phone = '                <a href={PHONE} className="text-yellow-400 font-bold text-sm hover:text-yellow-300 transition-colors block mb-1">(44) 99891-3040</a>\n                <a href={PHONE2} className="text-yellow-400 font-bold text-sm hover:text-yellow-300 transition-colors block mb-1">(44) 98416-0050</a>\n                <WAButton className="text-green-400 font-bold text-sm hover:text-green-300 transition-colors block">WhatsApp</WAButton>'
content = content.replace(old_footer_phone, new_footer_phone)

open(path, 'w').write(content)
print("OK - " + str(len(content.split("\n"))) + " linhas")
