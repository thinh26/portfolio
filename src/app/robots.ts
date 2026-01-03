import { personalData } from "@/data/data";
import { MetadataRoute } from "next";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  const hostname = headers().get("host")?.split(":").at(0);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      process.env.NODE_ENV === "production"
        ? `${hostname}/sitemap.xml`
        : `http://${hostname}:3000/sitemap.xml`,
  };
}
