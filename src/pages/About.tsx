import React from 'react';
import { motion } from 'motion/react';
import { Compass, Users, Target, ShieldCheck } from 'lucide-react';
import { SafeImage } from '@/src/components/SafeImage';

export default function About() {
  return (
    <div className="bg-mist min-h-screen">
      {/* Story Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-forest text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-display text-forest mb-8 leading-[0.9]">Forging Paths in the <span className="italic font-light">Wild Web.</span></h1>
            <div className="space-y-6 text-charcoal/70 leading-relaxed text-lg">
              <p>
                Frontier Web Pros started with a simple observation: small business owners are masters of their craft, but the digital world can feel like an uncharted wilderness.
              </p>
              <p>
                We decided to build the bridges. Our mission is to take the technical burden off your shoulders so you can focus on what you do best—serving your customers and building your community.
              </p>
              <p>
                We pride ourselves on being more than just a service provider. We are your local partners in digital growth, dedicated to ensuring every small business has a fair shot at the digital frontier.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] bg-sand rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <SafeImage 
                src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=1000" 
                alt="Architecture and Nature" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-forest/5 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-earth/10 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-charcoal text-mist">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-display mb-6">Our Core Compass</h2>
            <p className="text-mist/50">The values that drive every line of code we write and every strategy we implement.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <ValueCard 
              icon={<Compass className="w-10 h-10" />}
              title="Clarity"
              description="No technical jargon. Just clear communication and transparent strategies that you can actually understand."
            />
            <ValueCard 
              icon={<ShieldCheck className="w-10 h-10" />}
              title="Reliability"
              description="Like a well-built mountain shelter, our products are designed to withstand the elements and perform when it matters most."
            />
            <ValueCard 
              icon={<Target className="w-10 h-10" />}
              title="Growth"
              description="We don't just maintain; we advance. Every project is focused on moving your business forward into new territories."
            />
          </div>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-display text-forest mb-12">Meet the Founder</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="group">
              <div className="w-64 h-80 bg-sand rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500 shadow-xl border border-forest/5">
                <SafeImage 
                  src="/headshot.jpeg" 
                  alt="Kaiden Williams" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display text-forest font-bold">Kaiden Williams</h3>
              <p className="text-sm text-charcoal/40 uppercase tracking-widest mt-2">Founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="space-y-6 text-center md:text-left">
      <div className="text-sand/40 inline-block p-4 border border-mist/10 rounded-2xl">{icon}</div>
      <h3 className="text-2xl font-display">{title}</h3>
      <p className="text-mist/50 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
