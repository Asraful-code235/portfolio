import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { useEffect, useState } from "react";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-10-21",
};

// info@ocapllc.com

export const getClient = createClient(config);

const builder = imageUrlBuilder(getClient);
// @ts-ignore
export const urlFor = (source) => builder.image(source);

// Fetching data
// @ts-ignore
export const useDataFetching = (query) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClient.fetch(query);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  return data;
};
