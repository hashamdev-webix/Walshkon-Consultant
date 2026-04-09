'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesCarousel from '@/components/ServicesCarousel';
import CTASection from '@/components/CTASection';
import { services, companyInfo, benefits } from '@/data/content';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  FadeUp,
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from '@/components/animations';

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const MARQUEE_ITEMS = [
  'Immigration Services',
  'Legal Services',
  'Recruitment',
  'IT Solutions',
  'Finance & Mortgage',
  'Real Estate',
  'Digital Marketing',
  'Paralegal Services',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional consultation"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <motion.div
          className="absolute left-0 top-0 w-1.5 bg-accent z-10"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          style={{ height: '100%' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="text-accent font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 sm:mb-6"
            >
              Professional Consulting Services
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-[1.05]"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
              }}
            >
              {['Walshkon', 'Consultant'].map((word, i) => (
                <motion.span
                  key={word}
                  className={i === 1 ? 'text-accent block' : 'block'}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.85, ease }}
              className="text-base sm:text-lg md:text-xl text-white/75 mb-8 sm:mb-10 leading-relaxed max-w-2xl font-sans"
            >
              {companyInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 1.05, ease }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold font-sans hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold font-sans hover:border-white/60 hover:bg-white/5 transition-all text-sm sm:text-base"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease }}
          className="absolute bottom-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {[
                { to: 500, suffix: '+', label: 'Clients' },
                { to: 95, suffix: '%', label: 'Success' },
                { to: 10, suffix: '+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label} className="text-center px-2 sm:px-6">
                  <div className="text-xl sm:text-2xl font-bold text-accent font-display">
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-sans uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── MARQUEE TICKER ─── */}
      <div className="bg-accent py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].flatMap((_, i) =>
            MARQUEE_ITEMS.map((item) => (
              <span
                key={`${i}-${item}`}
                className="text-white/90 text-xs font-semibold tracking-[0.18em] uppercase mx-5 sm:mx-6"
              >
                {item} &nbsp;•
              </span>
            ))
          )}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                What We Do
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Services Overview
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xs font-sans text-sm leading-relaxed">
              Comprehensive professional solutions tailored to your individual needs and goals.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <ServicesCarousel services={services} />
          </FadeUp>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Left Image */}
            <FadeLeft>
              <div className="relative pb-8 sm:pb-0">
                <div className="relative h-[280px] sm:h-[400px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Expert consulting team"
                    fill
                    className="object-cover"
                    loading="eager"
                  />
                </div>
                {/* Floating stat card — offset inside on mobile to avoid overflow */}
                <motion.div
                  className="absolute bottom-0 right-4 sm:-bottom-6 sm:-right-6 bg-accent text-white rounded-2xl p-4 sm:p-6 shadow-2xl animate-float"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease }}
                >
                  <div className="text-2xl sm:text-3xl font-bold font-display">{companyInfo.transparencyRate}</div>
                  <p className="text-white/80 text-xs sm:text-sm font-sans mt-1">{companyInfo.transparencyLabel}</p>
                </motion.div>
              </div>
            </FadeLeft>

            {/* Right Content */}
            <FadeRight delay={0.1}>
              <div className="lg:pl-8">
                <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  About Company
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Welcome To<br />
                  <span className="text-accent">Experience</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed font-sans text-sm sm:text-base">
                  {companyInfo.longDescription}
                </p>

                <StaggerContainer className="space-y-3 mb-8 sm:mb-10">
                  {benefits.map((benefit, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                        <p className="text-foreground font-sans text-sm">{benefit}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg font-semibold font-sans text-sm hover:opacity-90 transition-opacity"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(0.10_0_0)]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-10 sm:mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our Track Record
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Trusted by Hundreds of Clients</h2>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.15}>
            {[
              { to: 95, suffix: '%', label: companyInfo.successRateLabel, desc: 'Across all service categories' },
              { to: 100, suffix: '%', label: companyInfo.transparencyLabel, desc: 'No hidden fees or surprises' },
              { to: 500, suffix: '+', label: 'Happy Clients', desc: 'And growing every day' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:border-accent/40 transition-colors group hover:bg-white/5">
                  <div className="text-4xl sm:text-5xl font-bold text-accent font-display mb-3 group-hover:scale-110 transition-transform duration-300">
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-white font-semibold font-sans mb-1 text-sm sm:text-base">{stat.label}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-sans">{stat.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <FadeLeft>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Connect
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Get In Touch
              </h2>
              <h3 className="text-lg sm:text-xl text-accent font-display mb-5 sm:mb-6">
                We&apos;d Love To Hear From You
              </h3>
              <p className="text-muted-foreground mb-8 sm:mb-10 leading-relaxed font-sans text-sm sm:text-base">
                Have questions about our consulting services? Fill out the form and our team will get
                back to you as soon as possible.
              </p>

              <StaggerContainer className="space-y-4 sm:space-y-5">
                {[
                  { icon: Mail, label: companyInfo.email, href: `mailto:${companyInfo.email}` },
                  { icon: Phone, label: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { icon: MapPin, label: companyInfo.address, href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <StaggerItem key={label}>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <a
                        href={href}
                        className="text-foreground hover:text-accent transition-colors font-sans text-sm mt-1.5 sm:mt-2.5 break-all"
                      >
                        {label}
                      </a>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeLeft>

            <FadeRight delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-5 sm:mb-6">
                  Request a Free Consultation
                </h3>
                <form className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-foreground text-sm font-semibold font-sans mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text" id="name" placeholder="Your full name" required
                      className="w-full px-4 py-3 bg-background text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent font-sans text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground text-sm font-semibold font-sans mb-2">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email" id="email" placeholder="your@email.com" required
                      className="w-full px-4 py-3 bg-background text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent font-sans text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-foreground text-sm font-semibold font-sans mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message" placeholder="How can we help you?" rows={4} required
                      className="w-full px-4 py-3 bg-background text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent resize-none font-sans text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-white py-3.5 rounded-lg font-semibold font-sans hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
