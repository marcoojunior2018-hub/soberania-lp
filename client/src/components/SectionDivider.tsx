interface SectionDividerProps {
  number: string;
  label?: string;
}

export default function SectionDivider({ number, label }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-6 py-16 px-4 max-w-[1200px] mx-auto">
      <div className="flex-1 h-px bg-[#C7CEDB15]" />
      <span className="font-mono-brand text-xs tracking-[0.15em] text-[#C7CEDB50]">
        — {number} {label && `/ ${label.toUpperCase()}`} —
      </span>
      <div className="flex-1 h-px bg-[#C7CEDB15]" />
    </div>
  );
}
