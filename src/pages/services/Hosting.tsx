import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Server, Lock, LifeBuoy, Cloud, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Hosting() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-sand/10">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sunrise-orange text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
            >
              Secure Infrastructure
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display text-forest mb-8 italic font-light"
            >
              Websites Built for <br /><span className="not-italic font-bold underline decoration-sunrise-orange/20 underline-offset-8">Total Peace of Mind.</span>
            </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-charcoal/60 mb-12 leading-relaxed"
          >
            Don't let a slow or broken website cost you customers. We provide premium, local hosting that ensures your business stays online and performs flawlessly.
          </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <NavLink to="/contact" className="bg-forest text-mist px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-xl shadow-forest/10">
                Protect My Website <ArrowRight size={20} />
              </NavLink>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 relative">
             <div className="aspect-video bg-charcoal rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-forest/30 to-transparent"></div>
               <div className="flex gap-2 mb-8 relative z-10">
                 <div className="w-3 h-3 rounded-full bg-red-400 opacity-50" />
                 <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-50" />
                 <div className="w-3 h-3 rounded-full bg-green-400 opacity-50" />
               </div>
               <div className="space-y-4 relative z-10">
                 <div className="h-2 w-3/4 bg-mist/5 rounded-full animate-pulse" />
                 <div className="h-2 w-1/2 bg-mist/5 rounded-full animate-pulse delay-75" />
                 <div className="h-2 w-5/6 bg-mist/5 rounded-full animate-pulse delay-150" />
                 <div className="h-2 w-2/3 bg-mist/5 rounded-full animate-pulse delay-300" />
               </div>
               <div className="absolute bottom-8 right-8 text-sunrise-orange opacity-20 group-hover:opacity-40 transition-opacity">
                 <Server size={120} />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-forest mb-4">The Bedrock of Your Site</h2>
            <p className="text-charcoal/50 max-w-xl mx-auto">Premium features designed to give you peace of mind while your business scales.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Ultra-Fast Loading", desc: "Your customers won't be kept waiting. Our optimized servers ensure your site pops up instantly on any device." },
              { icon: <Lock />, title: "Always Protected", desc: "We handle the security, with automated backups and encryption to keep your business data safe." },
              { icon: <ShieldCheck />, title: "24/7 Reliability", desc: "Your site stays online around the clock, so you never miss a lead or a customer inquiry." },
              { icon: <Cloud />, title: "Local & Fast", desc: "We use high-performance networks to make sure your site is fast for your local customers." },
              { icon: <LifeBuoy />, title: "Personal Support", desc: "If you have a question or need help, our local team is just a call or email away." },
              { icon: <Server />, title: "Grows With You", desc: "As your business attracts more visitors, we'll make sure your site has the power it needs." }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="p-8 border border-forest/5 rounded-3xl hover:border-sunrise-orange/20 transition-all group will-change-transform"
              >
                <div className="text-forest mb-6 group-hover:text-sunrise-orange transition-colors">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-display text-forest mb-3">{f.title}</h3>
                <p className="text-sm text-charcoal/50 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Tiers Mention */}
      <section className="py-24 px-6 bg-forest text-mist text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-8 italic font-light font-bold text-white">Your Business Stability <span className="not-italic font-bold">Starts Here.</span></h2>
          <p className="text-lg text-mist/60 mb-12 leading-relaxed">
            You have enough to worry about. Your website shouldn't be one of them. We handle the technical heavy lifting so you can focus on what you do best: running your business.
          </p>
          <div className="inline-block bg-white/5 border border-white/10 px-8 py-4 rounded-2xl mb-12">
            <span className="text-sunrise-orange font-bold mr-2">Starting at</span>
            <span className="text-4xl font-display font-bold">$49/month</span>
          </div>
          <br />
          <NavLink to="/contact" className="bg-sunrise-orange text-mist px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-xl shadow-sunrise-orange/20">
            Secure Your Hosting <ArrowRight size={20} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
