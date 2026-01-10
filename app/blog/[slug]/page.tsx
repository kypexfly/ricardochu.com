import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

import { getMDXComponents } from "@/components/mdx-components";
import { siteConfig } from "@/config/site";
import { source } from "@/lib/source";
import { Metadata } from "next";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import ButtonBack from "./button-back";
import "@/styles/mdx.css";

export const generateStaticParams = async () =>
  source.getPages().map((post) => ({ slug: post.url }));

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const params = await props.params;
  const post = source.getPage([params.slug]);

  if (!post) return notFound();

  return { title: post.data.title };
};

const PostLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = source.getPage([params.slug])?.data;

  if (!post) return notFound();

  const Mdx = post.body;

  return (
    <>
      <div className="container mx-auto sm:px-8 my-3">
        <ButtonBack />
      </div>

      <article className="px-4 pb-6 sm:py-6 w-full mx-auto max-w-2xl">
        <header className="mb-8">
          <h1 className="scroll-m-20 text-5xl font-base tracking-tight">
            <Balancer>{post.title}</Balancer>
          </h1>

          <p className="my-2 text-sm text-muted-foreground">
            <time dateTime={post.date.toISOString()}>
              {format(parseISO(post.date.toISOString()), "LLLL d, yyyy")}
            </time>{" "}
            • {siteConfig.title}
          </p>

          <div className="h-72 overflow-hidden my-3 bg-zinc-950">
            <Image
              src={post.src}
              width={700}
              height={300}
              alt={post.title}
              className="w-full h-full object-cover object-center"
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
