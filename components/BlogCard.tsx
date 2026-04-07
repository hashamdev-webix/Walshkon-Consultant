'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
}

export default function BlogCard({ id, title, excerpt, category, date, image }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${id}`}>
      <div className="group h-full bg-card hover:bg-secondary border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Image */}
        {image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <span className="absolute top-4 left-4 px-3 py-1 bg-foreground/90 text-background rounded-full text-xs font-semibold tracking-wide uppercase">
              {category}
            </span>
          </div>
        )}

        <div className="p-8">
          {/* Category badge (shown only when no image) */}
          {!image && (
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                {category}
              </span>
            </div>
          )}

          <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
            <Calendar className="w-3 h-3" />
            <span>{formattedDate}</span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
