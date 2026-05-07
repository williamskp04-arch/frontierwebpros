import React from 'react';
import { motion } from 'motion/react';
import { Layout, Smartphone, Zap, Code, Shield, Palette, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SafeImage } from '@/src/components/SafeImage';

export default function WebDesign() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-forest text-mist">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#mist_1px,transparent_1px),linear-gradient(to_bottom,#mist_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sunrise-orange text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            Digital Strategy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display mb-8 italic font-light"
          >
            Websites Built to <span className="not-italic font-bold text-white">Drive Revenue and Growth.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mist/60 max-w-2xl mx-auto mb-8"
          >
            A website that just sits there is a liability. We build high-performance growth engines that turn your local visitors into loyal, paying customers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-12 flex justify-center gap-4 text-xs font-bold tracking-widest uppercase text-sunrise-orange/60"
          >
            <span>Fully Custom Builds</span>
            <span className="text-mist/20">•</span>
            <span>Optimized Layouts</span>
            <span className="text-mist/20">•</span>
            <span>Local Focus</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <NavLink to="/contact" className="bg-sunrise-orange text-mist px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-xl shadow-sunrise-orange/20">
              Build My Website <ArrowRight size={20} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-sand/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Smartphone />, title: "Mobile-First Design", desc: "Your site will look and perform flawlessly on every screen size, from pocket to desktop." },
              { icon: <Zap />, title: "Lightning Fast", desc: "Optimized for speed to keep your customers engaged and improve your search rankings." },
              { icon: <Shield />, title: "Secure & Reliable", desc: "Built with the latest security standards to protect your brand and your customers' data." },
              { icon: <Zap />, title: "AI-Powered Efficiency", desc: "We leverage modern AI tools to build your fully customized website faster and more efficiently than traditional methods." },
              { icon: <Palette />, title: "Brand Alignment", desc: "We ensure your digital presence is a perfect extension of your physical brand identity." },
              { icon: <Layout />, title: "Conversion Focused", desc: "Designed with clear user paths and calls-to-action to turn visitors into loyal customers." }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-10 rounded-[2.5rem] border border-forest/5 shadow-sm hover:shadow-xl hover:shadow-forest/5 transition-all group will-change-transform"
              >
                <div className="w-14 h-14 bg-forest/5 rounded-2xl flex items-center justify-center text-forest mb-6 group-hover:bg-sunrise-orange group-hover:text-mist transition-colors">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-2xl font-display text-forest mb-4">{f.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <span className="text-sunrise-orange text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Proven Path</span>
              <h2 className="text-4xl md:text-5xl font-display text-forest mb-8 italic font-light">Our <span className="not-italic font-bold underline decoration-sunrise-orange/20 underline-offset-8">Design Process.</span></h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Choose Your Starting Point", desc: "Decide between a blank-canvas custom build or one of our proven, industry-optimized starting layouts." },
                  { step: "02", title: "Strategy & Customization", desc: "We tailor every element of the design and functionality to match your business goals and local brand identity." },
                  { step: "03", title: "AI-Enhanced Precision", desc: "We use modern technology and AI-driven workflows to build your site with surgical precision, ensuring it's fast, secure, and ready for launch." },
                  { step: "04", title: "Launch & Growth", desc: "We set you live and provide the training you need to manage your new digital home with confidence." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-2xl font-display text-sunrise-orange/30 font-bold">{s.step}</span>
                    <div>
                      <h4 className="text-xl font-display text-forest mb-2">{s.title}</h4>
                      <p className="text-charcoal/60">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
               <div className="aspect-square bg-forest rounded-[3rem] overflow-hidden rotate-3 relative shadow-2xl">
                  <SafeImage 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                    alt="Design Process" 
                    className="w-full h-full object-cover opacity-40 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-forest/80 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 bg-sand/20">
        <div className="max-w-4xl mx-auto text-center bg-forest text-mist p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display mb-8">Stop being invisible to your customers.</h2>
            <p className="text-mist/60 text-lg mb-12 max-w-2xl mx-auto">
              Get a professional website that works as hard as you do. Packages tailored for your success starting at <span className="text-mist font-bold">$499.</span>
            </p>
            <NavLink to="/contact" className="bg-sunrise-orange text-mist px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-3">
              Request Your Quote <ArrowRight size={20} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
