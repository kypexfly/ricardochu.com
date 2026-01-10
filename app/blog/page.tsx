import { compareDesc } from "date-fns";
import { Balancer } from "react-wrap-balancer";
import { TimelineItem, TimelineList } from "@/components/ui/timeline";
import { siteConfig } from "@/config/site";
import { source } from "@/lib/source";

export const metadata = {
  title: `Blog | ${siteConfig.title}`,
};

export default function Blog() {
  const posts = source
    .getPages()
    .sort((a, b) => compareDesc(new Date(a.data.date), new Date(b.data.date)));

  return (
    <section className="container mx-auto my-16 sm:px-8 sm:py-6">
      <h1 className="sr-only">Blog</h1>

      <header className="my-8 text-center sm:text-left">
        <h2 className="mb-6 font-bold text-5xl text-gray-800 tracking-tight dark:text-white">
          <span className="text-gradient-flame">Blog</span> Posts
        </h2>
        <p className="mb-10 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
          <Balancer>
            Sharing insights and experiences on various topics like software
            development, machine learning and engineering.
          </Balancer>
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 pl-4">
        <TimelineList className="group">
          {posts.map((post) => (
            <TimelineItem
              className="transition-opacity hover:opacity-100 group-hover:opacity-50"
              date={post.data.date.toISOString()}
              description={post.data.description}
              href={post.url}
              key={post.url}
              title={post.data.title}
            />
          ))}
        </TimelineList>
      </div>
    </section>
  );
}
