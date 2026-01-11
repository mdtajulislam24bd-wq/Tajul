import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const navLinks = [{
  name: 'About',
  href: '#about'
}, {
  name: 'Services',
  href: '#services'
}, {
  name: 'Results',
  href: '#results'
}, {
  name: 'Process',
  href: '#process'
}, {
  name: 'Contact',
  href: '#contact'
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20 shadow-none">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-poppins font-bold text-foreground">
              Tajul<span className="text-gradient-gold">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm">
                {link.name}
              </a>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+8801568619196" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+880 1568619196</span>
            </a>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Book Free Call</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground hover:text-primary py-2 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>)}
              <Button variant="hero" size="lg" className="mt-4" asChild>
                <a href="#contact">Book Free Call</a>
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
};
export default Navbar;