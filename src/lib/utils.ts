import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...classes: (string | undefined)[]): string {
  return twMerge(clsx(classes));
}
