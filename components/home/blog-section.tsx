import { compareDesc } from "date-fns";
import Link from "next/link";
import PostCard from "../post-card";
import { Section } from "../section";
import { StaggerAnimateInView, fadeInLeft } from "../stagger-animate";
import { buttonVariants } from "../ui/button";
import { source } from "@/lib/source";

export function BlogSection() {
  const posts = source
    .getPages()
    .sort((a, b) => compareDesc(new Date(a.data.date), new Date(b.data.date)));

  return (
    <Section className="container mx-auto">
      <h2 className="mb-6 leading-relaxed text-2xl font-bold flex justify-between">
        <span>Latest Posts</span>
        <Link className={buttonVariants({ variant: "secondary" })} href="/blog">
          View all
        </Link>
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {posts.slice(0, 4).map((post) => (
          <StaggerAnimateInView key={post.url} variants={fadeInLeft}>
            <PostCard
              title={post.data.title}
              description={post.data.description}
              date={post.data.date.toISOString()}
              src={post.data.src}
              url={post.url}
            />
          </StaggerAnimateInView>
        ))}
      </div>
    </Section>
  );
}
