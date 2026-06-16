import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/cms", "/api/"],
      },
    ],
    sitemap: "https://www.girototaxiumuarama.com.br/sitemap.xml",
    host: "https://www.girototaxiumuarama.com.br",
  }
}
