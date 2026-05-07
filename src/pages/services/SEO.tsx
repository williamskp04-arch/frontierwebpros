import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Target, Search, BarChart3, Globe, Users, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function SEO() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#224458_1px,transparent_1px),linear-gradient(to_bottom,#224458_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sunrise-orange text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            Search Authority
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display text-forest mb-8 italic font-light"
          >
            Be the First Business Your <span className="not-italic font-bold">Customers See.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-charcoal/60 max-w-2xl mx-auto mb-12"
          >
            Don't let your competitors take the leads that belong to you. We help local business owners dominate search results and grow their revenue.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <NavLink to="/contact" className="group flex items-center gap-3 bg-forest text-mist px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-forest/10 mx-auto w-fit">
              Request My Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-forest py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24 text-center">
          {[
            { label: "Search Presence", value: "Increased Visibility" },
            { label: "Website Traffic", value: "Qualified Leads" },
            { label: "Business Results", value: "Long-Term Growth" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-2xl md:text-3xl font-display font-bold text-mist">{stat.value}</div>
              <div className="text-sunrise-orange text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-sand/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target />, title: "Keyword Strategy", desc: "Finding the exact phrases your customers use to find businesses just like yours." },
              { icon: <Search />, title: "Technical SEO", desc: "Deep infrastructure fixes to ensure Google's crawlers can navigate your site with ease." },
              { icon: <Globe />, title: "Local Authority", desc: "Optimizing your Google Business Profile to dominate your local map results." },
              { icon: <BarChart3 />, title: "Data Reporting", desc: "Transparent monthly insights that show exactly how your traffic is growing." }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-[2rem] border border-forest/5 hover:shadow-2xl hover:shadow-forest/5 transition-all group text-center will-change-transform"
              >
                <div className="w-14 h-14 bg-forest/5 rounded-2xl flex items-center justify-center text-forest mb-6 mx-auto group-hover:bg-sunrise-orange group-hover:text-white transition-colors">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-display text-forest mb-4">{s.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="bg-sand/30 p-12 md:p-20 rounded-[3rem] border border-forest/5 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-display text-forest mb-8 italic font-light">Your business deserves to be <span className="not-italic font-bold">found.</span></h2>
              <p className="text-lg text-charcoal/60 mb-8 leading-relaxed">
                93% of online experiences begin with a search engine. If you're not on the first page, your customers are finding your competitors instead. We understand how frustrating it is to have a great business that people just can't find online. We bridge that gap.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-forest font-bold"><TrendingUp size={18} className="text-sunrise-orange" /> More Customers Over Time</div>
                  <p className="text-sm text-charcoal/50">Organic leads work for you 24/7, even while you're busy running your business.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-forest font-bold"><Users size={18} className="text-sunrise-orange" /> Build Immediate Trust</div>
                  <p className="text-sm text-charcoal/50">Ranking high signals to local customers that you are the most reliable choice in your industry.</p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-1/3 h-full bg-forest/5 -skew-x-12 translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 bg-sand/20">
        <div className="max-w-4xl mx-auto text-center bg-forest text-mist p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display mb-8">Ready to dominate local search?</h2>
            <p className="text-mist/60 text-lg mb-12 max-w-2xl mx-auto">
              Stop losing customers to the competition. Results-focused SEO packages starting at <span className="text-mist font-bold">$499/month.</span>
            </p>
            <NavLink to="/contact" className="bg-sunrise-orange text-mist px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-3">
              Improve My Ranking <ArrowRight size={20} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
