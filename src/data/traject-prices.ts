export type TrajectPrice = {
  price: number;
  originalPrice?: number;
  validThrough?: string;
  pilot?: boolean;
};

export const trajectPrices = {
  bloedsuikertraject: { price: 275, originalPrice: 325, validThrough: '2026-12-31' },
  hormoontraject: { price: 595, originalPrice: 747, validThrough: '2026-12-31' },
  darmtraject: { price: 1049, originalPrice: 1794, validThrough: '2026-12-31' },
  'mommy-to-be': { price: 750, pilot: true },
} satisfies Record<string, TrajectPrice>;

export const formatTrajectPrice = (price: number) =>
  `€${price.toLocaleString('nl-NL')}`;

export const formatPriceDeadline = (date: string) =>
  new Intl.DateTimeFormat('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${date}T00:00:00Z`));