'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { companyInfo } from '@/data/content';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Zap, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  FadeUp,
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative bg-[oklch(0.10_0_0)] py-16 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661301084402-1a0452b5850e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover animate-ken-burns"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Reach Out
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-5 sm:mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } } }}
          >
            {["Let's", 'Talk'].map((word, i) => (
              <motion.span
                key={word}
                className={i === 1 ? 'text-accent ml-3 sm:ml-4' : ''}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
              >
                {word}
                {i === 0 && ' '}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="text-white/65 font-sans text-base sm:text-lg max-w-xl mx-auto"
          >
            Have a question or ready to get started? Our team of experts is here to help you find
            the right path forward.
          </motion.p>
        </div>
      </section>

      {/* ─── CONTACT METHOD CARDS ─── */}
      <section className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-0 sm:-mt-1">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-border shadow-xl"
            staggerDelay={0.1}
          >
            {[
              { icon: Phone, title: 'Call Us', value: companyInfo.phone, sub: 'Mon–Fri, 9am – 6pm', href: `tel:${companyInfo.phone}` },
              { icon: Mail, title: 'Email Us', value: companyInfo.email, sub: 'Response within 24hrs', href: `mailto:${companyInfo.email}` },
              { icon: MapPin, title: 'Visit Us', value: 'Calgary, AB', sub: companyInfo.address, href: '#' },
            ].map(({ icon: Icon, title, value, sub, href }, i) => (
              <StaggerItem key={title}>
                <a
                  href={href}
                  className={`group flex flex-col items-center text-center py-8 sm:py-10 px-6 sm:px-8 bg-card hover:bg-accent transition-all cursor-pointer h-full
                    ${i < 2 ? 'border-b sm:border-b-0 sm:border-r border-border' : ''}`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-foreground group-hover:text-white font-semibold font-sans mb-1 transition-colors text-sm sm:text-base">
                    {title}
                  </h3>
                  <p className="text-foreground group-hover:text-white text-xs sm:text-sm font-medium font-sans mb-1 transition-colors break-all">
                    {value}
                  </p>
                  <p className="text-muted-foreground group-hover:text-white/70 text-xs font-sans transition-colors">
                    {sub}
                  </p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── MAIN CONTACT SECTION ─── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-12">

            {/* Left — Contact Info */}
            <FadeLeft className="lg:col-span-2 space-y-8 sm:space-y-10">
              <div>
                <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  Contact Details
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Get In Touch</h2>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  We&apos;re here to help. Reach out through any of the channels below and we&apos;ll
                  get back to you promptly.
                </p>
              </div>

              <StaggerContainer className="space-y-5 sm:space-y-6">
                {[
                  { icon: Mail, title: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                  { icon: Phone, title: 'Phone', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { icon: MapPin, title: 'Address', value: companyInfo.address, href: '#' },
                  { icon: Clock, title: 'Business Hours', values: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 10:00 AM – 4:00 PM', 'Sun: Closed'], href: null },
                ].map(({ icon: Icon, title, value, href, values }) => (
                  <StaggerItem key={title}>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground font-sans mb-0.5">
                          {title}
                        </h3>
                        {values ? (
                          values.map((v) => (
                            <p key={v} className="text-muted-foreground text-xs sm:text-sm font-sans">{v}</p>
                          ))
                        ) : (
                          <a
                            href={href || '#'}
                            className="text-muted-foreground hover:text-accent text-xs sm:text-sm font-sans transition-colors break-all"
                          >
                            {value}
                          </a>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeUp delay={0.2}>
                <div className="border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-semibold text-foreground font-sans mb-3 sm:mb-4">
                    Why Contact Us?
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: Zap, text: 'Response within 24 hours' },
                      { icon: Users, text: 'Expert consultants on standby' },
                      { icon: Shield, text: 'Confidential & secure' },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                        <p className="text-muted-foreground text-sm font-sans">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </FadeLeft>

            {/* Right — Form */}
            <FadeRight delay={0.1} className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 lg:p-10">
                <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                  Message Us
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Send a Message</h2>
                <p className="text-muted-foreground font-sans text-sm mb-6 sm:mb-8">
                  Fill out the form and one of our consultants will be in touch shortly.
                </p>
                <ContactForm />
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ─── LOCATION PLACEHOLDER ─── */}
      <FadeUp className="px-4 sm:px-6 lg:px-8 pb-14 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border bg-secondary h-48 sm:h-64 flex items-center justify-center relative">
            <Image
              src="/about-company.jpg"
              alt="Calgary office"
              fill
              className="object-cover opacity-30"
            />
            <div className="relative z-10 text-center px-4">
              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-accent mx-auto mb-2" />
              <p className="text-foreground font-display font-bold text-base sm:text-lg">
                Unit 307-B, 3016 5 Ave NE
              </p>
              <p className="text-muted-foreground font-sans text-xs sm:text-sm">Calgary, AB T2A 5L7</p>
            </div>
          </div>
        </div>
      </FadeUp>

      <Footer />
    </div>
  );
}
