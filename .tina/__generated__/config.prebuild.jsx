// .tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.TINACMS_CLIENTID || null,
  // Get this from tina.io
  token: process.env.TINACMS_TOKEN || null,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        label: "Experiences",
        name: "experience",
        path: "content/experiences",
        fields: [
          {
            type: "string",
            label: "Role",
            name: "role"
          },
          {
            type: "string",
            label: "Company",
            name: "company"
          },
          {
            type: "string",
            label: "Company URL",
            name: "company_url"
          },
          {
            type: "image",
            label: "Image",
            name: "image"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
