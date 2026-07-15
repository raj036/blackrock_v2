export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      className={`flex items-center gap-2 font-serif text-xl font-semibold tracking-tight text-foreground ${className}`}
      aria-label="BlackRock home"
    >
      <span aria-hidden className="inline-block h-6 w-6 rounded-sm bg-primary" />
      <span>BlackRock</span>
    </a>
  );
}