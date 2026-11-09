/**
 * Configuração do Gateway de Pagamento Externo da Lume Shop
 * 
 * Substitua pela URL do seu gateway de checkout externo (ex: Appmax, Yampi, CartPanda, Mercado Pago, etc.)
 * Também pode ser definida através da variável de ambiente VITE_CHECKOUT_GATEWAY_URL no arquivo .env
 */
export const DEFAULT_CHECKOUT_GATEWAY_URL =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CHECKOUT_GATEWAY_URL) ||
  'https://checkout.lume-shop.site/pagamento';

export interface CartPayloadItem {
  id: string;
  name: string;
  code: string;
  quantity: number;
  price: number;
}

/**
 * Constrói a URL do gateway com os parâmetros da sacola atual
 */
export function buildCheckoutUrl(
  items: CartPayloadItem[],
  totalPix: number,
  subtotal: number,
  baseUrl = DEFAULT_CHECKOUT_GATEWAY_URL
): string {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set('subtotal', subtotal.toFixed(2));
    url.searchParams.set('total', totalPix.toFixed(2));
    url.searchParams.set('count', items.reduce((acc, i) => acc + i.quantity, 0).toString());
    
    // Adiciona identificadores dos itens
    const itemsParam = items
      .map((item) => `${item.code}x${item.quantity}`)
      .join(',');
    url.searchParams.set('items', itemsParam);

    return url.toString();
  } catch {
    // Se a URL configurada for relativa ou não-padrão
    return baseUrl;
  }
}
