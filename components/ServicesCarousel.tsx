'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

type Service = {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  image?: string;
};

export default function ServicesCarousel({ services }: { services: Service[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [emblaApi, isPaused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Viewport — no horizontal margin on mobile so cards fill the width */}
      <div className="overflow-hidden sm:mx-12" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex-none w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-0"
            >
              <ServiceCard
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows — hidden on mobile, shown sm+ */}
      <button
        onClick={scrollPrev}
        aria-label="Previous service"
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-10 w-10 h-10 rounded-full bg-background border border-border items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all shadow-md z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next service"
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-10 w-10 h-10 rounded-full bg-background border border-border items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all shadow-md z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Mobile prev/next row */}
      <div className="flex sm:hidden justify-center gap-4 mt-6">
        <button
          onClick={scrollPrev}
          aria-label="Previous service"
          className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next service"
          className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4 sm:mt-8">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? 'w-7 bg-accent'
                : 'w-2 bg-border hover:bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
