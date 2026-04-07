import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import { blogPosts } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  const formattedFeaturedDate = new Date(featured.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO — editorial header ─── */}
      <section className="border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Expert Insights</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Latest<br /><span className="text-accent">Insights</span>
              </h1>
            </div>
            <p className="text-muted-foreground font-sans max-w-sm leading-relaxed text-sm md:text-base pb-2">
              Expert guides and practical advice on immigration pathways, work permits, study visas, and professional services in Canada.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURED POST — magazine style ─── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-sans font-semibold text-muted-foreground uppercase tracking-widest mb-6">Featured Article</p>
          <Link href={`/blog/${featured.id}`}>
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border hover:border-accent/40 transition-colors hover:shadow-xl">
              {/* Image */}
              <div className="relative h-72 lg:h-auto min-h-72 overflow-hidden">
                <Image
                  src={featured.image || '/blog-immigration.jpg'}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute top-5 left-5 px-3 py-1.5 bg-accent text-white text-xs font-semibold font-sans rounded uppercase tracking-wide">
                  {featured.category}
                </span>
              </div>

              {/* Content */}
              <div className="bg-card p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-sans mb-5">
                  <Calendar className="w-3.5 h-3.5" />
                  {formattedFeaturedDate}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 group-hover:text-accent transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold font-sans text-sm">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── MORE ARTICLES ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-foreground">More Articles</h2>
            <div className="flex gap-2">
              {['All', 'Immigration', 'Work Permits', 'Study Visas'].map((cat) => (
                <span
                  key={cat}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans font-semibold border transition-colors cursor-pointer ${
                    cat === 'All'
                      ? 'bg-accent text-white border-accent'
                      : 'border-border text-muted-foreground hover:border-accent hover:text-accent'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                image={post.image}
              />
            ))}
            {/* All articles card */}
            <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-accent/40 transition-colors group cursor-pointer">
              <div className="w-12 h-12 rounded-full border-2 border-border group-hover:border-accent flex items-center justify-center mb-4 transition-colors">
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <p className="text-muted-foreground font-sans text-sm">More articles coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER BAND ─── */}
      <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Stay Updated</p>
          <h2 className="text-3xl font-bold text-foreground mb-4">Get Expert Insights Delivered</h2>
          <p className="text-muted-foreground font-sans mb-8">
            Subscribe to receive the latest immigration news, guides, and professional tips directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-background text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent font-sans text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold font-sans text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <CTASection
        title="Have a Question?"
        description="Our experts are ready to answer your questions about immigration, legal services, and more."
        buttonText="Contact Us"
        buttonHref="/contact"
      />

      <Footer />
    </div>
  );
}
