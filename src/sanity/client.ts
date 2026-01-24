import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ksgzfbvl",
  dataset: "production",
  useCdn: true, // faster reads
  apiVersion: "2025-01-01",
});
