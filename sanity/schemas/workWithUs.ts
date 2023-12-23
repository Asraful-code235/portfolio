import { defineField, defineType } from "sanity";

export default defineType({
  name: "workWithUs",
  title: "Work with Us",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "titleImage",
      title: "Title image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "subtitle",
      title: "Sub-Title",
      type: "string",
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "downloadText",
      title: "Download Text",
      description:
        "String to display on button or page that would prompt user to download asset",
      type: "string",
    }),
    defineField({
      name: "download",
      title: "Downloadable Asset",
      type: "file",
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
});
