type PageHeroProps = {
  title: string;
  subtitle: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pt-14 pb-20 text-foam md:pt-16 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(26,107,107,0.35),transparent_55%),radial-gradient(ellipse_at_90%_80%,rgba(200,185,166,0.18),transparent_45%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <h1 className="animate-fade-up font-display font-normal text-4xl leading-tight tracking-tight md:text-6xl">
          {title}
        </h1>
        <div className="animate-reveal-line mt-6 h-px w-24 bg-sand" />
        <p className="animate-fade-up-delay mt-6 max-w-xl text-lg leading-relaxed text-foam/75">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
