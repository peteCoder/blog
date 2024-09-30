
import { createClient } from '@sanity/client';
// import imageUrlBuilder  from '@sanity/image-url'
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const mySanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASETS,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(mySanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}



