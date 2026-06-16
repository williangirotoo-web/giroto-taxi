import { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-data"
import { client } from "@/lib/sanity"
import { pagesData } from "@/lib/pages-data"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.girototaxiumuarama.com.br"

  const blogEntries = blogPosts.map(p => ({
    url: baseUrl + "/blog/" + p.slug,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const paginas = await client.fetch('*[_type == "pagina"] { slug }')
  const servicosPages = paginas.map((p: any) => ({
    url: baseUrl + "/servicos/" + p.slug.current,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  const cmsPages = pagesData.map(p => ({
    url: baseUrl + "/" + p.slug,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: baseUrl + "/blog", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    ...cmsPages,
    ...blogEntries,
    ...servicosPages,
  ]
}
