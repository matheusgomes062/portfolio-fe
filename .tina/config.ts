import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "2d554b8d-a31f-49da-ae86-cf5821da0166", // Get this from tina.io
  token: "129ce6e1d9e5d092ef2b77125dd3e91aa3981d4d", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: 'Experiences',
        name: 'experience',
        path: 'content/experiences',
        fields: [
          {
            type: 'string',
            label: 'Role',
            name: 'role',
          },
          {
            type: 'string',
            label: 'Company',
            name: 'company',
          },
          {
            type: 'string',
            label: 'Company URL',
            name: 'company_url',
          },
          {
            type: 'image',
            label: 'Image',
            name: 'image',
          }
        ]
      }
    ],
  },
});
