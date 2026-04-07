import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/content';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Globe, Scale, UserCheck, Target, Zap, Star, CheckCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

const iconMap: { [key: string]: React.ReactNode } = {
  Globe: <Globe className="w-10 h-10" />,
  Scale: <Scale className="w-10 h-10" />,
  UserCheck: <UserCheck className="w-10 h-10" />,
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services" className="text-accent hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  const relatedServices = services.filter((s) => s.id !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-sans text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* ─── HERO — full-width image with text overlay ─── */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={service.image || '/hero-consultation.jpg'}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
        <div className="absolute left-0 top-0 h-full w-1.5 bg-accent z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-5">
            {iconMap[service.icon]}
          </div>
          <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Walshkon Services</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight max-w-2xl">
            {service.title}
          </h1>
          <p className="text-white/70 font-sans text-lg max-w-2xl leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* ─── BENEFITS + IMAGE ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4">What You Get</p>
              <h2 className="text-3xl font-bold text-foreground mb-8">Key Benefits</h2>
              <ul className="space-y-6">
                {[
                  { title: 'Expert Guidance', desc: 'Professional consultants with deep industry expertise and proven track records' },
                  { title: 'Personalized Approach', desc: 'Tailored solutions built specifically around your situation and goals' },
                  { title: 'Transparent Process', desc: 'Clear communication at every step — no surprises, no hidden fees' },
                  { title: 'Proven Results', desc: '95% success rate across hundreds of client cases in this service area' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground font-sans mb-0.5">{item.title}</h4>
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.image || '/hero-consultation.jpg'}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl font-bold text-accent font-display">95%</div>
                <p className="text-foreground text-sm font-sans mt-0.5">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Advantage</p>
            <h2 className="text-4xl font-bold text-foreground">
              Why Choose Walshkon?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Focused Expertise', desc: `Specialized knowledge and experience in ${service.title.toLowerCase()} cases` },
              { icon: Zap, title: 'Quick Turnaround', desc: 'Efficient, streamlined processes without compromising quality or accuracy' },
              { icon: Star, title: 'Excellence', desc: 'Unwavering commitment to delivering exceptional, measurable results' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="border border-border rounded-2xl p-8 hover:border-accent/40 hover:bg-secondary transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-foreground/5 group-hover:bg-accent/10 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── RELATED SERVICES ─── */}
      {relatedServices.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">Explore More</p>
              <h2 className="text-4xl font-bold text-foreground">Related Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <ServiceCard
                  key={relatedService.id}
                  id={relatedService.id}
                  title={relatedService.title}
                  description={relatedService.shortDescription}
                  icon={relatedService.icon}
                  image={relatedService.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to Get Started?"
        description={`Contact us today to learn more about our ${service.title} and how we can help you succeed.`}
        buttonText="Schedule Consultation"
        buttonHref="/contact"
      />

      <Footer />
    </div>
  );
}
