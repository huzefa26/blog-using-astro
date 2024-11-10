// defining a content collection within this config file
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      image: image(),
      title: z.string(),
    }),
});

export const collections = {
  // ensure the key matches the directory name
  posts: postsCollection,
};
