import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Blog",
  "Auto body repair tips, insurance advice, and car care guides from Mayo's Body Shop in Dallas, TX.",
  "/blog"
)

// TODO: Add real blog posts — SEO content about collision repair Dallas, auto paint Dallas, etc.
const posts: {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
}[] = []

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Resources"
            title="Blog"
            subtitle="Tips, guides, and advice on auto body repair, insurance claims, and keeping your car in top condition."
          />
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#A0A0A0] text-lg mb-4">No posts yet — content coming soon.</p>
              <p className="text-[#A0A0A0] text-sm">
                Useful guides on collision repair, insurance, paint matching, and more.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E53E3E]/50 p-6 transition-all"
                >
                  <p className="text-[#E53E3E] text-xs uppercase tracking-wider mb-2">{post.category}</p>
                  <h2 className="text-white font-bold text-lg mb-3 group-hover:text-[#E53E3E] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {post.title}
                  </h2>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <p className="text-[#A0A0A0] text-xs">{post.date}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
