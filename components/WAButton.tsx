'use client'

const WA_LINK = "https://wa.me/5544998913040?text=Ol%C3%A1!%20Preciso%20de%20um%20t%C3%A1xi%20em%20Umuarama%20agora."

declare const gtag: (...args: any[]) => void;

function trackWA() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', { 'send_to': 'AW-634068108/0kpoCM-S8pscEIy5rK4C' });
  }
}

interface WAButtonProps {
  className?: string
  children: React.ReactNode
}

export default function WAButton({ className, children }: WAButtonProps) {
  return (
    <a href={WA_LINK} target="_blank" rel="noreferrer" onClick={trackWA} className={className}>
      {children}
    </a>
  )
}
