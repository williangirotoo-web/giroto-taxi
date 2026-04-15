import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/taxi-para-cartorio-em-umuarama', destination: '/servicos/taxi-para-cartorio-em-umuarama', permanent: true },
      { source: '/taxi-para-feira-em-umuarama', destination: '/servicos/taxi-para-feira-em-umuarama', permanent: true },
      { source: '/taxi-para-delegacia-em-umuarama', destination: '/servicos/taxi-para-delegacia-em-umuarama', permanent: true },
      { source: '/taxi-para-farmacia-de-plantao-em-umuarama', destination: '/servicos/taxi-para-farmacia-de-plantao-em-umuarama', permanent: true },
      { source: '/taxi-para-aniversario-em-umuarama', destination: '/servicos/taxi-para-aniversario-em-umuarama', permanent: true },
      { source: '/taxi-de-umuarama-para-aeroporto-de-foz-do-iguacu', destination: '/servicos/taxi-de-umuarama-para-aeroporto-de-foz-do-iguacu', permanent: true },
      { source: '/taxi-para-igreja-em-umuarama', destination: '/servicos/taxi-para-igreja-em-umuarama', permanent: true },
      { source: '/taxi-de-umuarama-para-aeroporto-de-londrina', destination: '/servicos/taxi-de-umuarama-para-aeroporto-de-londrina', permanent: true },
      { source: '/taxi-para-escola-e-faculdade-em-umuarama', destination: '/servicos/taxi-para-escola-e-faculdade-em-umuarama', permanent: true },
      { source: '/taxi-acessivel-para-deficientes-em-umuarama', destination: '/servicos/taxi-acessivel-para-deficientes-em-umuarama', permanent: true },
      { source: '/taxi-para-aeroporto-de-maringa', destination: '/servicos/taxi-para-aeroporto-de-maringa', permanent: true },
      { source: '/taxi-economico-em-umuarama', destination: '/servicos/taxi-economico-em-umuarama', permanent: true },
      { source: '/taxi-seguro-em-umuarama', destination: '/servicos/taxi-seguro-em-umuarama', permanent: true },
      { source: '/taxi-para-hotel-em-umuarama', destination: '/servicos/taxi-para-hotel-em-umuarama', permanent: true },
      { source: '/taxi-para-clinicas-em-umuarama', destination: '/servicos/taxi-para-clinicas-em-umuarama', permanent: true },
      { source: '/taxi-para-banco-em-umuarama', destination: '/servicos/taxi-para-banco-em-umuarama', permanent: true },
      { source: '/taxi-para-trabalho-em-umuarama', destination: '/servicos/taxi-para-trabalho-em-umuarama', permanent: true },
      { source: '/taxi-para-pequenas-mudancas-em-umuarama', destination: '/servicos/taxi-para-pequenas-mudancas-em-umuarama', permanent: true },
      { source: '/taxi-de-umuarama-para-aeroporto-de-cascavel', destination: '/servicos/taxi-de-umuarama-para-aeroporto-de-cascavel', permanent: true },
      { source: '/taxi-confiavel-em-umuarama', destination: '/servicos/taxi-confiavel-em-umuarama', permanent: true },
    ]
  }
};

export default nextConfig;
