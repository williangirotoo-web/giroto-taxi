import { MetadataRoute } from "next";
import { pagesData } from "@/lib/pages-data";
import { blogPosts } from "@/lib/blog-data";
import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://girototaxiumuarama.com.br";

  const subpages = pagesData.map(p => ({
    url: `${baseUrl}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts = blogPosts.map(p => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const paginas = await client.fetch(`*[_type == "pagina"] { slug }`);
  const cmsPages = paginas.map((p: any) => ({
    url: `${baseUrl}/servicos/${p.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/cms`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...cmsPages,
    ...subpages,
    ...posts,
  ];
}
