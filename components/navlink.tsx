import type { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, isCurrentPathOrChild } from "@/lib/utils";

interface NavLinkProps {
  children?: React.ReactNode;
  href: Url;
}

export function NavLink({ children, href }: NavLinkProps) {
  const currentPath = usePathname();

  return (
    <Link
      className={cn(
        "px-2 py-2 text-muted-foreground transition-colors hover:text-foreground",
        isCurrentPathOrChild(currentPath, href.toString()) && "text-bg"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
