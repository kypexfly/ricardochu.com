import { format, parseISO } from "date-fns";
import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

interface TimelineListProps extends React.OlHTMLAttributes<HTMLOListElement> {}

export const TimelineList = ({
  children,
  className,
  ...props
}: TimelineListProps) => {
  return (
    <ol className={cn("relative border-l", className)} {...props}>
      {children}
    </ol>
  );
};

interface TimelineItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  date: string;
  title: string;
  description?: string;
  href: string;
}

export const TimelineItem = ({
  date,
  title,
  description,
  href,
  className,
  ...props
}: TimelineItemProps) => {
  return (
    <li className={cn("mb-5 ml-10", className)} {...props}>
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200 bg-primary" />
      <Link href={href}>
        <time className="mb-1 font-normal text-gray-500 text-sm leading-none dark:text-gray-400">
          {format(parseISO(date), "LLLL d, yyyy")}
        </time>
        <h3 className="font-semibold text-gray-800 text-lg dark:text-white">
          {title}
        </h3>
        {description && (
          <p className="mb-4 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
            {description}
          </p>
        )}
      </Link>
    </li>
  );
};
