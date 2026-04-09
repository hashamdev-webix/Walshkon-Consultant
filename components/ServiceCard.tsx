'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Scale, UserCheck, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <Link href={`/services/${id}`} className="block h-full">
      <motion.div
        whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="group h-full bg-card border border-border rounded-2xl overflow-hidden cursor-pointer"
      >
        {/* Image */}
        {image && (
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            {/* Icon overlay */}
            <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              {iconMap[icon] || <Briefcase className="w-8 h-8" />}
            </div>
          </div>
        )}

        <div className="p-8">
          {!image && (
            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 group-hover:bg-accent/10 text-foreground group-hover:text-accent transition-colors duration-300">
              {iconMap[icon] || <Briefcase className="w-8 h-8" />}
            </div>
          )}

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex items-center text-accent font-semibold text-sm gap-1">
            Learn More
            <motion.span
              className="inline-flex"
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
