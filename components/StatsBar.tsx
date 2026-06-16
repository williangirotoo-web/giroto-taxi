const stats = [
  { value: "50 anos", label: "em Umuarama" },
  { value: "24h", label: "atendimento" },
  { value: "WhatsApp", label: "resposta imediata" },
  { value: "Regional", label: "viagens intermunicipais" },
]

export default function StatsBar() {
  return (
    <section className="py-10 border-t border-b border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="text-2xl md:text-3xl font-extrabold text-yellow-400">
                {s.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
