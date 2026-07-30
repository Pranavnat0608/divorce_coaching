import { heroScribble } from "@/lib/katePinkBg";

/** Soft teal scribble behind hero content — kept faint so text stays readable. */
export default function HeroPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: heroScribble,
        backgroundSize: "min(900px, 110vw) auto",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    />
  );
}
