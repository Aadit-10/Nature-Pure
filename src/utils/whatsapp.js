export const WHATSAPP_NUMBER = '919567889001';

/**
 * Returns a wa.me URL with a customized, encoded message
 */
export function getWhatsAppUrl(customMessage = '') {
  const defaultMsg =
    'Hi Nature Pure Extracts! I would like to inquire about your supercritical botanical extracts and request specifications/pricing.';
  const message = (customMessage && customMessage.trim()) ? customMessage.trim() : defaultMsg;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp directly in a new window/tab
 */
export function openWhatsApp(customMessage = '') {
  const url = getWhatsAppUrl(customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
}
