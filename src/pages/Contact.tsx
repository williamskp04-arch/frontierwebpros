import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-mist min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-display text-forest mb-6 tracking-tight">Let's <span className="italic font-light text-earth/60">Connect.</span></h1>
          <p className="text-charcoal/60 max-w-lg text-lg leading-relaxed">
            Ready to chart your path? Send us a message and we'll get back to you within 24 hours.
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-forest/5 p-16 rounded-[2rem] border border-forest/10 text-center"
              >
                <div className="w-20 h-20 bg-forest text-mist flex items-center justify-center rounded-full mx-auto mb-8">
                  <Send className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display text-forest mb-4">Message Transmitted!</h2>
                <p className="text-charcoal/60 mb-8">We've received your coordinates. A guide will reach out soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-forest font-bold border-b-2 border-forest/20 hover:border-forest transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-12 rounded-[2rem] shadow-sm border border-forest/5">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                    {error}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40 ml-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Muir"
                      className="w-full bg-mist/50 border border-forest/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-forest/10 focus:border-forest/30 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40 ml-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-mist/50 border border-forest/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-forest/10 focus:border-forest/30 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40 ml-1">Subject</label>
                  <select 
                    name="subject"
                    className="w-full bg-mist/50 border border-forest/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-forest/10 focus:border-forest/30 transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Small Business Web Design</option>
                    <option>Local SEO Audit Request</option>
                    <option>Marketing Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40 ml-1">Your Message</label>
                  <textarea 
                    required
                    name="message"
                    placeholder="Tell us about your business and how we can help you grow..."
                    className="w-full bg-mist/50 border border-forest/10 rounded-xl px-4 py-4 min-h-[160px] focus:outline-none focus:ring-2 focus:ring-forest/10 focus:border-forest/30 transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-forest text-mist font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-forest/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-forest border-l-2 border-forest pl-4">Contact Details</h3>
              <div className="space-y-8">
                <ContactInfoItem 
                  icon={<Mail />}
                  title="Email"
                  content="info@frontierwebpros.com"
                  href="mailto:info@frontierwebpros.com"
                />
                <ContactInfoItem 
                  icon={<Phone />}
                  title="Phone"
                  content="(801) 980-0391"
                  href="tel:8019800391"
                />
              </div>
            </div>

            <div className="p-8 bg-sand/30 rounded-2xl border border-forest/5">
              <h4 className="text-forest font-display font-bold mb-4">No Boundaries</h4>
              <p className="text-sm text-charcoal/60 leading-relaxed mb-6">
                Based in the heart of the Rockies, our business has no boundaries. We work with clients anywhere to help their small businesses thrive online.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Local Focus', 'USA Nationwide', 'Small Business', 'Direct Support'].map(tag => (
                  <span key={tag} className="text-[9px] font-bold tracking-widest uppercase bg-forest/5 text-forest/60 px-3 py-1 rounded-full border border-forest/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({ icon, title, content, href }: { icon: React.ReactElement, title: string, content: string, href?: string }) {
  return (
    <div className="group flex gap-6">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-forest shadow-sm border border-forest/5 group-hover:bg-forest group-hover:text-mist transition-all duration-500 shrink-0">
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-xs font-bold tracking-widest uppercase text-charcoal/30 mb-1">{title}</h4>
        {href ? (
          <a href={href} className="text-forest font-medium hover:text-sunrise-orange transition-colors truncate max-w-[200px] sm:max-w-none">{content}</a>
        ) : (
          <p className="text-forest font-medium">{content}</p>
        )}
      </div>
    </div>
  );
}
