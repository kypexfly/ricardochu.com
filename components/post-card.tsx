"use client";

import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  src: string;
  url: string;
}

export default function PostCard({
  title,
  description,
  date,
  src,
  url,
}: PostCardProps) {
  return (
    <Link href={url}>
      <Card className="group relative flex h-full flex-row flex-wrap items-start overflow-hidden rounded border bg-card p-3 transition-transform hover:scale-105 hover:transition-transform dark:border-slate-800 dark:bg-slate-900/25">
        <div className="hidden w-full xs:basis-56 overflow-hidden rounded sm:flex sm:h-36">
          <Image
            alt={title}
            className="h-full w-full object-cover object-center"
            height="250"
            src={src}
            width="250"
          />
        </div>

        <div className="flex-1">
          <CardHeader className="px-0 py-2 sm:px-6">
            <time
              className="font-mono text-muted-foreground text-sm"
              dateTime={date}
              suppressHydrationWarning
            >
              {format(parseISO(date), "LLLL d, yyyy")}
            </time>
            <CardTitle className="md:text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardDescription className="px-0 text-muted-foreground sm:px-6 sm:pt-0">
            {description}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
}
