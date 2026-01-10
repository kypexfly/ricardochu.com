import { format, parseISO } from "date-fns";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Balancer } from "react-wrap-balancer";
import { getMDXComponents } from "@/components/mdx-components";
import { siteConfig } from "@/config/site";
import { source } from "@/lib/source";
import ButtonBack from "./button-back";
import "@/styles/mdx.css";

export const generateStaticParams = async () =>
  source.getPages().map((post) => ({ slug: post.url }));

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const params = await props.params;
  const post = source.getPage([params.slug]);

  if (!post) {
    return notFound();
  }

  return { title: post.data.title };
};

const PostLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = source.getPage([params.slug])?.data;

  if (!post) {
    return notFound();
  }

  const Mdx = post.body;

  return (
    <>
      <div className="container mx-auto my-3 sm:px-8">
        <ButtonBack />
      </div>

      <article className="mx-auto w-full max-w-2xl px-4 pb-6 sm:py-6">
        <header className="mb-8">
          <h1 className="scroll-m-20 font-base text-5xl tracking-tight">
            <Balancer>{post.title}</Balancer>
          </h1>

          <p className="my-2 text-muted-foreground text-sm">
            <time dateTime={post.date.toISOString()}>
              {format(parseISO(post.date.toISOString()), "LLLL d, yyyy")}
            </time>{" "}
            • {siteConfig.title}
          </p>

          <div className="my-3 h-72 overflow-hidden bg-zinc-950">
            <Image
              alt={post.title}
              className="h-full w-full object-cover object-center"
              height={300}
              src={post.src}
              width={700}
            />
          </div>
        </header>

        <div className="mdx">
          <Mdx components={getMDXComponents()} />
        </div>
      </article>
    </>
  );
};

export default PostLayout;
