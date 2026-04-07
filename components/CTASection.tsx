'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title,
  description,
  buttonText = 'Get Started',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">{title}</h2>
            <p className="text-muted-foreground font-sans text-sm">{description}</p>
          </div>
          {buttonHref && (
            <Link
              href={buttonHref}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-lg font-semibold font-sans text-sm hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
