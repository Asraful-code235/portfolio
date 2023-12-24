import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import about from "./schemas/about";
import industry from "./schemas/industry";
import solution from "./schemas/solution";
import caseStudy from "./schemas/caseStudy";
import teamBio from "./schemas/teamBio";
import workWithUs from "./schemas/workWithUs";
import heroSlider from "./schemas/heroSlider";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSlider,
    about,
    teamBio,
    workWithUs,
    solution,
    caseStudy,
    industry,
    post,
    author,
    category,
    blockContent,
  ],
};
