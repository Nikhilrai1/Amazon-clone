import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2022-03-25",
    useCdn: false
  });

const builder = imageUrlBuilder(client)
export function urlFor(source) {
  return builder.image(source)
}
