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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const mainLinks = [
    { name: 'Home', path: '/' },
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
                        className="absolute top-full left-0 pt-4 w-60 z-50"
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
            className="lg:hidden w-10 h-10 flex items-center justify-center relative z-[60] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span 
                animate={mobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#F9FAF1" } : { rotate: 0, y: 0, backgroundColor: "#224458" }}
                className="w-full h-0.5 rounded-full"
              />
              <motion.span 
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#224458" }}
                className="w-full h-0.5 rounded-full"
              />
              <motion.span 
                animate={mobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: "#F9FAF1" } : { rotate: 0, y: 0, backgroundColor: "#224458" }}
                className="w-full h-0.5 rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      <ScrollProgress />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-forest/98 backdrop-blur-3xl z-40 lg:hidden flex flex-col h-[100dvh] overflow-hidden"
          >
            {/* Safe area for header */}
            <div className="h-[88px] flex-shrink-0" />

            <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6 min-h-0">
              <div className="flex flex-col items-center gap-3 w-full">
                {mainLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex flex-col items-center w-full"
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => cn(
                        "text-lg font-display tracking-tight transition-all py-1",
                        isActive ? "text-sunrise-orange scale-105" : "text-mist/90 hover:text-white"
                      )}
                    >
                      {link.name}
                    </NavLink>
                    
                    {link.dropdown && (
                      <div className="flex flex-col items-center gap-1 mt-1 opacity-60">
                        {link.dropdown.map((item) => (
                          <div key={item.path} className="flex flex-col items-center">
                            <NavLink 
                              to={item.path} 
                              className="text-mist/70 text-[10px] uppercase tracking-widest font-bold hover:text-mist transition-colors py-0.5"
                            >
                              {item.name}
                            </NavLink>
                            {item.submenu && (
                              <div className="flex flex-col items-center gap-0.5 opacity-60">
                                {item.submenu.map(sub => (
                                  <NavLink 
                                    key={sub.path} 
                                    to={sub.path} 
                                    className="text-mist/50 text-[9px] uppercase tracking-[0.2em] font-black hover:text-mist transition-colors py-0.5"
                                  >
                                    {sub.name}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-[180px]"
              >
                <NavLink
                  to="/contact"
                  className="bg-sunrise-orange text-mist px-6 py-2.5 rounded-full text-center font-bold text-[10px] block shadow-lg shadow-sunrise-orange/10 active:scale-95 transition-all uppercase tracking-[0.2em]"
                >
                  Request a Quote
                </NavLink>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-shrink-0 pb-8 flex flex-col items-center gap-3"
            >
              <div className="h-px bg-white/5 w-12" />
              <div className="flex flex-col items-center gap-1.5">
                <p className="text-mist/20 text-[6px] tracking-[0.4em] uppercase font-black">
                  Frontier Web Pros
                </p>
                <div className="flex gap-8 text-mist/30 text-[8px] tracking-widest uppercase font-bold">
                  <a href="#" className="hover:text-sunrise-orange transition-colors">Insta</a>
                  <a href="#" className="hover:text-sunrise-orange transition-colors">In</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
