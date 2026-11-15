import { describe, expect, it } from 'vitest';
import { getPromotionTimeLeft, promotionEndsAt } from '../promo-countdown';

describe('Trajectkorting aftelling', () => {
  it('blijft geldig tot en met 31 december 2026 in Nederland', () => {
    expect(getPromotionTimeLeft(Date.parse('2026-12-31T23:59:59+01:00'))).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 1 });
    expect(promotionEndsAt).toBe(Date.parse('2027-01-01T00:00:00+01:00'));
  });
  it('verdwijnt na de actieperiode zonder opnieuw te beginnen', () => {
    expect(getPromotionTimeLeft(Date.parse('2027-01-01T00:00:00+01:00'))).toBeNull();
    expect(getPromotionTimeLeft(Date.parse('2027-01-02T00:00:00+01:00'))).toBeNull();
  });
  it('telt seconden af en verdeelt de resterende tijd in dagen uren minuten en seconden', () => {
    expect(getPromotionTimeLeft(promotionEndsAt - 90061000)).toEqual({ days: 1, hours: 1, minutes: 1, seconds: 1 });
    expect(getPromotionTimeLeft(promotionEndsAt - 90060000)).toEqual({ days: 1, hours: 1, minutes: 1, seconds: 0 });
  });
});