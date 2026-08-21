export function ReisMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <img
      src="/reis-mark.svg"
      alt=""
      aria-hidden="true"
      className={`shrink-0 select-none ${className}`}
      draggable={false}
    />
  );
}
