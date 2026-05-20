import React from 'react';
import { motion } from 'motion/react';
import { Layout, Search, Megaphone, Smartphone, Layers, LineChart, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Conversion-Focused Web Design",
      price: "499",
      description: "Own your digital territory with a high-performance website engineered to convert local visitors into loyal customers. We blend professional branding with technical excellence to build immediate trust from day one.",
      features: ["Lead-Generating Landing Pages", "Mobile-First Infrastructure", "Frictionless Conversion Funnels", "Premium Visual Identity"],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
      path: "/services/web-design"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Local Market Domination",
      price: "499/mo",
      description: "Scale your reach by claiming the top spot in local search results. Our strategic SEO approach ensures your small business is the first choice whenever—and wherever—customers search for your expertise.",
      features: ["Regional Search Domination", "Google Profile Optimization", "High-Intent Keyword Targeting", "Metric-Driven Growth Reports"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      path: "/services/seo"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Managed Growth Infrastructure",
      price: "49/mo",
      description: "Fortify your online presence with industry-leading speed, security, and uptime. We shoulder the technical maintenance so you can dedicate 100% of your energy to scaling your operations.",
      features: ["Next-Gen Speed Optimization", "Proactive Security Shielding", "Zero-Worry Maintenance", "Priority Technical Support"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
      path: "/services/hosting"
    }
  ];

  return (
    <div className="bg-mist min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 px-6 border-b border-forest/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display text-forest mb-6 tracking-tight">Built for Your <span className="italic font-light text-earth/60">Success.</span></h1>
            <p className="text-lg text-charcoal/60 leading-relaxed">
              We provide the essential digital tools small and local businesses need to grow, attract more clients, and reach their goals without the technical headaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, index) => (
            <NavLink 
              key={index}
              to={service.path}
              className="block group no-underline"
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-16 rounded-[3rem] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-forest/5 border border-transparent hover:border-forest/5 will-change-transform"
              >
                <div className={index % 2 === 1 ? 'md:order-last' : ''}>
                  <div className="w-16 h-16 bg-forest/5 flex items-center justify-center rounded-2xl text-forest mb-8 group-hover:bg-sunrise-orange group-hover:text-mist transition-colors duration-500">
                    {service.icon}
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-4xl font-display text-forest group-hover:text-sunrise-orange transition-colors">{service.title}</h2>
                    <div className="text-right">
                      <span className="text-xs font-bold tracking-widest uppercase text-charcoal/40 block">Starting at</span>
                      <span className="text-2xl font-display text-sunrise-orange">${service.price}</span>
                    </div>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed text-lg mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-forest/70">
                        <div className="w-1.5 h-1.5 bg-forest/20 rounded-full group-hover:bg-sunrise-orange/40 transition-colors" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sunrise-orange font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                    Explore Service <ArrowRight size={16} />
                  </div>
                </div>
                <div className="aspect-video bg-sand/30 rounded-3xl overflow-hidden shadow-inner border border-forest/5 flex items-center justify-center relative">
                  <div 
                    className="w-full h-full group-hover:scale-105 transition-transform duration-1000 bg-cover bg-center brightness-110 saturate-110" 
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                </div>
              </motion.div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-forest flex justify-center text-center">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-display text-mist mb-8 leading-tight">Ready to map out your next move?</h2>
          <NavLink 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-sand text-forest px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Request a Custom Quote <ArrowRight size={20} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
