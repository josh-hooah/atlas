// WhatsApp helper
export const WHATSAPP_PHONE = '2348166044468';

export function sendToWhatsApp(text) {
  const encoded = encodeURIComponent(text);
  const base = WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE}?text=` : `https://api.whatsapp.com/send?text=`;
  const url = base + encoded;
  window.open(url, '_blank');
}
