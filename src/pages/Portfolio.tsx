import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star,
  Phone,
  Mail,
  Clock,
  ExternalLink, 
  Palette, 
  Smartphone, 
  Zap, 
  Monitor, 
  CheckCircle2, 
  ArrowRight, 
  Home as HomeIcon, 
  Droplets, 
  Wind, 
  TrendingUp, 
  Map, 
  Gavel, 
  PieChart, 
  Shield, 
  Bed, 
  Utensils, 
  Telescope,
  ChevronRight,
  Briefcase,
  Users,
  FileText,
  HelpCircle,
  Award,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Coffee,
  ShoppingBag,
  Scissors,
  Dumbbell,
  Calendar,
  ChefHat,
  ShoppingBasket
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { NavLink } from 'react-router-dom';
import { SafeImage } from '@/src/components/SafeImage';

const templates = [
  {
    id: 'trades',
    name: "Trade Services Template",
    vibe: "Hard-working / Trusted",
    category: "Home Services",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    features: ["Quick-Call Buttons", "Service Area Map", "Instant Quote Form", "Before/After Gallery"],
    color: "bg-deep-frontier",
    sampleContent: {
      hero: "Reliable Home Service Professionals You Can Trust",
      sub: "Fast, affordable, and high-quality service for your home or business.",
      aboutTitle: "Why Choose Us",
      aboutText: "We take pride in our craft and serve our community with integrity.",
      trustBadges: ["Licensed & Insured", "Same-Day Service", "Satisfaction Guaranteed"],
      services: [
        { title: "Plumbing", icon: "Droplets", desc: "Expert leak repairs, pipe installations, and drain cleaning." },
        { title: "Electrical", icon: "Zap", desc: "Safe wiring, panel upgrades, and lighting installations." },
        { title: "HVAC", icon: "Wind", desc: "Heating and cooling maintenance for year-round comfort." },
        { title: "Roofing", icon: "Home", desc: "Durable roof repairs and complete replacements." }
      ],
      valueProps: [
        { title: "Upfront Pricing", icon: "PieChart", desc: "No hidden fees, ever." },
        { title: "Fast Response", icon: "Zap", desc: "We're there when you need us." },
        { title: "Certified Pros", icon: "Shield", desc: "Highly trained technicians." }
      ],
      projects: [
        { title: "Kitchen Remodel", before: "https://images.unsplash.com/photo-1556912177-c54030639a6d?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1556911220-e15021a81b84?auto=format&fit=crop&q=80&w=400" },
        { title: "Bathroom Pipe Repair", before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1507652313519-d45101a056a2?auto=format&fit=crop&q=80&w=400" },
        { title: "Electrical Panel Upgrade", before: "https://images.unsplash.com/photo-1558448243-239cf2e09156?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1453814231841-36078aa0a919?auto=format&fit=crop&q=80&w=400" }
      ],
      reviews: [
        { name: "John D.", city: "Denver", text: "Top-notch service! They fixed my leak in record time.", stars: 5 },
        { name: "Sarah M.", city: "Boulder", text: "Extremely professional and clean work. Highly recommend.", stars: 5 },
        { name: "Mike L.", city: "Aurora", text: "Fair pricing and very knowledgeable technicians.", stars: 4 }
      ],
      layoutType: 'business'
    }
  },
  {
    id: 'real-estate',
    name: "Real Estate Template",
    vibe: "High-End / Spacious",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    features: ["Property Showcase", "Virtual Tour Ready", "Agent Profiles"],
    color: "bg-frontier-blue",
    sampleContent: {
      hero: "Find Your Perfect Place in the Modern Frontier.",
      sub: "Exclusive luxury listings curated for those who value space, design, and connection to nature.",
      aboutTitle: "Reshaping Local Living",
      aboutText: "We don't just sell houses; we curate lifestyles. Our properties are chosen for their unique architectural integrity and prime locations.",
      points: ["Exclusive Off-Market Access", "Professional Staging Services", "Concierge Closing Support"],
      services: [
        { title: "Luxury Listings", icon: "Home", desc: "Bespoke properties with unparalleled views." },
        { title: "Investment Consulting", icon: "TrendingUp", desc: "Data-driven insights for real estate growth." },
        { title: "Relocation Experts", icon: "Map", desc: "Seamless transitions to your new neighborhood." }
      ],
      layoutType: 'gallery'
    }
  },
  {
    id: 'professional',
    name: "Professional Services Template",
    vibe: "Clean / Authoritative",
    category: "Professional Services",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    features: ["White-paper Downloads", "Case Study Layout", "Expert Team Grid"],
    color: "bg-slate-gray",
    sampleContent: {
      hero: "Strategic Guidance for the Digital Age.",
      sub: "Providing elite legal and financial consulting to help businesses navigate complex transitions with confidence.",
      aboutTitle: "Integrity Driven Strategy",
      aboutText: "Canyon Advisory was founded on the principle that true guidance requires both deep expertise and unwavering ethical standards.",
      points: ["Bespoke Risk Management", "Full-Spectrum Legal Support", "Cross-Border Wealth Strategy"],
      services: [
        { title: "Corporate Law", icon: "Gavel", desc: "Navigating regulations with surgical precision." },
        { title: "Wealth Advisory", icon: "PieChart", desc: "Protecting and growing your legacy assets." },
        { title: "Crisis Management", icon: "Shield", desc: "Strategic response for when it matters most." }
      ],
      layoutType: 'corporate'
    }
  },
  {
    id: 'hospitality',
    name: "Hospitality & Retail Template",
    vibe: "Warm / Inviting",
    category: "Hospitality & Retail",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    features: ["Reservation System", "Visual Lookbook", "Story-driven Blog"],
    color: "bg-sunrise-orange",
    sampleContent: {
      hero: "A Sanctuary Designed for the Brave Soul.",
      sub: "Experience the perfect blend of rugged adventure and uncompromising hotel-style comfort.",
      aboutTitle: "Escape the Noise",
      aboutText: "We created The Wilder Stay to be more than just a hotel. It's a return to what matters: firelight, silence, and the stars.",
      points: ["Chef-Curated Local Menu", "Guided Wilderness Tours", "Sustainable Earth-First Design"],
      services: [
        { title: "Boutique Lodging", icon: "Bed", desc: "Custom cabins with panoramic mountain views." },
        { title: "The Hearth Kitchen", icon: "Utensils", desc: "Farm-to-table dining under the open sky." },
        { title: "Guided Experiences", icon: "Telescope", desc: "Expert-led stargazing and hiking trails." }
      ],
      layoutType: 'experience'
    }
  }
];

export default function Portfolio() {
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (activeTemplate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeTemplate]);

  const selected = templates.find(t => t.id === activeTemplate);

  return (
    <div className="bg-mist min-h-screen pb-24 px-6 text-forest">
      <div className="max-w-7xl mx-auto">
        <header className="pt-12 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <span className="text-sunrise-orange text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Proven Starting Points</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display mb-6">Optimized <span className="italic font-light">Layouts.</span></h1>
              <p className="text-charcoal/50 leading-relaxed text-lg">
                Don't settle for cookie-cutter. Start with an industry-vetted layout designed for results, then we'll customize it completely to match your business goals and unique brand.
              </p>
            </div>
            <div className="bg-sand/30 p-8 rounded-3xl border border-forest/10 max-w-sm">
              <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                <Palette size={20} className="text-sunrise-orange" />
                Need a fully unique design?
              </h3>
              <p className="text-sm text-charcoal/60 mb-4">We excel at creating 100% custom websites from the ground up if you need something beyond our proven layouts.</p>
              <NavLink to="/contact" className="text-sm font-bold border-b border-forest/20 hover:border-forest transition-all flex items-center gap-2">
                Let's build your custom frontier <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {templates.map((template) => (
            <motion.div 
              key={template.id}
              layoutId={template.id}
              onClick={() => setActiveTemplate(template.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-forest/5 group cursor-pointer hover:shadow-xl hover:shadow-forest/5 transition-all duration-500 will-change-transform"
            >
              <div className="relative aspect-video overflow-hidden">
                <SafeImage 
                  src={template.image} 
                  alt={template.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg text-forest shadow-sm">
                    <Monitor size={16} />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg text-charcoal/40 shadow-sm">
                    <Smartphone size={16} />
                  </div>
                </div>
              </div>
              <div className="p-10 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-sunrise-orange px-2 py-0.5 bg-sunrise-orange/5 rounded-md leading-none">
                      {template.category}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-charcoal/30">
                      {template.vibe}
                    </span>
                  </div>
                <h3 className="text-3xl font-display group-hover:text-sunrise-orange transition-colors">{template.name}</h3>
                <p className="text-sm text-charcoal/40 mb-4 font-medium">Starting at $499</p>
                </div>
                <div className="bg-mist p-3 rounded-xl group-hover:bg-forest group-hover:text-mist transition-colors">
                  <ExternalLink size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Template Detail Modal Overlay (Semi-interactive simulation) */}
        <AnimatePresence>
          {activeTemplate && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/40 backdrop-blur-sm p-4 sm:p-6"
              onClick={() => setActiveTemplate(null)}
            >
              <motion.div 
                layoutId={activeTemplate}
                className="bg-mist w-full max-w-6xl h-[90vh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header of Modal */}
                <div className="p-6 bg-white border-b border-forest/5 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-display text-forest">{selected?.name}</h2>
                    <p className="text-xs text-charcoal/40 uppercase tracking-widest">{selected?.category}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-mist p-1 rounded-lg border border-forest/5">
                      <button 
                        onClick={() => setViewMode('desktop')}
                        className={cn("p-2 rounded transition-colors", viewMode === 'desktop' ? "bg-white shadow-sm text-sunrise-orange" : "text-charcoal/40")}
                      >
                        <Monitor size={16} />
                      </button>
                      <button 
                        onClick={() => setViewMode('mobile')}
                        className={cn("p-2 rounded transition-colors", viewMode === 'mobile' ? "bg-white shadow-sm text-sunrise-orange" : "text-charcoal/40")}
                      >
                        <Smartphone size={16} />
                      </button>
                    </div>
                    <button 
                      onClick={() => setActiveTemplate(null)}
                      className="p-2 hover:bg-forest/5 rounded-full"
                    >
                      <Zap size={24} className="text-sunrise-orange rotate-12" />
                    </button>
                  </div>
                </div>
                <div className="flex-grow overflow-hidden flex flex-col md:flex-row">
                  {/* Mock Site Preview Area */}
                  <div className="w-full md:w-2/3 lg:w-3/4 bg-charcoal/5 p-4 sm:p-8 overflow-y-auto custom-scrollbar flex justify-center items-start">
                      {/* Layer 1: Positioning & Scale Wrapper - ALL transforms happen here */}
                      <div className={cn(
                        "transition-all duration-700 flex flex-col",
                        viewMode === 'desktop' ? "w-full" : "w-[340px] h-[750px] my-8 scale-95 sm:scale-100"
                      )}>
                        {/* Layer 2: Device Frame (Visual border and shadow) */}
                        <div className={cn(
                          "relative flex flex-col shadow-2xl h-full w-full",
                          viewMode === 'mobile' ? "rounded-[3rem] border-[12px] border-charcoal/90 bg-charcoal/90" : "bg-white rounded-t-xl"
                        )}>
                          {/* Layer 3: Inner Screen Container (Clipping) - STRICTLY NO TRANSFORMS HERE */}
                          <div className={cn(
                            "flex-grow relative overflow-hidden flex flex-col will-change-auto",
                            viewMode === 'mobile' ? "bg-white rounded-[2.25rem] w-full h-full" : "bg-white rounded-t-xl min-h-screen"
                          )}
                          style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }} // Extra safari/chrome clipping reinforcement
                          >
                            
                            {/* Notch area - moved inside clipped container for perfect alignment */}
                            {viewMode === 'mobile' && (
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-charcoal/90 rounded-b-xl z-50 pointer-events-none" />
                            )}

                            {viewMode === 'desktop' && (
                              <div className="h-8 bg-charcoal/5 flex items-center gap-1.5 px-4 shrink-0">
                                <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                                <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                                <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                              </div>
                            )}

                            {/* Scrolling Content Wrapper - isolated and relative for safe clipping */}
                            <div className={cn(
                              "flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar isolate relative flex flex-col will-change-auto",
                              viewMode === 'mobile' && "rounded-[2.25rem]"
                            )}>
                      
                      {/* Nav Mock */}
                      <div className="h-16 border-b border-forest/5 px-6 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20 shrink-0">
                        <div className="flex items-center gap-2">
                          <Zap size={16} className="text-sunrise-orange" />
                          <div className="w-20 h-3 bg-forest/10 rounded-full"></div>
                        </div>
                        <div className={cn("flex gap-4", viewMode === 'mobile' && "hidden")}>
                          {[1,2,3].map(i => <div key={i} className="w-10 h-1.5 bg-forest/5 rounded-full"></div>)}
                        </div>
                        <div className={cn("w-5 h-4 bg-forest/10 rounded flex flex-col justify-between p-0.5", viewMode === 'desktop' && "hidden")}>
                           <div className="h-0.5 w-full bg-forest/20" />
                           <div className="h-0.5 w-full bg-forest/20" />
                           <div className="h-0.5 w-full bg-forest/20" />
                        </div>
                      </div>
 
                      {/* Unique Layout Content Wrapper - Ensure natural expansion and scrolling */}
                      <div className="flex-grow w-full h-auto min-h-full flex flex-col">
                        {activeTemplate === 'trades' ? (
                          <TradeTemplatePreview viewMode={viewMode} color={selected?.color || 'bg-forest'} />
                        ) : activeTemplate === 'real-estate' ? (
                          <RealEstateTemplatePreview viewMode={viewMode} color={selected?.color || 'bg-frontier-blue'} />
                        ) : activeTemplate === 'professional' ? (
                          <ProfessionalTemplatePreview viewMode={viewMode} color={selected?.color || 'bg-slate-gray'} />
                        ) : activeTemplate === 'hospitality' ? (
                          <HospitalityTemplatePreview viewMode={viewMode} color={selected?.color || 'bg-sunrise-orange'} />
                        ) : (
                          <>
                            {/* Hero */}
                            <div className={cn(
                              "p-8 sm:p-20 text-center relative overflow-hidden",
                              selected?.sampleContent.layoutType === 'experience' ? "bg-forest text-mist" : "bg-white"
                            )}>
                          {selected?.sampleContent.layoutType === 'experience' && (
                            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center" />
                          )}
                          <div className="relative z-10">
                            <h3 className={cn(
                              "font-display mb-6 max-w-2xl mx-auto leading-tight",
                              viewMode === 'desktop' ? "text-4xl md:text-7xl" : "text-3xl",
                              selected?.sampleContent.layoutType === 'experience' ? "text-mist" : "text-forest"
                            )}>
                              {selected?.sampleContent.hero}
                            </h3>
                            <p className={cn(
                              "mb-10 max-w-lg mx-auto relative z-10",
                              viewMode === 'desktop' ? "text-lg" : "text-sm",
                              selected?.sampleContent.layoutType === 'experience' ? "text-mist/70" : "text-charcoal/60"
                            )}>
                               {selected?.sampleContent.sub}
                            </p>
                            <div className={cn(
                              "mx-auto rounded-full flex items-center justify-center font-bold text-mist shadow-lg hover:scale-105 transition-transform cursor-pointer",
                              viewMode === 'desktop' ? "h-14 w-56 text-base" : "h-12 w-48 text-sm",
                              selected?.color
                            )}>
                              Get Started Now
                            </div>
                          </div>
                        </div>

                        {/* Status/Trust Points */}
                        <div className="py-12 bg-mist/50 border-y border-forest/5">
                           <div className={cn(
                             "max-w-4xl mx-auto px-6 grid gap-8",
                             viewMode === 'desktop' ? "grid-cols-3" : "grid-cols-1"
                           )}>
                              {selected?.sampleContent.points.map((p, i) => (
                                <div key={i} className="flex items-center gap-4">
                                   <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", selected?.color, "bg-opacity-10")}>
                                     <CheckCircle2 className={cn("text-forest", selected?.color?.replace('bg-', 'text-'))} size={20} />
                                   </div>
                                   <span className="text-[10px] font-bold uppercase tracking-widest text-forest/70">{p}</span>
                                </div>
                              ))}
                           </div>
                        </div>

                        {/* Services Section */}
                        <div className="py-20 px-8">
                           <div className="text-center mb-16">
                              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-sunrise-orange mb-4 block underline decoration-sunrise-orange/20 underline-offset-4">Solutions</span>
                              <h4 className="text-3xl font-display text-forest">What We Offer</h4>
                           </div>
                           <div className={cn(
                             "grid gap-8 max-w-5xl mx-auto",
                             viewMode === 'desktop' ? "grid-cols-3" : "grid-cols-1"
                           )}>
                              {selected?.sampleContent.services?.map((s: any, i) => {
                                const IconComp = {
                                  Droplets, Zap, Wind, Home: HomeIcon, TrendingUp, Map, Gavel, PieChart, Shield, Bed, Utensils, Telescope
                                }[s.icon] as any || Zap;

                                return (
                                  <div key={i} className="p-8 bg-white rounded-3xl border border-forest/5 hover:border-forest/10 hover:shadow-xl hover:shadow-forest/5 transition-all text-center">
                                     <div className={cn("w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-6", selected?.color, "bg-opacity-10")}>
                                        <IconComp size={24} className={cn(selected?.color?.replace('bg-', 'text-'))} />
                                     </div>
                                     <h5 className="font-display text-xl text-forest mb-3">{s.title}</h5>
                                     <p className="text-xs text-charcoal/50 leading-relaxed">{s.desc}</p>
                                  </div>
                                );
                              })}
                           </div>
                        </div>

                        {/* About Section */}
                        <div className={cn(
                          "py-24 px-8 bg-forest text-mist relative overflow-hidden",
                          viewMode === 'desktop' ? "flex items-center gap-16" : "flex flex-col"
                        )}>
                            <div className={cn(
                              "relative z-10",
                              viewMode === 'desktop' ? "w-1/2" : "w-full mb-12"
                            )}>
                               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-sunrise-orange mb-6 block">Our Frontier</span>
                               <h4 className="text-4xl font-display mb-8 italic font-light">{selected?.sampleContent.aboutTitle}</h4>
                               <p className="text-mist/60 text-lg leading-relaxed">{selected?.sampleContent.aboutText}</p>
                            </div>
                            <div className={cn(
                              "relative",
                              viewMode === 'desktop' ? "w-1/2 aspect-square" : "w-full aspect-video"
                            )}>
                               <div className="absolute inset-0 border-2 border-mist/20 rounded-3xl -rotate-3" />
                               <div className={cn("absolute inset-0 rounded-3xl overflow-hidden shadow-2xl", selected?.color, "bg-opacity-20")}>
                                  <SafeImage 
                                    src={selected?.image} 
                                    alt="Office" 
                                    className="w-full h-full object-cover grayscale opacity-50"
                                  />
                               </div>
                            </div>
                        </div>

                        {/* Unique Industry Block */}
                        {selected?.sampleContent.layoutType === 'business' && (
                          <div className="py-24 px-8 bg-mist/30">
                            <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl shadow-forest/5 border border-forest/5 text-center">
                               <h4 className="text-3xl font-display text-forest mb-6">Need Emergency Dispatch?</h4>
                               <p className="text-charcoal/50 mb-10 max-w-md mx-auto">Click below to connect with our priority response team. We're on standby for your calls.</p>
                               <div className="flex justify-center gap-4 flex-wrap">
                                  <div className="bg-forest text-mist px-10 py-5 rounded-full font-bold shadow-lg">Request Priority Quote</div>
                                  <div className="bg-white border-2 border-forest/10 text-forest px-10 py-5 rounded-full font-bold">Call Team Directly</div>
                                </div>
                            </div>
                          </div>
                        )}

                        {selected?.sampleContent.layoutType === 'corporate' && (
                          <div className="py-24 px-8 bg-mist/50">
                            <div className="max-w-4xl mx-auto">
                              <h4 className="text-2xl font-display text-forest mb-12 border-l-4 border-sunrise-orange pl-6">Latest Executive Briefings</h4>
                              <div className="grid gap-6">
                                {[1,2].map(i => (
                                  <div key={i} className="bg-white p-8 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-forest hover:text-mist transition-all">
                                    <div>
                                      <div className="text-[10px] font-bold text-sunrise-orange mb-2">PDF Report • 2026</div>
                                      <div className="text-xl font-display">Macro-Economic Frontier Analysis</div>
                                    </div>
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {selected?.sampleContent.layoutType === 'gallery' && (
                          <div className="py-24 px-8">
                            <div className="flex justify-between items-end mb-12">
                               <h4 className="text-3xl font-display text-forest">Recent <span className="italic font-light">Success.</span></h4>
                               <span className="text-xs font-bold border-b border-forest/20 pb-1">Browse Portfolio</span>
                            </div>
                            <div className={cn("grid gap-6", viewMode === 'desktop' ? "grid-cols-2" : "grid-cols-1")}>
                               {[1,2,3,4].map(i => (
                                 <div key={i} className="group cursor-pointer">
                                    <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-forest/5 mb-4 relative">
                                      <SafeImage 
                                        src={`https://images.unsplash.com/photo-${[
                                          "1600585154340-be6161a56a0c", 
                                          "1605276374104-dee2a0ed3cd6", 
                                          "1600566753190-17f0bb2a6c3e", 
                                          "1600210492493-09472111d3ae"
                                        ][i-1]}?auto=format&fit=crop&q=80&w=600`} 
                                        alt="Property" 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                      />
                                      <div className="absolute inset-0 bg-forest/5 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <h5 className="font-display text-lg text-forest">Mountain View Estate</h5>
                                    <p className="text-[10px] text-charcoal/40 uppercase tracking-widest mt-1">Aspen, Colorado</p>
                                 </div>
                               ))}
                            </div>
                          </div>
                        )}

                        {selected?.sampleContent.layoutType === 'experience' && (
                          <div className="py-24 px-8 bg-sand/10">
                            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                               <div className="w-full md:w-1/2 aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                                  <SafeImage 
                                    src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800" 
                                    alt="Stay with intention" 
                                    className="w-full h-full object-cover"
                                  />
                               </div>
                               <div className="w-full md:w-1/2">
                                  <h4 className="text-3xl font-display text-forest mb-6">Stay with Intention</h4>
                                  <p className="text-charcoal/50 leading-relaxed mb-8 font-medium italic">"The most memorable adventures aren't found on maps, but in the moments between."</p>
                                  <div className="flex gap-4">
                                     <div className="h-1 bg-sunrise-orange w-12" />
                                     <div className="h-1 bg-forest/10 w-12" />
                                     <div className="h-1 bg-forest/10 w-12" />
                                  </div>
                               </div>
                            </div>
                          </div>
                        )}

                        {/* Testimonial Section Mock */}
                        <div className="py-24 px-8 bg-white border-t border-forest/5">
                           <div className="max-w-2xl mx-auto text-center">
                             <div className="flex justify-center gap-1 mb-8">
                               {[1,2,3,4,5].map(i => <Zap key={i} size={16} className="text-sunrise-orange fill-sunrise-orange" />)}
                             </div>
                             <p className="text-xl font-display text-forest italic leading-relaxed mb-8">
                               "Working with this team was the best decision for our growth. The transition was seamless and the results far exceeded our initial goals."
                             </p>
                             <div className="flex items-center justify-center gap-4">
                               <div className="w-12 h-12 bg-forest/5 rounded-full overflow-hidden">
                                 <SafeImage 
                                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                                   alt="Avatar" 
                                   className="w-full h-full object-cover"
                                 />
                               </div>
                               <div className="text-left">
                                 <div className="font-bold text-forest">Frontier Web Pros</div>
                                 <div className="text-[10px] text-charcoal/40 uppercase tracking-widest">Small Business Partner</div>
                               </div>
                             </div>
                           </div>
                        </div>

                        {/* Closing CTA */}
                        <div className="py-20 px-8 bg-mist text-center">
                           <h4 className="text-3xl font-display text-forest mb-8">Ready to Scale?</h4>
                           <div className={cn("mx-auto rounded-full flex items-center justify-center font-bold text-mist h-14 w-64 shadow-xl cursor-pointer hover:scale-105 transition-transform", selected?.color)}>
                              Start Today
                           </div>
                        </div>

                        {/* Footer Mock */}
                        <div className="py-16 pb-32 px-8 bg-charcoal text-mist/30 text-center border-t border-white/5">
                           <p className="text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">Standardized by Frontier Web Pros</p>
                           <div className="flex justify-center gap-6 opacity-30 mb-8">
                             {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-mist" />)}
                           </div>
                           <p className="text-[8px] uppercase tracking-widest">© 2026 Your Business Name • All Rights Reserved</p>
                        </div>
                      </>
                    )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Template Sidebar Info */}
                  <div className="w-full md:w-1/3 lg:w-1/4 p-8 border-t md:border-t-0 md:border-l border-forest/10 flex flex-col justify-between bg-white overflow-y-auto">
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/30 mb-8">Specification</h4>
                      <ul className="space-y-6 mb-12">
                        {selected?.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-charcoal/70">
                            <CheckCircle2 size={16} className="text-sunrise-orange shrink-0 mt-0.5" />
                            <span className="font-medium">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="p-6 bg-mist rounded-2x border border-forest/5 space-y-4">
                        <div className="flex items-center gap-3">
                          <Zap size={16} className="text-sunrise-orange" />
                          <span className="text-xs font-bold uppercase tracking-wider">Strategy-First Design</span>
                        </div>
                        <p className="text-[10px] text-charcoal/40 leading-relaxed">This layout is engineered to convert visitors into customers. We'll customize every pixel to fit your brand.</p>
                      </div>
                    </div>
                    <div className="mt-12">
                      <NavLink 
                        to="/contact" 
                        className={cn(
                          "w-full py-5 rounded-2xl text-center font-bold text-mist transition-transform hover:scale-105 active:scale-95 block shadow-xl shadow-forest/10",
                          selected?.color || "bg-forest"
                        )}
                      >
                        Customize This Layout
                      </NavLink>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="mt-32 py-24 px-12 bg-charcoal rounded-[3rem] text-mist relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-display mb-8">Want a <span className="italic font-light">Custom Masterpiece?</span></h2>
            <p className="text-mist/60 text-lg leading-relaxed mb-10">
              Our optimized layouts are powerful tools for growth, but if your business requires a unique technical architecture built from the soil up, our engineers are ready.
            </p>
            <NavLink to="/contact" className="bg-sunrise-orange text-mist px-10 py-5 rounded-full font-bold inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-sunrise-orange/20">
              Start My Custom Website <ArrowRight size={20} />
            </NavLink>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-mist/5 to-transparent skew-x-12" />
        </section>
      </div>
    </div>
  );
}

function TradeTemplatePreview({ viewMode, color }: { viewMode: 'desktop' | 'mobile', color: string }) {
  const isDesktop = viewMode === 'desktop';
  
  return (
    <div className="bg-white font-sans">
      {/* 1. HERO SECTION */}
      <section className={cn(
        "relative flex items-center justify-center overflow-hidden",
        isDesktop ? "h-[600px]" : "min-h-[550px] py-20"
      )}>
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" 
            alt="Tradesperson working" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("font-trades text-mist mb-6 font-bold leading-tight", isDesktop ? "text-6xl" : "text-4xl")}
          >
            Reliable Home Service Professionals You Can Trust
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn("text-mist/70 mb-10 max-w-2xl mx-auto", isDesktop ? "text-xl" : "text-base")}
          >
            Fast, affordable, and high-quality service for your home or business. We're locally owned and ready to help.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className={cn("px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2", color, "text-mist")}>
              Request a Quote <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 rounded-full font-bold bg-white text-forest hover:bg-mist transition-colors flex items-center gap-2 border border-forest/10">
              <Phone size={18} /> Call Now
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-mist/60 text-xs font-bold tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-sunrise-orange" /> Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-sunrise-orange" /> Same-Day Service
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-sunrise-orange" /> Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="py-20 px-8 bg-mist/30">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-trades text-forest mb-4">Our Core Services</h2>
          <div className="h-1 w-20 bg-sunrise-orange mx-auto"></div>
        </div>
        <div className={cn("grid gap-6", isDesktop ? "grid-cols-4" : "grid-cols-1")}>
          {[
            { icon: <Droplets />, title: "Plumbing", desc: "Expert leak repairs, pipe installations, and more." },
            { icon: <Zap />, title: "Electrical", desc: "Safe wiring and panel upgrades by certified techs." },
            { icon: <Wind />, title: "HVAC", desc: "Heating and cooling maintenance for all seasons." },
            { icon: <HomeIcon />, title: "Roofing", desc: "Durable repairs and complete roof replacements." }
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-forest/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", color, "bg-opacity-10 text-forest group-hover:bg-opacity-100 group-hover:text-mist transition-all")}>
                {React.cloneElement(s.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="font-trades text-xl mb-3 text-forest">{s.title}</h3>
              <p className="text-charcoal/50 text-sm mb-6 leading-relaxed">{s.desc}</p>
              <button className="text-xs font-bold uppercase tracking-widest text-sunrise-orange flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 px-8 border-y border-forest/5">
        <div className={cn("max-w-6xl mx-auto flex items-center gap-12", isDesktop ? "flex-row" : "flex-col")}>
          <div className={isDesktop ? "w-1/2" : "w-full"}>
            <span className="text-sunrise-orange text-xs font-bold tracking-widest uppercase mb-4 block">Trusted Expertise</span>
            <h2 className="text-4xl font-trades text-forest mb-6">Why Your Neighbors <br /> Choose Us</h2>
            <p className="text-charcoal/60 mb-10 leading-relaxed">
              We understand that your home is your sanctuary. We treat every job with the respect it deserves, ensuring high-quality results at a fair price.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <PieChart />, title: "Upfront Pricing" },
                { icon: <Clock />, title: "Fast Response" },
                { icon: <Shield />, title: "Certified Pros" },
                { icon: <CheckCircle2 />, title: "Local Team" }
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-forest/70">
                  <div className="w-8 h-8 bg-forest/5 rounded-full flex items-center justify-center text-forest">
                    {React.cloneElement(p.icon as React.ReactElement, { size: 16 })}
                  </div>
                  <span className="text-sm font-bold text-forest/70">{p.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={cn("relative", isDesktop ? "w-1/2" : "w-full aspect-video")}>
            <div className="absolute inset-0 bg-forest/5 rounded-3xl -rotate-3 border border-forest/10"></div>
            <SafeImage 
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800" 
              alt="Tools" 
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section className="py-20 px-8 bg-forest text-mist">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-trades mb-4">Recent Projects</h2>
          <p className="text-mist/60 max-w-xl mx-auto">See the difference our professional touch makes.</p>
        </div>
        <div className={cn("grid gap-8", isDesktop ? "grid-cols-3" : "grid-cols-1")}>
          {[
            { title: "HVAC Install", before: "https://images.unsplash.com/photo-1507652313519-d45101a056a2?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1558448243-239cf2e09156?auto=format&fit=crop&q=80&w=400" },
            { title: "Pipe Repair", before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400" },
            { title: "Lighting Upgrade", before: "https://images.unsplash.com/photo-1556912177-c54030639a6d?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400" }
          ].map((p, i) => (
            <div key={i} className="bg-white/5 rounded-3xl p-6 border border-white/10 group cursor-default">
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="relative aspect-square rounded-xl overflow-hidden grayscale">
                  <SafeImage src={p.before} alt="Before" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 bg-charcoal/80 text-[8px] font-black px-2 py-0.5 rounded text-white tracking-widest leading-none">BEFORE</span>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <SafeImage src={p.after} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 bg-sunrise-orange text-[8px] font-black px-2 py-0.5 rounded text-mist tracking-widest leading-none">AFTER</span>
                </div>
              </div>
              <h3 className="font-trades text-lg mb-2">{p.title}</h3>
              <p className="text-xs text-mist/40">Complete overhaul with modern components.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS */}
      <section className="py-20 px-8 bg-mist/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-trades text-forest">What Our Customers Say</h2>
          </div>
          <div className={cn("grid gap-6", isDesktop ? "grid-cols-3" : "grid-cols-1")}>
            {[
              { name: "John S.", city: "Denver", text: "Fast and reliable. They fixed my issues same-day!" },
              { name: "Linda K.", city: "Aurora", text: "Fair pricing and the tech was very clean. 5 stars." },
              { name: "Tom R.", city: "Boulder", text: "Been using them for years. Always consistent." }
            ].map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-forest/5 relative">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={j} size={12} className="text-sunrise-orange fill-sunrise-orange" />)}
                </div>
                <p className="text-sm text-charcoal/60 mb-6 italic">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-forest/10">
                    <SafeImage 
                      src={`https://images.unsplash.com/photo-${[
                        "1507003211169-0a1dd7228f2d", 
                        "1494790108377-be9c29b29330", 
                        "1438761681033-6461ffad8d80"
                      ][i]}?auto=format&fit=crop&q=80&w=100`} 
                      alt={r.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-forest">{r.name}</div>
                    <div className="text-[10px] text-charcoal/40 uppercase tracking-widest">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICE AREA MAP */}
      <section className="py-20 px-8">
        <div className={cn("max-w-6xl mx-auto flex items-center gap-12", isDesktop ? "flex-row" : "flex-col")}>
          <div className={isDesktop ? "w-1/2" : "w-full"}>
            <div className="aspect-[4/3] bg-mist rounded-[3rem] overflow-hidden border border-forest/5 relative">
              <SafeImage 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Map size={48} className="text-sunrise-orange opacity-20" />
              </div>
            </div>
          </div>
          <div className={isDesktop ? "w-1/2" : "w-full text-center"}>
            <h2 className="text-3xl font-trades text-forest mb-6">Service Area</h2>
            <p className="text-charcoal/50 mb-8">We're proud to serve the entire metro area and surrounding communities.</p>
            <div className="grid grid-cols-2 gap-4">
              {["Denver", "Aurora", "Boulder", "Lakewood", "Thornton", "Arvada"].map((city, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-forest/70 font-medium">
                  <div className="w-1.5 h-1.5 bg-sunrise-orange rounded-full" />
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section className="py-24 px-8 bg-forest text-mist relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sunrise-orange/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className={cn("max-w-6xl mx-auto flex gap-16", isDesktop ? "flex-row" : "flex-col")}>
          <div className={isDesktop ? "w-1/2" : "w-full"}>
             <h2 className="text-4xl font-trades mb-8">Request an Estimate</h2>
             <p className="text-mist/60 mb-10 text-lg">Send us a message or call us directly. We'll get back to you within 24 hours.</p>
             <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-mist/20 flex items-center justify-center group-hover:bg-sunrise-orange group-hover:border-sunrise-orange transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-mist/40 mb-1">Call Anytime</div>
                    <div className="text-xl font-bold">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-mist/20 flex items-center justify-center group-hover:bg-sunrise-orange group-hover:border-sunrise-orange transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-mist/40 mb-1">Email Us</div>
                    <div className="text-xl font-bold">frontoffice@frontierwebpros.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-mist/20 flex items-center justify-center group-hover:bg-sunrise-orange group-hover:border-sunrise-orange transition-colors">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-mist/40 mb-1">Office Hours</div>
                    <div className="text-xl font-bold">Mon - Sat: 8:00 AM - 6:00 PM</div>
                  </div>
                </div>
             </div>
          </div>
          <div className={cn("bg-white p-8 sm:p-12 rounded-[2.5rem]", isDesktop ? "w-1/2" : "w-full")}>
             <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-forest/40 uppercase tracking-widest ml-4">Name</label>
                      <input type="text" className="w-full bg-mist/50 border border-forest/5 rounded-2xl px-6 py-4 text-forest outline-none focus:border-sunrise-orange transition-colors shadow-inner" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-forest/40 uppercase tracking-widest ml-4">Phone</label>
                      <input type="text" className="w-full bg-mist/50 border border-forest/5 rounded-2xl px-6 py-4 text-forest outline-none focus:border-sunrise-orange transition-colors shadow-inner" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-forest/40 uppercase tracking-widest ml-4">Email</label>
                   <input type="email" className="w-full bg-mist/50 border border-forest/5 rounded-2xl px-6 py-4 text-forest outline-none focus:border-sunrise-orange transition-colors shadow-inner" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-forest/40 uppercase tracking-widest ml-4">How can we help?</label>
                   <textarea rows={4} className="w-full bg-mist/50 border border-forest/5 rounded-2xl px-6 py-4 text-forest outline-none focus:border-sunrise-orange transition-colors resize-none shadow-inner" />
                </div>
                <button className={cn("w-full py-5 rounded-2xl font-bold text-mist shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all", color)}>
                   Submit Quote Request
                </button>
             </form>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-16 pb-24 px-8 bg-charcoal border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
              <Zap size={24} className="text-sunrise-orange" />
              <div className="text-mist font-trades font-black tracking-tighter text-xl">TRADE SERVICE PROS</div>
           </div>
           <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-mist/40">
              <a href="#" className="hover:text-mist transition-colors">Privacy</a>
              <a href="#" className="hover:text-mist transition-colors">Terms</a>
              <a href="#" className="hover:text-mist transition-colors">Disclaimer</a>
           </div>
           <p className="text-[8px] uppercase tracking-widest text-mist/20">© 2026 Trade Service PROS • All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

function RealEstateTemplatePreview({ viewMode, color }: { viewMode: 'desktop' | 'mobile', color: string }) {
  const isDesktop = viewMode === 'desktop';
  
  return (
    <div className="bg-white text-slate-gray font-sans">
      {/* 1. HERO SECTION */}
      <section className={cn(
        "relative flex items-center justify-center overflow-hidden",
        isDesktop ? "h-[700px]" : "min-h-[600px] py-16"
      )}>
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Home" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Star size={14} className="text-amber-400 fill-amber-400" /> Top Rated Real Estate Experts
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("font-realestate text-white mb-6 font-bold leading-tight", isDesktop ? "text-6xl" : "text-4xl")}
          >
            Find Your Perfect Home
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn("text-white/80 mb-10 max-w-2xl mx-auto", isDesktop ? "text-xl" : "text-base")}
          >
            Trusted real estate professionals helping you buy, sell, or invest in the modern frontier.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 rounded-full font-bold bg-white text-slate-gray hover:bg-cloud-white transition-all shadow-2xl flex items-center gap-2">
              View Listings <ArrowRight size={18} />
            </button>
            <button className="px-10 py-5 rounded-full font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all flex items-center gap-2">
              Schedule a Tour
            </button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase">
            <div className="flex flex-col items-center gap-2">
              <span className="text-white text-lg">10+</span> Years Experience
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-white text-lg">500+</span> Properties Sold
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-white text-lg">Local</span> Market Experts
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED LISTINGS GRID */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-amber-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Exclusive Collection</span>
              <h2 className="text-4xl font-realestate text-slate-gray font-bold">Featured Listings</h2>
            </div>
            <button className="text-sm font-bold text-slate-gray border-b-2 border-amber-500/20 hover:border-amber-500 transition-all pb-1">
              View All Properties
            </button>
          </div>
          
          <div className={cn("grid gap-10", isDesktop ? "grid-cols-3" : "grid-cols-1")}>
            {[
              { price: "$1,250,000", addr: "42 Boulder Peak, Aspen", beds: 4, baths: 3, sqft: 3200, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600" },
              { price: "$895,000", addr: "12 Pine Creek Rd, Vail", beds: 3, baths: 2, sqft: 2400, img: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=600" },
              { price: "$2,100,000", addr: "Skyline Manor, Denver", beds: 5, baths: 4, sqft: 4500, img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600" }
            ].map((prop, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                  <SafeImage src={prop.img} alt={prop.addr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-slate-gray font-bold text-xs shadow-lg">
                    FOR SALE
                  </div>
                </div>
                <div className="px-2">
                  <div className="text-2xl font-realestate font-bold text-slate-gray mb-1">{prop.price}</div>
                  <div className="text-sm text-charcoal/50 mb-4">{prop.addr}</div>
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-charcoal/30 uppercase border-t border-charcoal/5 pt-4">
                    <span className="flex items-center gap-1.5"><Bed size={14} className="text-amber-500" /> {prop.beds} Beds</span>
                    <span className="flex items-center gap-1.5"><Utensils size={14} className="text-amber-500" /> {prop.baths} Baths</span>
                    <span className="flex items-center gap-1.5"><Zap size={14} className="text-amber-500" /> {prop.sqft} SQ FT</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE AGENT */}
      <section className="py-24 px-8 bg-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-frontier-blue/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className={cn("max-w-6xl mx-auto flex items-center gap-20", isDesktop ? "flex-row" : "flex-col")}>
          <div className={cn("relative", isDesktop ? "w-2/5" : "w-full aspect-[4/5]")}>
            <div className="absolute -inset-4 border border-white/10 rounded-[3rem] rotate-3"></div>
            <div className="relative aspect-[4/5] bg-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <SafeImage 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Agent" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl text-slate-gray">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-amber-500 fill-amber-500" />)}
              </div>
              <div className="text-sm font-bold italic text-charcoal/60 leading-tight">"The best in the business."</div>
            </div>
          </div>
          <div className={cn(isDesktop ? "w-3/5" : "w-full text-center md:text-left")}>
            <span className="text-amber-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Meet the Expert</span>
            <h2 className="text-5xl font-realestate mb-8">John Smith — <br /><span className="italic font-light opacity-50">Licensed Realtor</span></h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
              With over a decade of local expertise, I help clients navigate the luxury market with precision and integrity. My mission is to find you more than just a house, but a space that truly reflects your lifestyle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-white text-slate-gray px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                Full Bio <ArrowRight size={18} />
              </button>
              <button className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED NEIGHBORHOODS */}
      <section className="py-24 px-8 bg-cloud-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-realestate text-slate-gray font-bold mb-4">Featured Neighborhoods</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-charcoal/50 max-w-xl mx-auto text-sm">Discover the most sought-after communities in our region.</p>
          </div>
          
          <div className={cn("grid gap-8", isDesktop ? "grid-cols-3" : "grid-cols-1")}>
            {[
              { name: "West Highlands", desc: "Upscale living with a modern urban feel.", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=600" },
              { name: "Canyon Ridge", desc: "For those who value privacy and nature.", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600" },
              { name: "Summit Valley", desc: "Family-friendly with world-class schools.", img: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=600" }
            ].map((n, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl">
                <SafeImage src={n.img} alt={n.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-gray to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-2xl font-realestate text-white font-bold mb-2">{n.name}</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">{n.desc}</p>
                  <button className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
                    Explore Area <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MARKET INSIGHTS */}
      <section className="py-24 px-8 bg-white border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <div className={cn("grid gap-12", isDesktop ? "grid-cols-3" : "grid-cols-1")}>
            {[
              { label: "Average Home Price", value: "$950k", icon: <PieChart /> },
              { label: "Days on Market", value: "18 Days", icon: <Clock /> },
              { label: "Homes Sold This Year", value: "120+", icon: <HomeIcon /> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-cloud-white/50 border border-charcoal/5">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-500 mb-6">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 28 })}
                </div>
                <div className="text-4xl font-realestate font-bold text-slate-gray mb-2">{stat.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase text-charcoal/30">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="py-24 px-8 bg-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="text-amber-500 text-xs font-bold tracking-[0.4em] uppercase mb-8 block underline decoration-amber-500/20 underline-offset-8">Testimonials</span>
          <div className="flex gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-amber-500 fill-amber-500" />)}
          </div>
          <p className="text-2xl font-realestate text-slate-gray italic leading-relaxed mb-10">
            "John provided an unparalleled level of service. He found our dream home before it even hit the market and handled every detail with utter professionalism."
          </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-gray/5 overflow-hidden">
                 <SafeImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            <div className="text-left">
              <div className="font-bold text-slate-gray">Sarah Henderson</div>
              <div className="text-xs text-charcoal/40 font-medium">Aspen Homeowner</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / SCHEDULE */}
      <section className="py-24 px-8 bg-cloud-white">
        <div className={cn("max-w-6xl mx-auto flex gap-12", isDesktop ? "flex-row" : "flex-col")}>
          <div className={isDesktop ? "w-1/2" : "w-full"}>
            <h2 className="text-4xl font-realestate text-slate-gray font-bold mb-6">Schedule a Private Showing</h2>
            <p className="text-charcoal/60 mb-10 leading-relaxed">
              Interested in a property? Fill out the form or call our concierge line for immediate assistance. We're available 7 days a week.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-gray text-white flex items-center justify-center shadow-lg">
                  <Phone size={20} />
                </div>
                <div>
                   <div className="text-xs font-bold text-charcoal/30 uppercase tracking-widest">Office</div>
                   <div className="text-xl font-bold text-slate-gray">(555) 789-0123</div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-gray text-white flex items-center justify-center shadow-lg">
                  <Mail size={20} />
                </div>
                <div>
                   <div className="text-xs font-bold text-charcoal/30 uppercase tracking-widest">Email</div>
                   <div className="text-xl font-bold text-slate-gray">listings@frontierestate.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn("bg-white p-10 rounded-[2.5rem] shadow-xl border border-charcoal/5", isDesktop ? "w-1/2" : "w-full")}>
            <form className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-charcoal/30 uppercase tracking-widest ml-1">Name</label>
                     <input type="text" placeholder="Your Name" className="w-full bg-cloud-white border-transparent rounded-xl px-5 py-4 focus:bg-white focus:ring-1 focus:ring-amber-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-charcoal/30 uppercase tracking-widest ml-1">Phone</label>
                     <input type="text" placeholder="Phone Number" className="w-full bg-cloud-white border-transparent rounded-xl px-5 py-4 focus:bg-white focus:ring-1 focus:ring-amber-500 outline-none transition-all" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-charcoal/30 uppercase tracking-widest ml-1">Property</label>
                  <select className="w-full bg-cloud-white border-transparent rounded-xl px-5 py-4 focus:bg-white focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>Select a property...</option>
                    <option>42 Boulder Peak</option>
                    <option>12 Pine Creek Rd</option>
                    <option>Skyline Manor</option>
                  </select>
               </div>
               <button className="w-full bg-charcoal text-white py-5 rounded-xl font-bold shadow-xl hover:bg-slate-gray/90 transition-all text-center">
                 Request Information
               </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-24 pb-32 px-8 bg-charcoal text-white border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <HomeIcon size={24} className="text-amber-500" />
              <div className="font-realestate font-black tracking-tighter text-2xl">FRONTIER ESTATE</div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">Defining the peak of luxury real estate in the modern wilderness.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-amber-500">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Listings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Neighborhoods</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agents</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-amber-500">Contact</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li>(555) 789-0123</li>
                <li>Hike Street, Denver</li>
                <li>info@frontier.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">© 2026 Frontier Estate • Luxury Real Estate Division</p>
           <div className="flex gap-6">
             {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-white hover:border-white/30 transition-all cursor-pointer"><ArrowRight size={14} /></div>)}
           </div>
        </div>
      </footer>
    </div>
  );
}

function ProfessionalTemplatePreview({ viewMode, color }: { viewMode: 'desktop' | 'mobile', color: string }) {
  const isDesktop = viewMode === 'desktop';
  
  return (
    <div className="bg-white text-slate-900 font-prof">
      {/* 1. HERO SECTION */}
      <section className={cn(
        "relative flex items-center overflow-hidden bg-slate-900",
        isDesktop ? "h-[700px]" : "min-h-[600px] py-24"
      )}>
        <div className="absolute inset-0 z-0 opacity-40">
          <SafeImage 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-lg text-teal-400 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Shield size={14} /> Certified Excellence in Consulting
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("font-prof text-white mb-6 font-bold leading-tight max-w-3xl", isDesktop ? "text-6xl" : "text-4xl")}
          >
            Expert Solutions for Your <span className="text-teal-400">Business Growth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn("text-slate-300 mb-10 max-w-xl", isDesktop ? "text-xl" : "text-base")}
          >
            Providing high-impact strategic guidance and professional services tailored to help your organization navigate complex challenges with absolute clarity.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 rounded-xl font-bold bg-teal-500 text-slate-900 hover:bg-teal-400 transition-all shadow-xl shadow-teal-500/20">
              Book a Consultation
            </button>
            <button className="px-10 py-5 rounded-xl font-bold border border-slate-700 text-white hover:bg-white/5 transition-all">
              Our Services
            </button>
          </div>
          
          <div className="mt-20 flex flex-wrap gap-12 items-center">
             <div className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase">Trusted By</div>
             <div className="flex flex-wrap gap-8 opacity-40 grayscale contrast-125">
                {/* Mock logos */}
                <div className="font-prof font-black text-white text-xl tracking-tighter">FINANCE.CO</div>
                <div className="font-prof font-black text-white text-xl tracking-tighter">GLOBAL.SYS</div>
                <div className="font-prof font-black text-white text-xl tracking-tighter">TECHRIDGE</div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-teal-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl font-prof text-slate-900 font-bold mb-6">Comprehensive Business Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We provide the strategic framework and operational support necessary for sustainable scaling and long-term success.</p>
          </div>
          
          <div className={cn("grid gap-6", isDesktop ? "grid-cols-3" : "grid-cols-1")}>
            {[
              { icon: <Briefcase />, title: "Strategy Consulting", desc: "Developing actionable roadmaps to help your business reach its next level of maturity." },
              { icon: <TrendingUp />, title: "Financial Advisory", desc: "Optimizing your capital structure and providing expert guidance on complex fiscal matters." },
              { icon: <Shield />, title: "Risk Management", desc: "Identifying vulnerabilities and implementing robust safeguards to protect your assets." },
              { icon: <Users />, title: "HR Optimization", desc: "Building high-performance cultures through strategic talent acquisition and management." },
              { icon: <Zap />, title: "Digital Transformation", desc: "Modernizing your infrastructure to keep pace with the rapidly evolving digital landscape." },
              { icon: <PieChart />, title: "Market Analysis", desc: "Data-driven insights to help you identify and capitalize on emerging growth opportunities." }
            ].map((s, i) => (
              <div key={i} className="p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-teal-600 mb-8 border border-slate-100 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-prof font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <button className="text-teal-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT / CREDENTIALS */}
      <section className="py-24 px-8 bg-slate-50 overflow-hidden">
        <div className={cn("max-w-7xl mx-auto flex items-center gap-20", isDesktop ? "flex-row" : "flex-col")}>
          <div className={isDesktop ? "w-1/2" : "w-full"}>
            <div className="relative">
              <div className="absolute -inset-8 bg-teal-500/5 rounded-[2rem] -rotate-3"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <SafeImage 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team Lead" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-2xl shadow-2xl">
                 <div className="text-3xl font-prof font-bold mb-1">15+</div>
                 <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-teal-400">Years of Experience</div>
              </div>
            </div>
          </div>
          <div className={cn(isDesktop ? "w-1/2" : "w-full")}>
            <span className="text-teal-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block text-center md:text-left">Who We Are</span>
            <h2 className="text-4xl font-prof text-slate-900 font-bold mb-8 text-center md:text-left">Integrity Driven Excellence</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 text-center md:text-left">
              Our firm was founded on the principle that true guidance requires both deep expertise and unwavering ethical standards. We don't just provide answers; we partner with you to build lasting solutions.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Certified Public Accountants (CPA)",
                "PMP Certified Project Managers",
                "Dedicated 24/7 Priority Support",
                "Customized Industry-Specific Frameworks"
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-teal-500 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <button className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 rounded-xl font-bold hover:bg-slate-800 transition-colors">
              Meet the Team
            </button>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-center md:text-left">
              <span className="text-teal-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Proven Results</span>
              <h2 className="text-4xl font-prof text-slate-900 font-bold">Featured Success Stories</h2>
            </div>
            <button className="text-teal-600 font-bold text-sm border-b border-teal-600/20 hover:border-teal-600 transition-all pb-1">
              View All Case Studies
            </button>
          </div>
          
          <div className={cn("grid gap-8", isDesktop ? "grid-cols-2" : "grid-cols-1")}>
            {[
              { client: "Horizon Logistics", issue: "Scaling Infrastructure", solution: "We implemented a custom ERP system that reduced operational overhead by 40% in just six months.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
              { client: "Summit FinTech", issue: "Market Expansion", solution: "Developed a comprehensive cross-border strategy that saw the client enter three new regions successfully.", img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" }
            ].map((cs, i) => (
              <div key={i} className="group overflow-hidden rounded-[2.5rem] bg-slate-900 relative aspect-[16/10]">
                 <SafeImage src={cs.img} alt={cs.client} className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-[2s]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                 <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="text-teal-400 text-xs font-bold tracking-widest uppercase mb-2">{cs.issue}</div>
                    <h3 className="text-2xl font-prof text-white font-bold mb-4">{cs.client}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">{cs.solution}</p>
                    <button className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                      Read Full Story <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 w-teal-500 mx-auto mb-12"></div>
          <p className="text-3xl font-prof italic leading-relaxed mb-12">
            "The level of strategic insight provided by the team was transformative. They didn't just point out problems; they provided a roadmap to our most successful year on record."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 overflow-hidden">
               <SafeImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Client" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Robert Chen</div>
              <div className="text-xs text-slate-500 font-medium">CEO, Horizon Ventures</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-prof text-slate-900 font-bold mb-6">Common Questions</h2>
            <p className="text-slate-500">Everything you need to know about our process and partnership.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does a typical engagement last?", a: "Engagements vary based on project scope, typically ranging from 3-month strategic deep-dives to ongoing multi-year advisory roles." },
              { q: "What industries do you specialize in?", a: "While our frameworks are adaptable, we have deep domain expertise in FinTech, Logistics, Healthcare, and SaaS organizations." },
              { q: "Can we start with a pilot project?", a: "Absolutely. We often define a 4-week diagnostic pilot to demonstrate value before entering a full-scale engagement." },
              { q: "Do you offer fixed-fee arrangements?", a: "We offer various pricing models including project-based fixed fees, monthly retainers, and value-based structures." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-teal-500/30 transition-colors cursor-pointer group">
                 <div className="flex items-center justify-between gap-4">
                    <span className="font-bold text-slate-900">{faq.q}</span>
                    <ChevronRight size={18} className="text-slate-400 group-hover:text-teal-500 transition-colors" />
                 </div>
                 <p className="mt-4 text-sm text-slate-500 leading-relaxed hidden group-hover:block">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT / CONSULTATION */}
      <section className="py-24 px-8 bg-slate-50">
        <div className={cn("max-w-6xl mx-auto flex gap-16", isDesktop ? "flex-row" : "flex-col")}>
          <div className={isDesktop ? "w-1/2" : "w-full"}>
            <span className="text-teal-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Get Started</span>
            <h2 className="text-5xl font-prof text-slate-900 font-bold mb-8 leading-tight">Ready to Elevate Your Strategy?</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Schedule a complimentary 30-minute diagnostic session with our senior partners to discuss your goals and explore potential paths forward.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-teal-400 flex items-center justify-center shadow-lg shadow-slate-900/20">
                  <Phone size={24} />
                </div>
                <div>
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Line</div>
                   <div className="text-xl font-prof font-bold text-slate-900">+1 (800) 456-7890</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white text-teal-600 flex items-center justify-center shadow-md border border-slate-200">
                  <Mail size={24} />
                </div>
                <div>
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Inquiry</div>
                   <div className="text-xl font-prof font-bold text-slate-900">consulting@frontierpro.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn("bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-slate-900/5 relative overflow-hidden", isDesktop ? "w-1/2" : "w-full")}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 blur-3xl rounded-full"></div>
            <form className="space-y-6 relative z-10">
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:bg-white focus:ring-1 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-300" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                     <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:bg-white focus:ring-1 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Company</label>
                     <input type="text" placeholder="Organization" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:bg-white focus:ring-1 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-300" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service of Interest</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:bg-white focus:ring-1 focus:ring-teal-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>Select a service...</option>
                    <option>Strategy & Consulting</option>
                    <option>Risk Management</option>
                    <option>Digital Transformation</option>
                  </select>
               </div>
               <button className="w-full bg-teal-500 text-slate-900 py-5 rounded-xl font-bold shadow-xl shadow-teal-500/10 hover:bg-teal-400 transition-all text-center">
                 Request Consultation
               </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-24 pb-32 px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-xs text-center md:text-left">
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
               <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-slate-900 font-black text-xl">F</div>
               <div className="font-prof font-black tracking-widest text-xl">FRONTIER PRO</div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">Providing high-end professional services to the leaders of the modern business world since 2012.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 w-full md:w-auto">
            <div>
              <h4 className="font-bold text-teal-400 text-xs uppercase tracking-widest mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ethos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-teal-400 text-xs uppercase tracking-widest mb-8">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>+1 (800) 456-7890</li>
                <li>consulting@frontierpro.com</li>
                <li>Suite 400, Sky Tower</li>
                <li>Denver, Colorado</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] text-slate-600 uppercase tracking-[0.4em]">© 2026 Frontier Pro Advisory • A Division of Frontier Web Pros</p>
           <div className="flex gap-6">
             {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-600 hover:text-white hover:border-slate-600 transition-all cursor-pointer"><ChevronRight size={14} /></div>)}
           </div>
        </div>
      </footer>
    </div>
  );
}

function HospitalityTemplatePreview({ viewMode, color }: { viewMode: 'desktop' | 'mobile', color: string }) {
  const isDesktop = viewMode === 'desktop';
  
  return (
    <div className="bg-stone-50 text-stone-900 font-ui">
      {/* 1. HERO SECTION */}
      <section className={cn(
        "relative flex items-center justify-center overflow-hidden",
        isDesktop ? "h-[750px]" : "min-h-[650px] py-24"
      )}>
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Hospitality Interior" 
            className="w-full h-full object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-950/60" />
        </div>
        
        <div className="relative z-10 px-8 text-center max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-xs font-bold tracking-[0.3em] uppercase mb-8"
          >
            <Star size={14} className="text-orange-400 fill-orange-400" /> Locally Owned & Handcrafted
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("font-hosp text-white mb-6 font-bold leading-tight", isDesktop ? "text-7xl" : "text-5xl")}
          >
            Experience Quality <br /> <span className="italic font-light text-orange-200">& Comfort</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn("text-stone-200 mb-12 max-w-2xl mx-auto font-medium", isDesktop ? "text-xl" : "text-base")}
          >
            Delicious food, exceptional service, and a welcoming atmosphere designed for the adventurer in you.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-12 py-5 rounded-2xl font-bold bg-orange-500 text-white hover:bg-orange-400 transition-all shadow-2xl shadow-orange-500/20">
              View Menu
            </button>
            <button className="px-12 py-5 rounded-2xl font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all">
              Book a Table
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-12 opacity-60">
           {["Fresh Ingredients", "Family Friendly", "Handcrafted"].map((badge, i) => (
             <div key={i} className="hidden lg:flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
               <div className="w-1.5 h-1.5 rounded-full bg-orange-400" /> {badge}
             </div>
           ))}
        </div>
      </section>

      {/* 2. MENU HIGHLIGHTS */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-orange-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Seasonal Specialties</span>
            <h2 className="text-5xl font-hosp text-stone-900 font-bold mb-6">Menu Highlights</h2>
            <div className="h-1 w-20 bg-stone-200 mx-auto"></div>
          </div>
          
          <div className={cn("grid gap-12", isDesktop ? "grid-cols-3" : "grid-cols-1")}>
            {[
              { 
                title: "Signature Roast", 
                price: "$18", 
                desc: "Slow-cooked organic beef with root vegetables and artisanal herb butter.",
                img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
              },
              { 
                title: "Wild Berry Tart", 
                price: "$12", 
                desc: "Freshly picked mountain berries on a buttery, gluten-free almond crust.",
                img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=600"
              },
              { 
                title: "Rustic Harvest Bowl", 
                price: "$16", 
                desc: "Quinoa, roasted squash, and local greens tossed in lemon-tahini dressing.",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
              }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 shadow-lg">
                  <SafeImage src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-stone-900 font-bold text-sm shadow-xl">
                    {item.price}
                  </div>
                </div>
                <h3 className="text-2xl font-hosp font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button className="text-orange-600 text-xs font-bold uppercase tracking-widest border-b border-orange-600/20 pb-1 hover:border-orange-600 transition-all">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT BUSINESS */}
      <section className="py-24 px-8 bg-stone-100 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px]" />
        <div className={cn("max-w-7xl mx-auto flex items-center gap-20", isDesktop ? "flex-row" : "flex-col")}>
          <div className={isDesktop ? "w-1/2" : "w-full"}>
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="space-y-6 pt-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                   <SafeImage src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600" alt="Interior" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                   <SafeImage src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" alt="Detail" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                   <SafeImage src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" alt="Cafe" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                   <SafeImage src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" alt="Pizza" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className={cn(isDesktop ? "w-1/2" : "w-full text-center md:text-left")}>
            <span className="text-orange-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Story</span>
            <h2 className="text-5xl font-hosp text-stone-900 font-bold mb-8 italic">Crafted with Love in Denver</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              What started as a small family kitchen has grown into a community staple. We believe that great hospitality begins with the finest ingredients and ends with a smile that says "Welcome Home."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
              {[
                { icon: <ChefHat size={18} />, label: "Fresh Ingredients" },
                { icon: <ShoppingBasket size={18} />, label: "Locally Sourced" },
                { icon: <Coffee size={18} />, label: "Handcrafted Goods" },
                { icon: <Star size={18} />, label: "Award Winning" }
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-800 font-bold">
                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm">
                     {h.icon}
                   </div>
                   <span className="text-sm tracking-wide">{h.label}</span>
                </div>
              ))}
            </div>
            <button className="bg-stone-900 text-white px-12 py-5 rounded-2xl font-bold hover:bg-stone-800 transition-colors shadow-xl">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-hosp text-stone-900 font-bold">Atmosphere & Flavors</h2>
          </div>
          <div className={cn("grid gap-4", isDesktop ? "grid-cols-4" : "grid-cols-2")}>
            {[
              "https://images.unsplash.com/photo-1550966841-3ee5ad601044?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=400"
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                <SafeImage src={img} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REVIEWS */}
      <section className="py-24 px-8 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
           <div className="flex gap-1 mb-8">
             {[1,2,3,4,5].map(i => <Star key={i} size={24} className="fill-white" />)}
           </div>
           <p className="text-3xl font-hosp italic leading-relaxed mb-12">
             "Absolute perfection. The ambiance is warm, the staff is incredibly attentive, and the food... it's like a hug for your soul. We'll be back every weekend."
           </p>
           <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-white/30 p-1 overflow-hidden">
                 <SafeImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Reviewer" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="text-left font-hosp">
                 <div className="text-xl font-bold">Jane Doe</div>
                 <div className="text-xs text-orange-200 font-bold tracking-widest uppercase">Denver, CO</div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. HOURS & LOCATION */}
      <section className="py-24 px-8 bg-stone-50">
        <div className={cn("max-w-7xl mx-auto grid gap-20", isDesktop ? "grid-cols-2" : "grid-cols-1 text-center")}>
           <div>
              <span className="text-orange-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Visit Us</span>
              <h2 className="text-5xl font-hosp text-stone-900 font-bold mb-12">Hours & Location</h2>
              <div className="space-y-4 mb-12 max-w-sm mx-auto md:mx-0">
                 {[
                   { days: "Mon - Thu", hours: "11:00 AM - 9:00 PM" },
                   { days: "Fri - Sat", hours: "11:00 AM - 11:00 PM" },
                   { days: "Sunday", hours: "10:00 AM - 8:00 PM" }
                 ].map((h, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-stone-200 pb-4">
                      <span className="font-bold text-stone-500">{h.days}</span>
                      <span className="font-hosp font-bold text-stone-900">{h.hours}</span>
                   </div>
                 ))}
              </div>
              <div className="flex flex-col gap-4 max-w-xs mx-auto md:mx-0">
                 <div className="flex items-center gap-4 text-left">
                    <MapPin className="text-orange-600 shrink-0" size={24} />
                    <span className="text-stone-700 font-medium">123 Frontier Way, Suite 100 <br /> Denver, Colorado 80202</span>
                 </div>
                 <button className="mt-4 bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/10 flex items-center justify-center gap-2">
                   <MapPin size={18} /> Get Directions
                 </button>
              </div>
           </div>
           <div className="aspect-square bg-stone-200 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative">
              <SafeImage src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" alt="Map" className="w-full h-full object-cover opacity-60 grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white animate-pulse shadow-2xl">
                    <MapPin size={32} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. CONTACT / RESERVATION */}
      <section className="py-24 px-8 bg-stone-900 text-white">
        <div className={cn("max-w-6xl mx-auto flex gap-20", isDesktop ? "flex-row" : "flex-col")}>
          <div className={isDesktop ? "w-1/2" : "w-full"}>
            <h2 className="text-5xl font-hosp font-bold mb-8 text-white">Book Your Table</h2>
            <p className="text-stone-500 text-lg mb-12">
              Planning a special evening or a quick lunch? Reserve your spot now to ensure you have the best seat in the house.
            </p>
            <div className="flex flex-col gap-8 text-white">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-2xl shadow-orange-500/20">
                     <Phone size={28} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Reservation Desk</div>
                    <div className="text-3xl font-hosp font-bold">+1 (555) 987-6543</div>
                  </div>
               </div>
               <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <div key={i} className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all cursor-pointer">
                      <Icon size={20} />
                    </div>
                  ))}
               </div>
            </div>
          </div>
          <div className={cn("bg-stone-800 p-12 rounded-[2.5rem] border border-white/5", isDesktop ? "w-1/2" : "w-full")}>
            <form className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-stone-900 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition-all text-white" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 text-white">
                    <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">Email</label>
                    <input type="email" placeholder="email@example.com" className="w-full bg-stone-900 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition-all text-white" />
                  </div>
                  <div className="space-y-2 text-white">
                    <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">Guests</label>
                    <select className="w-full bg-stone-900 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer text-white">
                       <option>1 Person</option>
                       <option>2 People</option>
                       <option>4 People</option>
                       <option>6+ People</option>
                    </select>
                  </div>
               </div>
               <div className="space-y-2 text-white">
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">Message / Special Request</label>
                  <textarea rows={3} placeholder="Any allergies or special occasions?" className="w-full bg-stone-900 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition-all text-white" />
               </div>
               <button className="w-full bg-white text-stone-900 py-5 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all">
                 Confirm Booking
               </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-24 pb-32 px-8 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 border-b border-white/5 pb-20 mb-10">
           <div className="max-w-xs text-white">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white">
                   <Utensils size={24} />
                 </div>
                 <div className="font-hosp font-black text-2xl tracking-tighter text-white">THE WILDER</div>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">Redefining the hospitality experience through handcrafted flavors and soulful atmosphere in the heart of the city.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-white">
              <div>
                 <h4 className="font-bold text-orange-500 text-[10px] uppercase tracking-widest mb-8">Discovery</h4>
                 <ul className="space-y-4 text-sm text-stone-500">
                    <li><a href="#" className="hover:text-white transition-colors">Our Menu</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-orange-500 text-[10px] uppercase tracking-widest mb-8">Support</h4>
                 <ul className="space-y-4 text-sm text-stone-500">
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                 </ul>
              </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-stone-700 tracking-[0.4em] uppercase font-bold text-white">
           <p>© 2026 The Wilder Hospitality Group • A Frontier Pro Site</p>
           <div className="flex items-center gap-6 text-white">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Sustainability</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

