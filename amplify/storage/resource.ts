import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "websiteAssets",
  isDefault: true, // This will be the primary bucket
  access: (allow) => ({
    "public/*": [allow.guest.to(["read"])], // Publicly accessible files
  }),
});
