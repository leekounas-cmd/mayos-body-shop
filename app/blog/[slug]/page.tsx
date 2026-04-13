import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

// TODO: Implement blog post data source and content rendering
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  // placeholder — remove when blog posts are added
  if (slug) notFound()

  return null
}
