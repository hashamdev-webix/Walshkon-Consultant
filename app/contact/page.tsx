import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { companyInfo } from '@/data/content';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Zap, Users, Shield } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO — dark full-width banner (unique to contact page) ─── */}
      <section className="relative bg-[oklch(0.10_0_0)] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://plus.unsplash.com/premium_photo-1661301084402-1a0452b5850e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">Reach Out</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Let&apos;s <span className="text-accent">Talk</span>
          </h1>
          <p className="text-white/65 font-sans text-lg max-w-xl mx-auto">
            Have a question or ready to get started? Our team of experts is here to help you find the right path forward.
          </p>
        </div>
      </section>

      {/* ─── CONTACT METHOD CARDS (3 across) ─── */}
      <section className="py-0 px-4 sm:px-6 lg:px-8 -mt-1">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-border shadow-xl">
            {[
              { icon: Phone, title: 'Call Us', value: companyInfo.phone, sub: 'Mon–Fri, 9am – 6pm', href: `tel:${companyInfo.phone}` },
              { icon: Mail, title: 'Email Us', value: companyInfo.email, sub: 'Response within 24hrs', href: `mailto:${companyInfo.email}` },
              { icon: MapPin, title: 'Visit Us', value: 'Calgary, AB', sub: companyInfo.address, href: '#' },
            ].map(({ icon: Icon, title, value, sub, href }, i) => (
              <a key={title} href={href}
                className={`group flex flex-col items-center text-center py-10 px-8 bg-card hover:bg-accent transition-all cursor-pointer ${i < 2 ? 'border-r border-border' : ''}`}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-foreground group-hover:text-white font-semibold font-sans mb-1 transition-colors">{title}</h3>
                <p className="text-foreground group-hover:text-white text-sm font-medium font-sans mb-1 transition-colors">{value}</p>
                <p className="text-muted-foreground group-hover:text-white/70 text-xs font-sans transition-colors">{sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTACT SECTION ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Contact Details</p>
                <h2 className="text-3xl font-bold text-foreground mb-2">Get In Touch</h2>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  We&apos;re here to help. Reach out through any of the channels below and we&apos;ll get back to you promptly.
                </p>
              </div>

              {/* Detail items */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground font-sans mb-0.5">Email</h3>
                    <a href={`mailto:${companyInfo.email}`} className="text-muted-foreground hover:text-accent text-sm font-sans transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground font-sans mb-0.5">Phone</h3>
                    <a href={`tel:${companyInfo.phone}`} className="text-muted-foreground hover:text-accent text-sm font-sans transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground font-sans mb-0.5">Address</h3>
                    <p className="text-muted-foreground text-sm font-sans">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground font-sans mb-0.5">Business Hours</h3>
                    <p className="text-muted-foreground text-sm font-sans">Mon – Fri: 9:00 AM – 6:00 PM</p>
                    <p className="text-muted-foreground text-sm font-sans">Sat: 10:00 AM – 4:00 PM</p>
                    <p className="text-muted-foreground text-sm font-sans">Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="border border-border rounded-xl p-5">
                <h3 className="text-sm font-semibold text-foreground font-sans mb-4">Why Contact Us?</h3>
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
            </div>

            {/* Right — Form (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-10">
                <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-2">Message Us</p>
                <h2 className="text-2xl font-bold text-foreground mb-1">Send a Message</h2>
                <p className="text-muted-foreground font-sans text-sm mb-8">
                  Fill out the form and one of our consultants will be in touch shortly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATION MAP PLACEHOLDER ─── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border bg-secondary h-64 flex items-center justify-center relative">
            <Image src="/about-company.jpg" alt="Calgary office" fill className="object-cover opacity-30" />
            <div className="relative z-10 text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-foreground font-display font-bold text-lg">Unit 307-B, 3016 5 Ave NE</p>
              <p className="text-muted-foreground font-sans text-sm">Calgary, AB T2A 5L7</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
