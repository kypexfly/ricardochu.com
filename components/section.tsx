import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("py-8 sm:px-8 sm:py-16", className)} {...props}>
      {children}
    </section>
  );
}
