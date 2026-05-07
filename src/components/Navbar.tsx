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

  const navLinks = [
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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      style={{ '--nav-height': isScrolled ? '64px' : '72px' } as React.CSSProperties}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6',
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-forest/10 py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
            <img 
              src="/frontier.png" 
              alt="Frontier Logo" 
              className="w-full h-full object-contain transition-all duration-300"
              style={{ filter: isScrolled ? 'none' : 'invert(1)' }}
            />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-forest">
            Frontier<span className="text-frontier-blue font-light">WebPros</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.path} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setServicesDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setServicesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium tracking-wide transition-colors hover:text-forest flex items-center gap-1.5',
                      isActive ? 'text-forest border-b-2 border-forest/20' : 'text-charcoal/60'
                    )
                  }
                >
                  {link.name}
                </NavLink>
                {link.dropdown && (
                  <ChevronDown 
                    size={14} 
                    className={cn(
                      "text-charcoal/40 transition-transform duration-300",
                      servicesDropdownOpen ? "rotate-180" : ""
                    )} 
                  />
                )}
              </div>

              {/* Dropdown Menu */}
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
                                "px-4 py-3 rounded-xl text-sm transition-all hover:bg-forest/5 flex items-center justify-between",
                                isActive ? "text-forest font-bold bg-forest/5" : "text-charcoal/60"
                              )}
                            >
                              {item.name}
                              {item.submenu ? (
                                <ChevronRight 
                                  size={14} 
                                  className={cn(
                                    "text-charcoal/40 transition-transform",
                                    webDesignOpen ? "rotate-90 md:rotate-0 translate-x-1" : ""
                                  )} 
                                />
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-sunrise-orange opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                              )}
                            </NavLink>

                            {/* Nested Submenu (Templates) */}
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
                                            "px-4 py-3 rounded-xl text-sm transition-all hover:bg-forest/5 flex items-center justify-between group/last",
                                            isActive ? "text-forest font-bold bg-forest/5" : "text-charcoal/60"
                                          )}
                                        >
                                          <span className="flex items-center gap-2">
                                            {sub.name}
                                          </span>
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
            className="bg-forest text-mist px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-forest/90 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-forest p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <ScrollProgress />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-mist border-b border-forest/10 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.path} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          'text-lg font-medium py-2 w-full',
                          isActive ? 'text-forest' : 'text-charcoal/60'
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                    {link.dropdown && (
                      <button 
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className="p-3"
                      >
                        <ChevronDown 
                          size={20} 
                          className={cn(
                            "text-charcoal/40 transition-transform",
                            servicesDropdownOpen ? "rotate-180" : ""
                          )} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {link.dropdown && (
                    <motion.div 
                      animate={{ height: servicesDropdownOpen ? 'auto' : 0, opacity: servicesDropdownOpen ? 1 : 0 }}
                      className="overflow-hidden bg-forest/5 rounded-2xl flex flex-col px-4"
                    >
                      {link.dropdown.map((item) => (
                        <div key={item.path} className="flex flex-col">
                          <div className="flex items-center justify-between">
                            <NavLink
                              to={item.path}
                              className={({ isActive }) => cn(
                                "py-3 text-sm border-l-2 pl-4 transition-all w-full",
                                isActive ? "border-sunrise-orange text-forest font-bold" : "border-forest/5 text-charcoal/40"
                              )}
                            >
                              {item.name}
                            </NavLink>
                            {item.submenu && (
                              <button 
                                onClick={() => setWebDesignOpen(!webDesignOpen)}
                                className="p-3"
                              >
                                <ChevronDown 
                                  size={16} 
                                  className={cn(
                                    "text-charcoal/40 transition-transform",
                                    webDesignOpen ? "rotate-180" : ""
                                  )} 
                                />
                              </button>
                            )}
                          </div>
                          
                          {item.submenu && (
                            <motion.div 
                              animate={{ height: webDesignOpen ? 'auto' : 0, opacity: webDesignOpen ? 1 : 0 }}
                              className="overflow-hidden bg-forest/5 rounded-xl flex flex-col px-4 mb-2"
                            >
                              {item.submenu.map((sub) => (
                                <NavLink
                                  key={sub.path}
                                  to={sub.path}
                                  className={({ isActive }) => cn(
                                    "py-3 text-xs border-l pl-4 transition-all",
                                    isActive ? "border-sunrise-orange text-forest font-bold" : "border-forest/5 text-charcoal/40"
                                  )}
                                >
                                  {sub.name}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <NavLink
                to="/contact"
                className="bg-forest text-mist px-6 py-4 rounded-xl text-center font-bold mt-4"
              >
                Request a Quote
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
