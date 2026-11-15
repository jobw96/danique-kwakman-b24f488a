import { formatPriceDeadline, formatTrajectPrice, type TrajectPrice as PriceDetails } from '@/data/traject-prices';

export function TrajectPrice({ pricing, compact = false }: { pricing: PriceDetails; compact?: boolean }) {
  return (
    <div className={compact ? 'mt-3' : 'mt-8'}>
      {pricing.originalPrice !== undefined && (
        <p className="text-sm text-muted-foreground">
          <span className="sr-only">Oorspronkelijke totaalprijs: </span>
          <del>{formatTrajectPrice(pricing.originalPrice)}</del>
        </p>
      )}
      <p className={compact ? 'mt-1 font-serif text-2xl text-primary-dark' : 'mt-2 font-serif text-5xl text-primary-dark md:text-6xl'}>
        {formatTrajectPrice(pricing.price)}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">Totaalprijs voor het traject</p>
      {pricing.validThrough && (
        <p className="mt-1 text-sm text-primary-deep">Actieprijs · Geldig t/m {formatPriceDeadline(pricing.validThrough)}</p>
      )}
      {pricing.pilot && <p className="mt-1 text-sm text-primary-deep">Speciale pilotprijs</p>}
    </div>
  );
}