import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "m6q38bwf", // Get this from sanity.config.ts
  dataset: "production",
  apiVersion: "2023-01-01", // Can be any recent date
  useCdn: true, // Use CDN for faster response (read-only)
});

export async function getBlogBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      publishedAt,
      mainImage{
        asset->{
          url
        }
      },
      shortDesc,
      content
    }`,
    { slug }
  );
}