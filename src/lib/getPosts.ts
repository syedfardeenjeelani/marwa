import { client } from "./sanity";

export async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    publishedAt,
    description,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body
  }`;
  return await client.fetch(query);
}
