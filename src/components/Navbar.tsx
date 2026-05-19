import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import ScrollProgress from './ScrollProgress';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [webDesignOpen, setWebDesignOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset states on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setWebDesignOpen(false);
  }, [location]);

  const mainLinks = [
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { 
          name: 'Web Design', 
          path: '/services/web-design',
          submenu: [
            { name: 'Templates', path: '/portfolio' }
          ]
        },
        { name: 'SEO', path: '/services/seo' },
        { name: 'Hosting', path: '/services/hosting' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      style={{ '--nav-height': isScrolled ? '72px' : '88px' } as React.CSSProperties}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 px-6',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-forest/10 py-4 shadow-xl shadow-forest/5' 
          : 'bg-white/60 backdrop-blur-md py-6 border-b border-forest/5'
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 md:w-14 md:h-14 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 relative">
              <img 
                src="/frontier.png" 
                alt="Frontier Web Pros Logo" 
                className="w-full h-full object-contain transition-all duration-500 drop-shadow(0 4px 12px rgba(34, 68, 88, 0.25))"
              />
            </div>
            <span className="font-display text-2xl font-bold tracking-tighter transition-colors duration-500 text-forest">
              Frontier<span className="text-frontier-blue font-light">WebPros</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {mainLinks.map((link) => (
              <div 
                key={link.path} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setServicesDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setServicesDropdownOpen(false)}
              >
                <div className="flex items-center gap-1.5">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        'text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-300 relative py-2',
                        'text-charcoal/60 hover:text-forest',
                        isActive && 'text-sunrise-orange !opacity-100'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                  {link.dropdown && (
                    <ChevronDown size={14} className={cn("transition-transform duration-300 text-charcoal/40", servicesDropdownOpen ? "rotate-180" : "")} />
                  )}
                </div>

                {/* Services Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 pt-4 w-60"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-forest/5 p-3 flex flex-col gap-1 overflow-visible backdrop-blur-xl">
                          {link.dropdown.map((item) => (
                            <div 
                              key={item.path} 
                              className="relative group/sub"
                              onMouseEnter={() => item.submenu && setWebDesignOpen(true)}
                              onMouseLeave={() => item.submenu && setWebDesignOpen(false)}
                            >
                              <NavLink
                                to={item.path}
                                className={({ isActive }) => cn(
                                  "px-4 py-3 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-forest/5 flex items-center justify-between",
                                  isActive ? "text-forest bg-forest/5" : "text-charcoal/60"
                                )}
                              >
                                {item.name}
                                {item.submenu ? <ChevronRight size={14} /> : <span className="w-1.5 h-1.5 rounded-full bg-sunrise-orange opacity-0 group-hover/sub:opacity-100 transition-opacity" />}
                              </NavLink>

                              {item.submenu && (
                                <AnimatePresence>
                                  {webDesignOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -10 }}
                                      className="absolute top-0 left-full pl-3 w-56"
                                    >
                                      <div className="bg-white rounded-2xl shadow-2xl border border-forest/5 p-2 flex flex-col gap-1">
                                        {item.submenu.map((sub) => (
                                          <NavLink
                                            key={sub.path}
                                            to={sub.path}
                                            className={({ isActive }) => cn(
                                              "px-4 py-3 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-forest/5 flex items-center justify-between group/last",
                                              isActive ? "text-forest bg-forest/5" : "text-charcoal/60"
                                            )}
                                          >
                                            {sub.name}
                                            <span className="w-1 h-1 rounded-full bg-sunrise-orange opacity-0 group-hover/last:opacity-100 transition-opacity" />
                                          </NavLink>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <NavLink
              to="/contact"
              className={cn(
                "px-8 py-3.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 shadow-2xl ml-4",
                "bg-forest text-mist shadow-forest/10 hover:shadow-forest/20"
              )}
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 transition-colors text-forest"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <ScrollProgress />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[var(--nav-height)] bg-forest z-40 lg:hidden p-8 flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              <p className="text-[10px] font-black tracking-[0.5em] uppercase text-white/20">Navigation</p>
              {mainLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <NavLink
                    to={link.path}
                    className="text-4xl font-display text-mist/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </NavLink>
                  {link.dropdown && (
                    <div className="flex flex-col gap-3 pl-6 border-l border-white/10">
                      {link.dropdown.map((item) => (
                        <div key={item.path} className="flex flex-col gap-2">
                          <NavLink to={item.path} className="text-mist/40 text-lg font-display hover:text-white">{item.name}</NavLink>
                          {item.submenu && item.submenu.map(sub => (
                             <NavLink key={sub.path} to={sub.path} className="text-mist/20 text-sm pl-4 border-l border-white/5 hover:text-white">{sub.name}</NavLink>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 space-y-8"
            >
              <div className="h-px bg-white/10 w-full" />
              <NavLink
                to="/contact"
                className="bg-sunrise-orange text-mist px-6 py-5 rounded-2xl text-center font-bold text-xl block shadow-2xl shadow-sunrise-orange/20"
              >
                Request a Quote
              </NavLink>
              <p className="text-mist/30 text-xs text-center tracking-[0.4em] uppercase font-bold pb-12">
                Frontier Web Pros
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
