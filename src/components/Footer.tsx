import { NavLink } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-mist/60 py-16 px-6 border-t border-frontier-blue/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <img 
              src="/frontier.png"
              className="w-12 h-12 object-contain invert opacity-90 drop-shadow-xl transition-transform hover:rotate-3"
              alt="Frontier Web Pros Logo" 
            />
            <span className="font-display text-2xl font-bold tracking-tighter text-mist">
              Frontier<span className="text-frontier-blue font-light">WebPros</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Empowering local entrepreneurs and small business owners to dominate their markets with world-class digital performance.
          </p>
        </div>

        <div>
          <h4 className="text-mist font-display font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><NavLink to="/" className="hover:text-mist transition-colors">Home</NavLink></li>
            <li><NavLink to="/services" className="hover:text-mist transition-colors">Services</NavLink></li>
            <li><NavLink to="/portfolio" className="hover:text-mist transition-colors">Templates</NavLink></li>
            <li><NavLink to="/about" className="hover:text-mist transition-colors">About Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-mist transition-colors">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-mist font-display font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><NavLink to="/services/web-design" className="hover:text-mist transition-colors">Website Design</NavLink></li>
            <li><NavLink to="/services/seo" className="hover:text-mist transition-colors">SEO</NavLink></li>
            <li><NavLink to="/services/hosting" className="hover:text-mist transition-colors">Secure Hosting</NavLink></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-mist font-display font-bold mb-6">Contact Us</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 group">
              <Phone size={18} className="text-mist shrink-0" />
              <a href="tel:8019800391" className="hover:text-mist transition-colors">(801) 980-0391</a>
            </div>
            <div className="flex items-center gap-3 group">
              <Mail size={18} className="text-mist shrink-0" />
              <a href="mailto:frontoffice@frontierwebpros.com" className="hover:text-mist transition-colors">frontoffice@frontierwebpros.com</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-mist/10 text-center text-xs tracking-widest uppercase">
        © {currentYear} Frontier Web Pros. Built for small business success.
      </div>
    </footer>
  );
}
