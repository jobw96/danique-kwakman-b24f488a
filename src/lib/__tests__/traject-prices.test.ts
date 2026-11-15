import { describe, expect, it } from 'vitest';
import { trajectPrices, type TrajectPrice } from '../../data/traject-prices';
import { serviceSchema } from '../seo';

describe('Traject totaalprijzen', () => {
  it('biedt het bloedsuikertraject aan voor 275 in plaats van 325', () => {
    expect(trajectPrices.bloedsuikertraject.price).toBe(275);
    expect(trajectPrices.bloedsuikertraject.originalPrice).toBe(325);
  });
  it('biedt het hormoontraject aan voor 595 in plaats van 747', () => {
    expect(trajectPrices.hormoontraject.price).toBe(595);
    expect(trajectPrices.hormoontraject.originalPrice).toBe(747);
  });
  it('biedt het darmtraject aan voor 1049 in plaats van 1794', () => {
    expect(trajectPrices.darmtraject.price).toBe(1049);
    expect(trajectPrices.darmtraject.originalPrice).toBe(1794);
  });
  it('gebruikt voor Mommy een introductieprijs van 650 in plaats van de oorspronkelijke pilotprijs van 750', () => {
    expect(trajectPrices['mommy-to-be']).toEqual({ price: 650, originalPrice: 750, introductory: true });
  });
  it('laat alle drie actieprijzen gelden tot en met 31 december 2026', () => {
    for (const id of ['bloedsuikertraject', 'hormoontraject', 'darmtraject'] as const) {
      expect(trajectPrices[id].validThrough).toBe('2026-12-31');
    }
  });
  it('communiceert totale prijzen en actie-einddatums zonder maandtarief in zoekmachinegegevens', () => {
    for (const [id, pricing] of Object.entries(trajectPrices)) {
      const details: TrajectPrice = pricing;
      const schema = serviceSchema({ name: id, description: id, path: `/${id}`, price: details.price, priceValidUntil: details.validThrough });
      expect(schema.offers.price).toBe(details.price);
      expect(schema.offers).not.toHaveProperty('priceSpecification');
      if (details.validThrough) expect(schema.offers.priceValidUntil).toBe('2026-12-31');
      else expect(schema.offers).not.toHaveProperty('priceValidUntil');
    }
  });
});