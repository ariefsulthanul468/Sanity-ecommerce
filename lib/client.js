import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "m3djrgrf",
  dataset: "production",
  apiVersion: "2024-01-04",
  useCdn: true,
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  token : "skarZSE82E4Frkj9C7Kfojyh7YzeGVdMrQRm2goJtqPWeSSOCwa1mbFaRohs4nvUOe4QS5zumRfa7P2d5qnhjXkW0gTuSmraihYgSJaV1C1oKWl3O0hp7r46DGDR5mFz3YAIqG03fWH18vPr3fqOrZQNrZrdAXfg88RjkNp8Dfi2R8ukUkzH"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  try {
    if (source === undefined || source === null) {
      return builder.image(""); // or handle it according to your use case
    }

    return builder.image(source);
  } catch (error) {
    console.error("Error in urlFor:", error);
    return builder.image(""); // or handle errors according to your use case
  }
};
