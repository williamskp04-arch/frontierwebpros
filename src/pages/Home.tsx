import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Zap, BarChart3, ShieldCheck, Wrench, Home as HomeIcon, Briefcase, Coffee } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SafeImage } from '@/src/components/SafeImage';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=2000" 
            alt="Digital Frontier Mountains" 
            className="w-full h-full object-cover opacity-30 scale-105 saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mist via-transparent to-mist"></div>
          {/* Subtle Digital Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#224458_1px,transparent_1px),linear-gradient(to_bottom,#224458_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-forest/5 text-forest text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-forest/10">
              Your Digital Pioneers
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] text-forest mb-8 tracking-tighter">
              Websites Built to Grow Your <span className="italic font-light text-earth/60">Business.</span>
            </h1>
            <p className="text-lg text-charcoal/70 max-w-md mb-10 leading-relaxed">
              We help local business owners get more customers and more leads with high-performance websites tailored to your specific goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink 
                to="/contact" 
                className="bg-forest text-mist px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-forest/90 transition-transform hover:scale-105 shadow-lg"
              >
                Build My Website <ArrowRight size={18} />
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className="px-8 py-4 rounded-full font-bold border border-forest/20 text-forest hover:bg-forest/5 transition-all"
              >
                Explore Layouts
              </NavLink>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:block relative"
          >
            <div className="aspect-square bg-forest rounded-3xl overflow-hidden shadow-2xl rotate-3 relative border-[12px] border-white/50 backdrop-blur-md">
              <SafeImage 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital landscape" 
                className="w-full h-full object-cover opacity-60 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest/80 via-transparent to-sunrise-orange/20"></div>
              {/* Abstract UI Elements */}
              <div className="absolute top-8 left-8 w-24 h-1 bg-mist/20 rounded-full blur-[1px]"></div>
              <div className="absolute top-12 left-8 w-16 h-1 bg-mist/10 rounded-full blur-[1px]"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-2xl border border-forest/5 max-w-[280px] -rotate-3 z-20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-sunrise-orange/10 rounded-lg flex items-center justify-center">
                  <Zap size={16} className="text-sunrise-orange" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Growth Guarantee</span>
              </div>
              <h3 className="text-xl font-display font-bold text-forest mb-2 leading-tight">Websites that generate leads.</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">Built to bring you more customers and grow your revenue automatically.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Guide Section */}
      <section id="why-choose-us" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <span className="text-sunrise-orange text-xs font-bold tracking-[0.4em] uppercase mb-4 block">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-display text-forest mb-8 italic font-light">
              Is your website <span className="not-italic font-bold">costing you customers?</span>
            </h2>
            <p className="text-lg text-charcoal/60 mb-8 leading-relaxed">
              In today's market, an invisible business is a dying business. If your website is slow, outdated, or hard to find, you're losing qualified leads to your competitors every single day. We understand the frustration of working hard but feeling held back by your digital presence.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center shrink-0">
                  <Zap size={20} className="text-sunrise-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-forest mb-1">Your brand deserves to stand out.</h4>
                  <p className="text-sm text-charcoal/50">Transition from an overlooked local shop to a recognized market leader.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center shrink-0">
                  <BarChart3 size={20} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-bold text-forest mb-1">Clear strategy, real results.</h4>
                  <p className="text-sm text-charcoal/50">We build digital tools that act as your hardest-working employees, 24/7.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
             <div className="aspect-[4/5] bg-sand/20 rounded-[3rem] overflow-hidden relative shadow-2xl">
                <SafeImage 
                  src="https://images.unsplash.com/photo-1600880212340-02d956ea0a8c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Business Growth and Strategy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 3-Step Plan Section */}
      <section className="py-24 px-6 bg-sand/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sunrise-orange text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Proven Path</span>
            <h2 className="text-4xl md:text-6xl font-display text-forest mb-6 italic font-light">Simple Steps to <span className="not-italic font-bold">Dominate Your Market.</span></h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">Scaling your digital presence shouldn't be complicated. We keep it simple.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Strategy Session", desc: "We sit down to understand your business goals and identify the best digital blueprint for your growth." },
              { step: "02", title: "Custom Build & Optimize", desc: "Our team crafts a high-speed, conversion-focused site tailored specifically to your brand identity." },
              { step: "03", title: "Launch & Scale", desc: "Go live with confidence and watch your website transform from a brochure into a lead-generation engine." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-forest/5 shadow-sm text-center">
                <div className="w-16 h-16 bg-forest text-mist rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-display font-bold">
                  {s.step}
                </div>
                <h3 className="text-2xl font-display text-forest mb-4">{s.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <NavLink 
              to="/contact" 
              className="bg-forest text-mist px-10 py-5 rounded-full font-bold inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
            >
              Get a Fast Quote <ArrowRight size={20} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="what-we-build" className="py-32 px-6 bg-forest text-mist">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Expert Solutions for the Digital Frontier</h2>
              <p className="text-mist/60 leading-relaxed">
                We don't just build websites; we create competitive advantages. Our services are designed to give local businesses the same technical firepower as national brands.
              </p>
            </div>
            <NavLink to="/services" className="group flex items-center gap-2 text-sand font-bold tracking-widest uppercase text-xs">
              View All Services <span className="group-hover:translate-x-2 transition-transform">→</span>
            </NavLink>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Globe size={40} />}
              title="Modern Web Design"
              description="High-performance websites designed to build immediate trust and convert local visitors into loyal customers."
              path="/services/web-design"
            />
            <ServiceCard 
              icon={<BarChart3 size={40} />}
              title="Local SEO Mastery"
              description="Ensure your business appears exactly when and where your customers are searching for your expertise."
              path="/services/seo"
            />
            <ServiceCard 
              icon={<ShieldCheck size={40} />}
              title="Concierge Hosting"
              description="Fast, secure, and fully managed. We handle the tech so you can focus on running your business."
              path="/services/hosting"
            />
          </div>
        </div>
      </section>

      {/* Featured Templates Preview Section */}
      <section id="our-work" className="py-40 px-6 bg-sand/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-sunrise-orange text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Industry Standards</span>
              <h2 className="text-4xl md:text-6xl font-display text-forest mb-6 italic font-light">Proven <span className="not-italic font-bold">Foundations.</span></h2>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                Explore our collection of industry-specific layouts. These aren't just templates—they are data-driven structures <span className="text-forest font-bold">optimized for conversion</span> and built for the specific needs of local professionals.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <NavLink to="/portfolio" className="group flex items-center gap-3 bg-forest text-mist px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-forest/10">
                View All Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </motion.div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-display text-forest font-bold">Optimized for Your Industry</h3>
            <div className="h-1 w-20 bg-sunrise-orange mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'trades', name: 'Home Services', icon: <Wrench size={24} /> },
              { id: 'real-estate', name: 'Real Estate', icon: <HomeIcon size={24} /> },
              { id: 'professional', name: 'Professional', icon: <Briefcase size={24} /> },
              { id: 'hospitality', name: 'Hospitality', icon: <Coffee size={24} /> }
            ].map((cat) => (
              <NavLink 
                key={cat.id} 
                to={`/portfolio`}
                className="bg-white p-8 rounded-[2rem] border border-forest/5 hover:shadow-2xl hover:shadow-forest/5 transition-all group"
              >
                <div className="w-12 h-12 bg-forest/5 rounded-xl flex items-center justify-center text-forest mb-6 group-hover:bg-sunrise-orange group-hover:text-mist transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-display text-forest mb-2">{cat.name}</h3>
                <p className="text-sm text-charcoal/40 mb-4 font-medium">Packages from $499</p>
                <span className="text-xs font-bold text-sunrise-orange flex items-center gap-2">
                  View Setup <ArrowRight size={14} />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="lets-talk" className="py-24 bg-forest text-mist flex justify-center text-center px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#mist_1px,transparent_1px),linear-gradient(to_bottom,#mist_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        <div className="max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-display mb-8 italic font-light font-bold text-white">
            Stop losing customers <span className="not-italic font-bold">to competitors.</span>
          </h2>
          <p className="text-xl text-mist/60 mb-12 leading-relaxed">
            Every day you wait is a customer you could have served. Let's build a professional online presence that actually works for your business.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink 
              to="/contact" 
              className="bg-sunrise-orange text-mist px-12 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 shadow-2xl shadow-sunrise-orange/20 transition-all"
            >
              Build My Website <ArrowRight size={20} />
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, path }: { icon: React.ReactNode, title: string, description: string, path: string }) {
  return (
    <NavLink 
      to={path}
      className="p-10 border border-mist/10 hover:bg-mist/10 transition-all group block relative overflow-hidden active:scale-[0.98]"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight size={20} className="text-sunrise-orange" />
      </div>
      <div className="text-sand/40 mb-8 group-hover:text-sunrise-orange transition-colors group-hover:scale-110 duration-500 origin-left">{icon}</div>
      <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-mist/50 text-sm leading-relaxed group-hover:text-mist/80 transition-colors">{description}</p>
      
      <div className="mt-8 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sand/40 group-hover:text-sunrise-orange transition-colors">
        Learn More <ArrowRight size={14} />
      </div>
    </NavLink>
  );
}
