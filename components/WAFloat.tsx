'use client'

const WA_LINK = "https://wa.me/5544998913040?text=Ol%C3%A1!%20Preciso%20de%20um%20t%C3%A1xi%20em%20Umuarama."

declare const gtag: (...args: unknown[]) => void

function track() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', { send_to: 'AW-634068108/0kpoCM-S8pscEIy5rK4C' })
    gtag('event', 'wa_float_click', { event_category: 'engagement', event_label: 'botao_flutuante' })
  }
}

export default function WAFloat() {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          50% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
        }
        .wa-float {
          animation: wa-pulse 2.5s ease-in-out infinite;
          will-change: box-shadow;
        }
      `}</style>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        onClick={track}
        aria-label="Chamar no WhatsApp"
        className="wa-float fixed bottom-24 right-4 md:bottom-8 md:right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20bc5a] hover:scale-110 transition-transform duration-200"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.542 5.878L0 24l6.296-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.574 9.574 0 01-4.889-1.34l-.35-.208-3.64.877.908-3.524-.228-.362A9.556 9.556 0 012.4 12C2.4 6.698 6.698 2.4 12 2.4S21.6 6.698 21.6 12 17.302 21.6 12 21.6z"/>
        </svg>
      </a>
    </>
  )
}
