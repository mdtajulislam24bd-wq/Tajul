import { Facebook, Linkedin, Mail, Phone } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [{
      name: 'Meta Ads Management',
      href: '#services'
    }, {
      name: 'Business Consulting',
      href: '#services'
    }, {
      name: 'Copywriting',
      href: '#services'
    }],
    company: [{
      name: 'About',
      href: '#about'
    }, {
      name: 'Case Studies',
      href: '#results'
    }, {
      name: 'Process',
      href: '#process'
    }, {
      name: 'Contact',
      href: '#contact'
    }]
  };
  const socialLinks = [{
    icon: Facebook,
    href: 'https://www.facebook.com/ostadtajul',
    label: 'Facebook'
  }, {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/iamtajul/',
    label: 'LinkedIn'
  }, {
    icon: Mail,
    href: 'mailto:mdtajulislam24bd@gmail.com',
    label: 'Email'
  }, {
    icon: Phone,
    href: 'tel:+8801568619196',
    label: 'Phone'
  }];
  return <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-poppins font-bold text-foreground">
                Tajul<span className="text-gradient-gold">.</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Turning Ad Spend Into Profit. Turning Businesses Into Brands. 
              Your trusted digital marketing partner for sustainable growth.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tajul Islam. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground">Serving local businesses across worldwide.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;