import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

// faker v10 es ESM puro y Jest no lo transforma: se simula globalmente.
// (data.service.spec.ts define su propio mock más detallado.)
jest.mock('@faker-js/faker', () => ({ faker: {} }));