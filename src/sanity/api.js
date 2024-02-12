import { sanityClient } from "sanity:client";

export async function getAllPosts() {
  const client = sanityClient;
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);
  return posts;
}

export async function getAllRecords() {
  const client = sanityClient;
  const query = '*[_type == "record"]';
  const records = await client.fetch(query);
  return records;
}
