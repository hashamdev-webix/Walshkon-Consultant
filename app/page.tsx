import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services, companyInfo, benefits } from '@/data/content';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-consultation.jpg"
            alt="Professional consultation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Decorative accent bar */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-accent z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            <p className="text-accent font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              Professional Consulting Services
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05]">
              Walshkon<br />
              <span className="text-accent">Consultant</span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-2xl font-sans">
              {companyInfo.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold font-sans hover:opacity-90 transition-opacity"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold font-sans hover:border-white/60 hover:bg-white/5 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {[
                { value: '500+', label: 'Clients Served' },
                { value: '95%', label: 'Success Rate' },
                { value: '10+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="text-center px-6">
                  <div className="text-2xl font-bold text-accent font-display">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-sans uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Services<br />Overview
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xs font-sans text-sm leading-relaxed">
              Comprehensive professional solutions tailored to your individual needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/about-company.jpg" alt="Expert consulting team" fill className="object-cover" loading="eager" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold font-display">{companyInfo.transparencyRate}</div>
                <p className="text-white/80 text-sm font-sans mt-1">{companyInfo.transparencyLabel}</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:pl-8">
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">About Company</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Welcome To<br />
                <span className="text-accent">Experience</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed font-sans">
                {companyInfo.longDescription}
              </p>

              <div className="space-y-3 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <p className="text-foreground font-sans text-sm">{benefit}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-lg font-semibold font-sans text-sm hover:opacity-90 transition-opacity"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US — dark accent band ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(0.10_0_0)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Track Record</p>
            <h2 className="text-4xl font-bold text-white">Trusted by Hundreds of Clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: companyInfo.successRate, label: companyInfo.successRateLabel, desc: 'Across all service categories' },
              { value: companyInfo.transparencyRate, label: companyInfo.transparencyLabel, desc: 'No hidden fees or surprises' },
              { value: '500+', label: 'Happy Clients', desc: 'And growing every day' },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/10 rounded-2xl p-8 text-center hover:border-accent/40 transition-colors group">
                <div className="text-5xl font-bold text-accent font-display mb-3 group-hover:scale-105 transition-transform">{stat.value}</div>
                <h3 className="text-white font-semibold font-sans mb-1">{stat.label}</h3>
                <p className="text-gray-400 text-sm font-sans">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">Connect</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Get In Touch
              </h2>
              <h3 className="text-xl text-accent font-display mb-6">
                We&apos;d Love To Hear From You
              </h3>
              <p className="text-muted-foreground mb-10 leading-relaxed font-sans">
                Have questions about our consulting services? Fill out the form and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: companyInfo.email, href: `mailto:${companyInfo.email}` },
                  { icon: Phone, label: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { icon: MapPin, label: companyInfo.address, href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <a href={href} className="text-foreground hover:text-accent transition-colors font-sans text-sm mt-2.5">
                      {label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request a Free Consultation
              </h3>
              <form className="space-y-5">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
