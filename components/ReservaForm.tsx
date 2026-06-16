'use client'

import { useState } from 'react'

const WA_NUMBER = '5544998913040'

declare const gtag: (...args: unknown[]) => void

export default function ReservaForm() {
  const [form, setForm] = useState({
    nome: '',
    origem: '',
    destino: '',
    data: '',
    horario: '',
    passageiros: '1',
  })

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()

    const msg = [
      'Olá! Gostaria de solicitar um orçamento de táxi.',
      '',
      `👤 Nome: ${form.nome}`,
      `📍 Origem: ${form.origem}`,
      `🏁 Destino: ${form.destino}`,
      `📅 Data: ${form.data}`,
      `🕐 Horário: ${form.horario}`,
      `👥 Passageiros: ${form.passageiros}`,
      '',
      'Aguardo retorno. Obrigado!',
    ].join('\n')

    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', { send_to: 'AW-634068108/0kpoCM-S8pscEIy5rK4C' })
      gtag('event', 'reserva_form_submit', { event_category: 'conversion', event_label: form.destino })
    }

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
  const labelClass = "block text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1.5"

  return (
    <section className="py-16 px-4 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Solicite seu <span className="text-yellow-400">Orçamento Agora</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Preencha os dados e receba resposta imediata pelo WhatsApp.
          </p>
        </div>

        <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nome" className={labelClass}>Seu nome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Ex: João Silva"
                value={form.nome}
                onChange={handle}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="passageiros" className={labelClass}>Passageiros</label>
              <select
                id="passageiros"
                name="passageiros"
                value={form.passageiros}
                onChange={handle}
                className={inputClass}
              >
                {['1','2','3','4','5','6','7'].map(n => (
                  <option key={n} value={n} className="bg-[#111]">{n} passageiro{n !== '1' ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="origem" className={labelClass}>Origem</label>
              <input
                id="origem"
                name="origem"
                type="text"
                required
                placeholder="Ex: Centro de Umuarama"
                value={form.origem}
                onChange={handle}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="destino" className={labelClass}>Destino</label>
              <input
                id="destino"
                name="destino"
                type="text"
                required
                placeholder="Ex: Aeroporto de Maringá"
                value={form.destino}
                onChange={handle}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="data" className={labelClass}>Data</label>
              <input
                id="data"
                name="data"
                type="date"
                required
                value={form.data}
                onChange={handle}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="horario" className={labelClass}>Horário</label>
              <input
                id="horario"
                name="horario"
                type="time"
                required
                value={form.horario}
                onChange={handle}
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 active:scale-95 text-white font-bold py-4 rounded-2xl text-base transition-all shadow-[0_0_30px_rgba(34,197,94,0.2)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.542 5.878L0 24l6.296-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.574 9.574 0 01-4.889-1.34l-.35-.208-3.64.877.908-3.524-.228-.362A9.556 9.556 0 012.4 12C2.4 6.698 6.698 2.4 12 2.4S21.6 6.698 21.6 12 17.302 21.6 12 21.6z"/>
            </svg>
            Solicitar Orçamento pelo WhatsApp
          </button>

          <p className="text-center text-xs text-gray-500">
            Seus dados são usados apenas para montar a mensagem. Nada é armazenado.
          </p>
        </form>
      </div>
    </section>
  )
}
