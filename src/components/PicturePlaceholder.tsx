type PicturePlaceholderProps = {
  className?: string;
};

export default function PicturePlaceholder({
  className = "",
}: PicturePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-mist text-center text-sm font-medium uppercase tracking-[0.18em] text-ink-soft ${className}`}
      aria-label="Picture placeholder"
    >
      add picture here
    </div>
  );
}
