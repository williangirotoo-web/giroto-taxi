interface Testimonial {
  nome: string
  bairro: string
  texto: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  keyword: string
}

export default function Testimonials({ testimonials, keyword }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <section className="py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
          O que dizem sobre{" "}
          <span className="text-yellow-400">{keyword}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex text-yellow-400 text-sm gap-0.5" aria-label="5 estrelas">
                {"★★★★★"}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                &ldquo;{t.texto}&rdquo;
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="font-semibold text-white text-sm">{t.nome}</p>
                <p className="text-gray-500 text-xs">{t.bairro} — Umuarama, PR</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
