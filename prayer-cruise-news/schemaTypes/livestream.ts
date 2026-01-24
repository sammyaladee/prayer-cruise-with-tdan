import { defineType, defineField } from "sanity";

export const livestream = defineType({
  name: "livestream",
  title: "Livestream",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "isLive",
      title: "Is Live?",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "scheduledTime",
      title: "Scheduled Time",
      type: "datetime",
    }),
  ],
});
