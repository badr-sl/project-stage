import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'vfxfwnaw',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export default client;

export const urlFor = (source) => builder.image(source);