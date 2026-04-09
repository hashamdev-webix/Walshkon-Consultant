'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/content';
import Image from 'next/image';
import { MessageSquare, FileCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh]">
          {/* Left — text */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 sm:py-24 relative">
            <motion.div
              className="absolute left-0 top-12 bottom-12 w-1 bg-accent rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ originY: 0 }}
            />
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              What We Offer
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-5 sm:mb-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } } }}
            >
              {['Our', 'Services'].map((word, i) => (
                <motion.span
                  key={word}
                  className={i === 1 ? 'text-accent block' : 'block'}
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed font-sans max-w-md"
            >
              Comprehensive professional solutions designed to help you navigate immigration, legal
              matters, and career growth with confidence and clarity.
            </motion.p>
          </div>

          {/* Right — image (hidden on small, shown lg+; shows as full-width row on mobile) */}
          <motion.div
            className="relative min-h-[260px] sm:min-h-[400px]"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1661420128622-4a5267435ce4?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional consulting services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/35" />
            <motion.div
              className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 bg-background/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-accent font-display">{services.length}</div>
              <p className="text-foreground text-xs sm:text-sm font-sans mt-0.5">Core Service Areas</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-10 sm:mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How We Work</h2>
          </FadeUp>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 relative"
            staggerDelay={0.15}
          >
            <div className="hidden sm:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-border" />
            {[
              {
                step: '01',
                icon: MessageSquare,
                title: 'Consultation',
                desc: 'Book a free consultation. We listen to your needs, assess your situation, and identify the best path forward.',
              },
              {
                step: '02',
                icon: FileCheck,
                title: 'Strategy & Plan',
                desc: 'We develop a customised strategy with a clear action plan, timeline, and transparent cost breakdown.',
              },
              {
                step: '03',
                icon: CheckCircle2,
                title: 'Execution & Support',
                desc: 'We handle the entire process, keeping you informed at every step until your goals are achieved.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.step}>
                  <div className="bg-background border border-border rounded-2xl p-6 sm:p-8 text-center relative hover:border-accent/30 transition-colors group h-full">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent text-white mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="text-xs text-accent font-sans font-semibold tracking-widest uppercase mb-2">
                      {item.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-10 sm:mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Browse All
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">All Services</h2>
          </FadeUp>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            staggerDelay={0.12}
          >
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.fullDescription}
                  icon={service.icon}
                  image={service.image}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SPECIALISATION BAND ─── */}
      <FadeUp>
        <section className="bg-accent py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/80 font-sans mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Book a free 30-minute consultation and our experts will help identify the right
              service for your situation.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white text-accent px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold font-sans hover:bg-white/90 transition-colors text-sm sm:text-base"
            >
              Book Free Consultation
            </motion.a>
          </div>
        </section>
      </FadeUp>

      <CTASection
        title="Ready to Get Started?"
        description="Contact our team today to discuss how we can help you achieve your professional goals."
        buttonText="Contact Us"
        buttonHref="/contact"
      />

      <Footer />
    </div>
  );
}
