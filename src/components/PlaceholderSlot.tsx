/*
 * Reusable labeled placeholder for screenshot/clip slots called for by
 * Entry 211's shot list. Every visual slot on the site renders one of
 * these until Step MS.15 swaps in real captures — never a broken image,
 * blank space, or unlabeled gap (per the plan's End-of-Session checklist).
 */

export default function PlaceholderSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[140px] items-center justify-center rounded-md border border-dashed border-muted/40 bg-white px-6 py-6 text-center text-sm font-medium text-muted ${className}`}
    >
      {label}
    </div>
  );
}
