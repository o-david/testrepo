const areas = [
  "Litigation & Arbitration",
  "Corporate & Commercial",
  "Energy Law",
  "Immigration",
  "Consumer Protection",
  "Labour & Employment",
  "Insolvency",
  "Conveyance & Property",
  "Intellectual Property",
];

/** Endless ribbon of practice areas between the hero and the next section. */
const PracticeMarquee = () => (
  <div className="relative overflow-hidden border-y border-accent/20 bg-navy py-5" aria-label="Practice areas">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent" />
    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
          {areas.map((area) => (
            <li key={area} className="flex items-center">
              <span className="px-8 font-playfair text-lg md:text-xl italic text-white/80 whitespace-nowrap">
                {area}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default PracticeMarquee;
