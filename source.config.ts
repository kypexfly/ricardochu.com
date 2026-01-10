import { defineConfig, defineDocs } from "fumadocs-mdx/config";

import z from "zod";

export const blog = defineDocs({
  dir: "posts",
  docs: {
    schema: z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      src: z.string(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      theme: "github-dark",
    },
  },
});
