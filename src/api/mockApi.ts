/**
 * Puente estacional para el tipado OpenAPI. 
 * Una vez corras `npm run generate:types`, podrías reemplazar esto importando:
 * `import type { components } from "./api-types"`
 */
export type ApiDebt = {
  id: string;
  name: string;
  currentBalance: string;
  effectiveAnnualRate: string;
  cutoffDate: string;
};
