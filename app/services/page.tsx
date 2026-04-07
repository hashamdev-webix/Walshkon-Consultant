import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/content';
import Image from 'next/image';
import { MessageSquare, FileCheck, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO — split with accent sidebar ─── */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* Left — text */}
          <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-24 relative">
            {/* Vertical accent line */}
            <div className="absolute left-0 top-12 bottom-12 w-1 bg-accent rounded-full" />
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">What We Offer</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Our<br /><span className="text-accent">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-sans max-w-md">
              Comprehensive professional solutions designed to help you navigate immigration, legal matters, and career growth with confidence and clarity.
            </p>
          </div>

          {/* Right — image */}
          <div className="relative min-h-[400px]">
            <Image
              src="/hero-consultation.jpg"
              alt="Professional consulting services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/35" />
            {/* Service count badge */}
            <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm rounded-xl p-5 border border-border">
              <div className="text-3xl font-bold text-accent font-display">{services.length}</div>
              <p className="text-foreground text-sm font-sans mt-0.5">Core Service Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Process</p>
            <h2 className="text-4xl font-bold text-foreground">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-border" />
            {[
              { step: '01', icon: MessageSquare, title: 'Consultation', desc: 'Book a free consultation. We listen to your needs, assess your situation, and identify the best path forward.' },
              { step: '02', icon: FileCheck, title: 'Strategy & Plan', desc: 'We develop a customised strategy with a clear action plan, timeline, and transparent cost breakdown.' },
              { step: '03', icon: CheckCircle2, title: 'Execution & Support', desc: 'We handle the entire process, keeping you informed at every step until your goals are achieved.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="bg-background border border-border rounded-2xl p-8 text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-xs text-accent font-sans font-semibold tracking-widest uppercase mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Browse All</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">All Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.fullDescription}
                icon={service.icon}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPECIALISATION BAND ─── */}
      <section className="bg-accent py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 font-sans mb-8 max-w-xl mx-auto">
            Book a free 30-minute consultation and our experts will help identify the right service for your situation.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-lg font-bold font-sans hover:bg-white/90 transition-colors">
            Book Free Consultation
          </a>
        </div>
      </section>

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
