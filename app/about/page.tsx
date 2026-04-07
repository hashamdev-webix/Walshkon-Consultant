import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { companyInfo, benefits } from '@/data/content';
import Image from 'next/image';
import { Globe, Target, Eye, Users, Award, ShieldCheck, Building2, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO — full-width image banner with overlay ─── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Walshkon consulting team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Who We Are</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            About<br /><span className="text-accent">Walshkon</span>
          </h1>
          <p className="text-white/70 text-lg mt-4 font-sans max-w-xl">
            Your trusted partner in professional consulting services
          </p>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Built on Trust &<br />Excellence
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed font-sans">
                {companyInfo.longDescription}
              </p>
              <p className="text-muted-foreground mb-5 leading-relaxed font-sans">
                Founded on principles of excellence and integrity, Walshkon Consultants has helped hundreds of clients achieve their professional goals. Our team of experienced consultants brings together expertise across immigration, legal services, recruitment, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                We believe in building lasting relationships with our clients, understanding their unique needs, and delivering solutions that exceed expectations.
              </p>
            </div>

            <div className="relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Global consulting network" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/15" />
              </div>
              {/* Corner accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-accent rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-accent rounded-br-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS — horizontal dark band ─── */}
      <section className="bg-[oklch(0.10_0_0)] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '10+', label: 'Years Experience' },
              { value: '95%', label: 'Success Rate' },
              { value: '8+', label: 'Service Areas' },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-4xl font-bold text-accent font-display mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm font-sans uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background border border-border rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[80px]" />
              <div className="mb-5 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Dedicated to providing quality professional services and fostering holistic growth. We strive to uphold our values and assist you to realize your potential and grow.
              </p>
            </div>

            <div className="bg-accent rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[80px]" />
              <div className="mb-5 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed font-sans">
                To be the most trusted and preferred consulting firm, recognized for excellence in service delivery and client satisfaction across North America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">What Guides Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Integrity', description: 'Honest and ethical in every client interaction and business dealing' },
              { icon: Building2, title: 'Innovation', description: 'Creative solutions to complex and evolving professional challenges' },
              { icon: Award, title: 'Excellence', description: 'Uncompromising commitment to the highest professional standards' },
              { icon: Globe, title: 'Client Focus', description: 'Your success and satisfaction are always our primary priority' },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group border border-border rounded-2xl p-8 hover:border-accent/40 hover:bg-secondary transition-all">
                  <div className="mb-5 w-12 h-12 rounded-xl bg-foreground/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                    <IconComponent className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">Why Walshkon</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Why Choose<br />Walshkon?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-foreground font-sans text-sm leading-relaxed pt-1.5">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/immigration-services.jpg" alt="Why choose Walshkon" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <blockquote className="text-white font-display text-xl italic">
                  &ldquo;Your success is our mission.&rdquo;
                </blockquote>
                <p className="text-white/60 font-sans text-sm mt-2">— Walshkon Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">The People</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Expert Team</h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            Our team consists of experienced professionals with deep expertise in immigration consulting, legal services, recruitment, and more. Each member brings years of industry experience and a commitment to client success.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold font-sans hover:opacity-90 transition-opacity">
            Connect With Our Team
          </a>
        </div>
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
