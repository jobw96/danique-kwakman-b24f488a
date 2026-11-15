import { trajectPrices } from '@/data/traject-prices';

export const promotionDeadline = trajectPrices.bloedsuikertraject.validThrough;
// The offer includes the entire last day in the Netherlands (winter time).
export const promotionEndsAt = Date.parse(`${promotionDeadline}T23:00:00Z`) + 60 * 60 * 1000;

export function getPromotionTimeLeft(now: number) {
  const secondsLeft = Math.floor((promotionEndsAt - now) / 1000);
  if (secondsLeft <= 0) return null;
  return {
    days: Math.floor(secondsLeft / 86400),
    hours: Math.floor(secondsLeft / 3600) % 24,
    minutes: Math.floor(secondsLeft / 60) % 60,
    seconds: secondsLeft % 60,
  };
}