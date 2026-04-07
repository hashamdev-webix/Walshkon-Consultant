'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Scale, UserCheck, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
  Globe: <Globe className="w-8 h-8" />,
  Scale: <Scale className="w-8 h-8" />,
  UserCheck: <UserCheck className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
};

export default function ServiceCard({ id, title, description, icon, image }: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <div className="group h-full bg-card hover:bg-secondary border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer">
        {/* Image */}
        {image && (
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            {/* Icon overlay on image */}
            <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              {iconMap[icon] || <Briefcase className="w-8 h-8" />}
            </div>
          </div>
        )}

        <div className="p-8">
          {/* Icon (shown only when no image) */}
          {!image && (
            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 text-foreground">
              {iconMap[icon] || <Briefcase className="w-8 h-8" />}
            </div>
          )}

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 line-clamp-3">
            {description}
          </p>
          <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
