import createClient from "openapi-fetch";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Este archivo será autogenerado al correr `npm run generate:types`
import type { paths } from "./api-types";

/**
 * Cliente API Oficial de la App, con tipos extraídos estáticamente
 * desde `fin-opt-specs/openapi.yaml`.
 * 
 * TODO: Apuntar el `baseUrl` a las variables de entorno de Vite
 */
const apiClient = createClient<paths>({ 
  baseUrl: import.meta.env?.VITE_API_URL || "http://localhost:3000" 
});

export default apiClient;
