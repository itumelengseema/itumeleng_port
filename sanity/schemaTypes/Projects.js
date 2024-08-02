export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    },
    {
      name: "gitUrl",
      title: "GitHub URL",
      type: "url",
    },
    {
      name: "previewUrl",
      title: "Preview URL",
      type: "url",
    },
  ],
};