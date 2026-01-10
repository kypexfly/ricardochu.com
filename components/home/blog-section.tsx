import { compareDesc } from "date-fns";
import Link from "next/link";
import { source } from "@/lib/source";
import PostCard from "../post-card";
import { Section } from "../section";
import { fadeInLeft, StaggerAnimateInView } from "../stagger-animate";
import { buttonVariants } from "../ui/button";

export function BlogSection() {
  const posts = source
    .getPages()
    .sort((a, b) => compareDesc(new Date(a.data.date), new Date(b.data.date)));

  return (
    <Section className="container mx-auto">
      <h2 className="mb-6 flex justify-between font-bold text-2xl leading-relaxed">
        <span>Latest Posts</span>
        <Link className={buttonVariants({ variant: "secondary" })} href="/blog">
          View all
        </Link>
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {posts.slice(0, 4).map((post) => (
          <StaggerAnimateInView key={post.url} variants={fadeInLeft}>
            <PostCard
              date={post.data.date.toISOString()}
              description={post.data.description}
              src={post.data.src}
              title={post.data.title}
              url={post.url}
            />
          </StaggerAnimateInView>
        ))}
      </div>
    </Section>
  );
}
