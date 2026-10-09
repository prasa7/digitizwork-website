import type { ReactNode } from "react";
import { cn } from "./cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centred, max-width page container with responsive gutters. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-site px-5 sm:px-8", className)}>{children}</div>
  );
}
