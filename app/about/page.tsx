'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { companyInfo, benefits } from '@/data/content';
import Image from 'next/image';
import { Globe, Target, Eye, Award, ShieldCheck, Building2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  FadeUp,
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from '@/components/animations';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[360px] sm:min-h-[480px] flex items-end overflow-hidden">
        <Image
          src="/about.jpg"
          alt="Walshkon consulting team"
          fill
          className="object-cover animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 w-full">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          >
            Who We Are
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.35 } } }}
          >
            {['About', 'Walshkon'].map((word, i) => (
              <motion.span
                key={word}
                className={i === 1 ? 'text-accent block' : 'block'}
                variants={{
                  hidden: { opacity: 0, y: 40 },
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
            className="text-white/70 text-base sm:text-lg mt-3 sm:mt-4 font-sans max-w-xl"
          >
            Your trusted partner in professional consulting services
          </motion.p>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <FadeLeft>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Built on Trust &<br />Excellence
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed font-sans text-sm sm:text-base">
                {companyInfo.longDescription}
              </p>
              <p className="text-muted-foreground mb-5 leading-relaxed font-sans text-sm sm:text-base">
                Founded on principles of excellence and integrity, Walshkon Consultants has helped
                hundreds of clients achieve their professional goals.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans text-sm sm:text-base">
                We believe in building lasting relationships with our clients, understanding their
                unique needs, and delivering solutions that exceed expectations.
              </p>
            </FadeLeft>

            <FadeRight delay={0.1}>
              <div className="relative">
                <div className="relative h-[260px] sm:h-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/hero-consultation.jpg"
                    alt="Global consulting network"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>
                {/* Corner accents — smaller on mobile */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 border-l-4 border-t-4 border-accent rounded-tl-2xl" />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-r-4 border-b-4 border-accent rounded-br-2xl" />
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-[oklch(0.10_0_0)] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            staggerDelay={0.12}
          >
            {[
              { to: 500, suffix: '+', label: 'Happy Clients' },
              { to: 10, suffix: '+', label: 'Years Experience' },
              { to: 95, suffix: '%', label: 'Success Rate' },
              { to: 8, suffix: '+', label: 'Service Areas' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center border border-white/10 rounded-xl py-6 px-2 sm:px-4">
                  <div className="text-3xl sm:text-4xl font-bold text-accent font-display mb-2">
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm font-sans uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-10 sm:mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our Purpose
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Mission & Vision</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <FadeLeft>
              <div className="bg-background border border-border rounded-2xl p-6 sm:p-10 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[80px]" />
                <div className="mb-5 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed font-sans text-sm sm:text-base">
                  Dedicated to providing quality professional services and fostering holistic
                  growth. We strive to uphold our values and assist you to realize your potential
                  and grow.
                </p>
              </div>
            </FadeLeft>

            <FadeRight delay={0.1}>
              <div className="bg-accent rounded-2xl p-6 sm:p-10 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[80px]" />
                <div className="mb-5 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed font-sans text-sm sm:text-base">
                  To be the most trusted and preferred consulting firm, recognized for excellence
                  in service delivery and client satisfaction across North America.
                </p>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-10 sm:mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What Guides Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Our Core Values</h2>
          </FadeUp>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            staggerDelay={0.1}
          >
            {[
              { icon: ShieldCheck, title: 'Integrity', description: 'Honest and ethical in every client interaction and business dealing' },
              { icon: Building2, title: 'Innovation', description: 'Creative solutions to complex and evolving professional challenges' },
              { icon: Award, title: 'Excellence', description: 'Uncompromising commitment to the highest professional standards' },
              { icon: Globe, title: 'Client Focus', description: 'Your success and satisfaction are always our primary priority' },
            ].map((value) => {
              const IconComponent = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="group border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/40 hover:bg-secondary transition-all h-full">
                    <div className="mb-4 sm:mb-5 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-foreground/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <FadeLeft>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Why Walshkon
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
                Why Choose Walshkon?
              </h2>
              <StaggerContainer className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-background transition-colors">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <p className="text-foreground font-sans text-sm leading-relaxed pt-1">
                        {benefit}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeLeft>

            <FadeRight delay={0.15}>
              <div className="relative h-[260px] sm:h-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/immigration-services.jpg"
                  alt="Why choose Walshkon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                  <blockquote className="text-white font-display text-lg sm:text-xl italic">
                    &ldquo;Your success is our mission.&rdquo;
                  </blockquote>
                  <p className="text-white/60 font-sans text-sm mt-2">— Walshkon Consultants</p>
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <FadeUp className="max-w-7xl mx-auto text-center">
          <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            The People
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 sm:mb-6">Our Expert Team</h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
            Our team consists of experienced professionals with deep expertise in immigration
            consulting, legal services, recruitment, and more.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-accent text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold font-sans hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            Connect With Our Team
          </motion.a>
        </FadeUp>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Let's discuss how Walshkon Consultants can help you achieve your professional goals."
        buttonText="Get Started Today"
        buttonHref="/contact"
      />

      <Footer />
    </div>
  );
}
