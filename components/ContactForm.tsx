'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-foreground font-semibold mb-2">
          Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          required
          className="w-full px-4 py-3 bg-background text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-foreground font-semibold mb-2">
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          className="w-full px-4 py-3 bg-background text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-foreground font-semibold mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-background text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200">
          Message sent successfully! We&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
          Error sending message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-accent-foreground py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
