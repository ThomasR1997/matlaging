import { createClient } from "@sanity/client";
import { groq } from "next-sanity";

export const client = createClient({
  projectId: "8ya51env",
  dataset: "production",
  apiVersion: "2023-06-13",
  useCdn: false,
});

export async function getAllData() {
  return client.fetch(groq`*[_type == "matrett"] {
    _id,
    name,
    ingredients,
    steps,
    "image": image.asset->url,
    "slug": slug.current,
  }`);
}

// export async function getServerSideProps() {
//   const data = await getAllData();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export async function getData(slug) {
  return client.fetch(
    groq`*[_type == "matrett" && slug.current == $slug][0] {
      _id,
      name,
      ingredients,
      steps,
      "image": image.asset->url,
      "slug": slug.current,
    }`,
    { slug }
  );
}
