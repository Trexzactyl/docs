import { getDocBySlug, getDocSlugs, getAllDocs } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc"; // Using RSC version for App Router
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

// Tailwind typography styles for markdown
import "highlight.js/styles/github-dark.css";

export async function generateStaticParams() {
    const slugArrays = getDocSlugs();
    // Return params objects: [{ slug: ['panel', 'install'] }, ...]
    return slugArrays.map((slug) => ({
        slug: slug,
    }));
}

export default async function DocPage(props: { params: Promise<{ slug?: string[] }> }) {
    const params = await props.params;
    const slug = params.slug;
    // If no slug, maybe redirect to first doc or show index?
    // Current logic assumes slug is present for docs.
    // Sidebar links point to /docs/... 

    if (!slug || slug.length === 0) {
        return (
            <div className="prose prose-invert max-w-none">
                <h1>Documentation</h1>
                <p>Select a topic from the sidebar.</p>
            </div>
        );
    }

    try {
        const { content, meta } = getDocBySlug(slug);

        return (
            <article className="prose prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-h1:text-3xl prose-h1:bg-gradient-to-r prose-h1:from-white prose-h1:to-gray-400 prose-h1:bg-clip-text prose-h1:text-transparent prose-a:text-primary-400 hover:prose-a:text-primary-300 max-w-none">
                {/* Render title from meta or h1 in content? Usually content has h1 */}
                {/* <h1 className="mb-4">{meta.title}</h1> */}

                <MDXRemote
                    source={content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                            rehypePlugins: [rehypeHighlight],
                        }
                    }}
                />
            </article>
        );
    } catch (error) {
        notFound();
    }
}
