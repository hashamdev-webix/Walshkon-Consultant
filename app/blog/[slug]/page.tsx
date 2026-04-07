import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import { blogPosts } from '@/data/content';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-accent hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== slug && p.category === post.category).slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-sans text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* ─── POST HEADER ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-semibold font-sans">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-sans">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-sans">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ─── POST HERO IMAGE ─── */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={post.image || '/blog-immigration.jpg'}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* ─── POST CONTENT ─── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose-lg text-muted-foreground leading-relaxed font-sans">
            <p className="text-lg leading-loose mb-8">{post.content}</p>

            <div className="bg-card border border-border rounded-2xl p-8 my-10">
              <h3 className="text-2xl font-bold text-foreground mb-5">Key Takeaways</h3>
              <ul className="space-y-4">
                {[
                  'Understand the full process and requirements before applying',
                  'Professional guidance significantly improves your chances of success',
                  'Ensure all documentation is complete, accurate, and up-to-date',
                  'Start early — timelines matter in immigration and legal cases',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </span>
                    <span className="text-foreground font-sans text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground font-sans leading-loose">
              For more detailed guidance on {post.category.toLowerCase()}, contact our expert team today. We&apos;re here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* ─── RELATED POSTS ─── */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Keep Reading</p>
              <h2 className="text-3xl font-bold text-foreground">Related Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  id={relatedPost.id}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  category={relatedPost.category}
                  date={relatedPost.date}
                  image={relatedPost.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Need Professional Guidance?"
        description={`Have questions about ${post.category.toLowerCase()}? Our expert consultants are ready to help.`}
        buttonText="Contact Us"
        buttonHref="/contact"
      />

      <Footer />
    </div>
  );
}
