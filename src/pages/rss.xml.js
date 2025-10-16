import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Tech Foundry',
    description: 'A blog focused on the latest in PC hardware and gaming. Features expert reviews, guides, news, and analysis to help enthusiasts build, upgrade, and game on top-tier PCs.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}