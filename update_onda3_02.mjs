import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '6wak8duk',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const paginas = [
  {
    slug: 'taxi-de-umuarama-para-cianorte',
    titulos: [
      'Táxi de Umuarama para Cianorte',
      'Distância e Tempo de Viagem',
      'Motivos Comuns da Viagem',
      'Preço e Forma de Pagamento',
      'Viagens de Ida e Volta',
      'Táxi Executivo para Cianorte',
      'Grupos e Famílias',
      'Como Agendar a Viagem',
    ],
    descricoes: [
      'A Giroto Táxi realiza viagens de Umuarama para Cianorte, cidade vizinha na região noroeste do Paraná. É uma das viagens regionais mais curtas que realizamos, com tempo de viagem em torno de 1 hora, dependendo do ponto de saída em Umuarama — Centro, Zona I, Zona II, Zona III ou Zona IV.',
      'A distância entre Umuarama e Cianorte é de aproximadamente 60 km. Por ser um trajeto relativamente curto comparado a Maringá ou Curitiba, é comum que moradores de Umuarama façam essa viagem para resolver assuntos pessoais, profissionais ou de saúde em Cianorte e retornem no mesmo dia.',
      'Os motivos mais comuns para a viagem Umuarama — Cianorte incluem consultas médicas em clínicas específicas, visitas a familiares, assuntos comerciais e participação em eventos regionais. A Giroto Táxi atende esses deslocamentos com a mesma pontualidade de qualquer outra viagem.',
      'O valor da viagem para Cianorte é combinado antes da partida, considerando a distância e o tempo estimado. Aceitamos Pix, cartão de crédito, cartão de débito e dinheiro. Para empresas, também é possível solicitar nota fiscal para reembolso ou faturamento mensal.',
      'Para quem precisa ir a Cianorte e voltar no mesmo dia, o motorista pode aguardar durante o tempo necessário para a resolução do compromisso. Informe ao agendar pelo WhatsApp (44) 99891-3040 o tempo estimado de espera para que possamos combinar o valor total da viagem.',
      'Para viagens de negócios a Cianorte, oferecemos também a opção de táxi executivo, com veículos 2026 climatizados e confortáveis. Empresas de Umuarama que têm relações comerciais com Cianorte podem utilizar esse serviço com nota fiscal e, se necessário, faturamento mensal.',
      'Famílias ou grupos que vão a Cianorte para eventos, compras ou visitas podem utilizar o veículo de 7 lugares da Giroto Táxi, com espaço suficiente para todos os passageiros e bagagem, em uma única corrida com preço combinado.',
      'Para agendar a viagem de Umuarama para Cianorte, mande mensagem pelo WhatsApp (44) 99891-3040 informando o bairro de saída em Umuarama, o destino em Cianorte e se será ida e volta no mesmo dia. Também atendemos pelo telefone (44) 98416-0050.',
    ],
    faqs: [
      { pergunta: 'Quanto tempo leva de Umuarama a Cianorte?', resposta: 'Aproximadamente 1 hora, dependendo do ponto de saída em Umuarama e das condições da estrada.' },
      { pergunta: 'Qual a distância entre Umuarama e Cianorte?', resposta: 'Cerca de 60 km, sendo uma das viagens regionais mais curtas realizadas pela Giroto Táxi.' },
      { pergunta: 'Posso fazer ida e volta no mesmo dia para Cianorte?', resposta: 'Sim. O motorista pode aguardar enquanto você resolve seus compromissos em Cianorte. Informe o tempo estimado ao agendar para combinarmos o valor total.' },
      { pergunta: 'Vocês emitem nota fiscal para viagens a Cianorte?', resposta: 'Sim, emitimos nota fiscal para viagens a trabalho, e também oferecemos faturamento mensal para empresas com viagens recorrentes.' },
      { pergunta: 'Como faço para agendar a viagem para Cianorte?', resposta: 'Envie mensagem pelo WhatsApp (44) 99891-3040 informando o bairro de saída em Umuarama, o destino em Cianorte e se será ida e volta no mesmo dia.' },
    ],
    linksRelacionados: ['taxi-de-umuarama-para-maringa', 'taxi-executivo-em-umuarama', 'taxi-agendado-em-umuarama'],
    palavraChave: 'táxi umuarama cianorte',
  },
  {
    slug: 'taxi-de-umuarama-para-londrina',
    titulos: [
      'Táxi de Umuarama para Londrina',
      'Distância e Duração da Viagem',
      'Viagens a Trabalho e Negócios',
      'Consultas Médicas em Londrina',
      'Preço Combinado Antes da Viagem',
      'Táxi Executivo para Londrina',
      'Bagagem para Viagens Longas',
      'Como Agendar com Antecedência',
    ],
    descricoes: [
      'A Giroto Táxi realiza viagens de Umuarama para Londrina, uma das principais cidades da região norte do Paraná. Por ser uma viagem mais longa que o trajeto até Maringá, recomendamos sempre agendar com antecedência pelo WhatsApp (44) 99891-3040, informando o bairro de saída em Umuarama e o destino em Londrina.',
      'A distância entre Umuarama e Londrina é de aproximadamente 230 km, com tempo médio de viagem em torno de 3 horas, dependendo do trajeto escolhido e das condições da estrada. É uma viagem que exige planejamento, e por isso o agendamento prévio é especialmente recomendado.',
      'Viagens a trabalho são um dos motivos mais comuns para o trajeto Umuarama — Londrina. Profissionais que têm reuniões, eventos corporativos ou compromissos de negócios em Londrina contam com a Giroto Táxi para um transporte confortável e pontual, com possibilidade de nota fiscal para reembolso.',
      'Londrina tem hospitais e clínicas de referência que atendem pacientes de toda a região, incluindo Umuarama. Para quem precisa fazer consultas, exames ou tratamentos em Londrina, a Giroto Táxi oferece transporte com motoristas atenciosos, podendo inclusive aguardar durante a consulta para o retorno no mesmo dia.',
      'O valor da viagem para Londrina é combinado antes da partida, considerando a distância de aproximadamente 230 km. Não trabalhamos com taxímetro nesse trajeto — o preço é fechado, definido conforme a rota e se haverá espera em Londrina para retorno no mesmo dia.',
      'Para viagens de negócios, o táxi executivo da Giroto Táxi oferece veículos 2026 climatizados, ideais para o tempo de viagem mais longo até Londrina. Emitimos nota fiscal e trabalhamos com faturamento mensal para empresas de Umuarama com viagens recorrentes a Londrina.',
      'Viagens mais longas, como até Londrina, costumam envolver mais bagagem — seja para estadias de mais de um dia, seja para levar materiais de trabalho. Nossos veículos têm porta-malas adequado, e para grupos com mais volume, oferecemos o veículo de 7 lugares.',
      'Para agendar a viagem de Umuarama para Londrina, mande mensagem pelo WhatsApp (44) 99891-3040 com pelo menos 24 horas de antecedência, informando o bairro de saída, o destino em Londrina, a data e se haverá retorno no mesmo dia ou pernoite.',
    ],
    faqs: [
      { pergunta: 'Quanto tempo leva de Umuarama a Londrina?', resposta: 'Aproximadamente 3 horas, considerando os cerca de 230 km de distância e as condições da estrada.' },
      { pergunta: 'Preciso agendar com antecedência para Londrina?', resposta: 'Sim, recomendamos pelo menos 24 horas de antecedência, já que é uma viagem mais longa que exige planejamento da escala de motoristas.' },
      { pergunta: 'Vocês fazem viagens para consultas médicas em Londrina?', resposta: 'Sim. O motorista pode aguardar durante a consulta ou exame para o retorno no mesmo dia, sendo o valor da espera combinado junto com o valor da viagem.' },
      { pergunta: 'O preço para Londrina é fixo ou no taxímetro?', resposta: 'O preço é combinado antes da viagem, considerando a distância e se haverá espera em Londrina. Não usamos taxímetro nesse trajeto.' },
      { pergunta: 'Vocês emitem nota fiscal para viagens a Londrina?', resposta: 'Sim, emitimos nota fiscal para viagens a trabalho e oferecemos faturamento mensal para empresas com viagens recorrentes a Londrina.' },
    ],
    linksRelacionados: ['taxi-executivo-em-umuarama', 'taxi-agendado-em-umuarama', 'taxi-com-nota-fiscal-em-umuarama'],
    palavraChave: 'táxi umuarama londrina',
  },
  {
    slug: 'taxi-de-umuarama-para-curitiba',
    titulos: [
      'Táxi de Umuarama para Curitiba',
      'Distância até a Capital do Paraná',
      'Viagens a Trabalho para Curitiba',
      'Consultas e Tratamentos Médicos',
      'Conexões com o Aeroporto de Curitiba',
      'Preço e Planejamento da Viagem',
      'Táxi Executivo para Longas Distâncias',
      'Como Planejar sua Viagem',
    ],
    descricoes: [
      'A Giroto Táxi realiza viagens de Umuarama para Curitiba, capital do Paraná, para quem precisa de transporte direto sem depender de ônibus ou outras conexões. É a viagem regional mais longa que realizamos, exigindo planejamento e agendamento com boa antecedência pelo WhatsApp (44) 99891-3040.',
      'A distância entre Umuarama e Curitiba é de aproximadamente 460 km, com tempo médio de viagem em torno de 5 horas, dependendo do trajeto e das condições da estrada. Por ser uma viagem longa, o motorista pode fazer paradas para descanso conforme necessário durante o percurso.',
      'Viagens a trabalho para Curitiba são comuns entre empresas de Umuarama que têm sede, filiais ou parceiros comerciais na capital. A Giroto Táxi oferece transporte direto, com nota fiscal para reembolso e a possibilidade de faturamento mensal para empresas com viagens recorrentes.',
      'Curitiba concentra hospitais e clínicas de referência estadual e nacional. Para pacientes de Umuarama que precisam de tratamentos especializados na capital, a Giroto Táxi oferece transporte direto, evitando a necessidade de múltiplas conexões de ônibus, especialmente importante para quem está em tratamento e tem mobilidade reduzida.',
      'Para quem precisa chegar ao Aeroporto Afonso Pena, em Curitiba, para conexões com voos nacionais e internacionais, a Giroto Táxi realiza o trajeto direto de Umuarama, evitando o desgaste de múltiplas trocas de transporte antes mesmo de embarcar no avião.',
      'O valor da viagem para Curitiba é combinado antes da partida, considerando a distância de aproximadamente 460 km e o tempo estimado de viagem. Para viagens com pernoite ou retorno em outro dia, o planejamento é feito com antecedência para organizar a escala de motoristas.',
      'Para viagens tão longas, o táxi executivo da Giroto Táxi com veículos 2026 climatizados oferece o conforto necessário para o trajeto de 5 horas até Curitiba. Bancos confortáveis e ar-condicionado eficiente fazem diferença em viagens dessa duração.',
      'Para planejar sua viagem de Umuarama para Curitiba, mande mensagem pelo WhatsApp (44) 99891-3040 com a maior antecedência possível, informando data, horário desejado, bairro de saída em Umuarama, destino em Curitiba e se haverá retorno ou pernoite na capital.',
    ],
    faqs: [
      { pergunta: 'Quanto tempo leva de Umuarama a Curitiba?', resposta: 'Aproximadamente 5 horas, considerando os cerca de 460 km de distância. O motorista pode fazer paradas de descanso durante o trajeto.' },
      { pergunta: 'Com quanto tempo de antecedência devo agendar para Curitiba?', resposta: 'Recomendamos a maior antecedência possível, idealmente alguns dias antes, para organizar a escala de motoristas em viagens tão longas.' },
      { pergunta: 'Vocês fazem traslado para o Aeroporto Afonso Pena em Curitiba?', resposta: 'Sim. Realizamos o trajeto direto de Umuarama até o aeroporto de Curitiba para conexões com voos nacionais e internacionais.' },
      { pergunta: 'O motorista faz paradas durante a viagem para Curitiba?', resposta: 'Sim, conforme necessário, o motorista pode fazer paradas de descanso durante o trajeto de aproximadamente 5 horas.' },
      { pergunta: 'Vocês atendem viagens com pernoite em Curitiba?', resposta: 'Sim, é possível planejar viagens com pernoite ou retorno em outro dia. Informe essa necessidade ao agendar para organizarmos adequadamente.' },
    ],
    linksRelacionados: ['taxi-executivo-em-umuarama', 'taxi-com-nota-fiscal-em-umuarama', 'taxi-agendado-em-umuarama'],
    palavraChave: 'táxi umuarama curitiba',
  },
]

for (const pagina of paginas) {
  const doc = await client.fetch(`*[_type == "pagina" && slug.current == $slug][0]`, { slug: pagina.slug })
  if (doc) {
    await client.patch(doc._id).set({
      titulos: pagina.titulos,
      descricoes: pagina.descricoes,
      faqs: pagina.faqs,
      linksRelacionados: pagina.linksRelacionados,
      palavraChave: pagina.palavraChave,
    }).commit()
    const totalWords = pagina.descricoes.reduce((acc, d) => acc + d.split(/\s+/).length, 0)
    console.log(`✅ ${pagina.slug} - ${totalWords} palavras, ${pagina.titulos.length} H2, ${pagina.faqs.length} FAQs`)
  } else {
    console.log(`❌ Não encontrado: ${pagina.slug}`)
  }
}
