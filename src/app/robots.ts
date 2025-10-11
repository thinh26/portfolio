import { personalData } from "@/data/data";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = personalData.url;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      process.env.NODE_ENV === "production"
        ? `${baseUrl}/sitemap.xml`
        : "http://localhost:3000/sitemap.xml",
  };
}
