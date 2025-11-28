export const config = {
  // Usa caminho relativo para aproveitar o proxy do Vite em desenvolvimento
  apiBaseUrl: import.meta.env.VITE_API_URL || '/api',
} as const
