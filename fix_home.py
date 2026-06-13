path = '/Users/willianhenriquegirotodomingos/Documents/sites/giroto-taxi/app/page.tsx'
content = open(path).read()

content = content.replace(
    'description: "Taxi em Umuarama 24 horas por dia, 7 dias por semana. Servico de taxi em Umuarama com corridas rapidas, taxi executivo, viagens intermunicipais e traslado para aeroporto. Chame agora pelo WhatsApp!",',
    'description: "Giroto Taxi em Umuarama ha 50 anos. Corridas 24h a partir de R$ 25, taxi executivo, aeroporto de Maringa R$ 550. Frota 2026, 8 motoristas. Chame pelo WhatsApp!",')

open(path, 'w').write(content)
print('OK')
