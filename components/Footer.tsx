'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { companyInfo, footerLinks, navItems } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.10_0_0)] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image src="/logo.webp" alt="Walshkon logo" width={60} height={60} className="rounded-lg" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-white font-display tracking-tight">Walshkon</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-sans">Consultant</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to providing quality professional consulting services. We strive to uphold our values and help you realize your potential and grow.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-accent hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-accent hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-accent hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold font-sans uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold font-sans uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.slice(0, 6).map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-sm font-semibold font-sans uppercase tracking-wider mb-5">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-accent transition-colors text-sm">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-accent transition-colors text-sm break-all">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">{companyInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Walshkon Consultants. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
