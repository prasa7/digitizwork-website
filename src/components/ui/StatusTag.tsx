import { cn } from "./cn";

interface StatusTagProps {
  children: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Small dashed pill marking placeholder or optional content during the design preview. */
export function StatusTag({ children, tone = "light", className }: StatusTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-dashed px-2.5 py-0.5 text-xs font-medium",
        tone === "light"
          ? "border-iris-700/40 bg-iris-50 text-iris-700"
          : "border-iris-300/50 bg-iris-300/10 text-iris-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
