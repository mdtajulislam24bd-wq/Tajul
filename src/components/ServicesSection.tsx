import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, LineChart, PenTool, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Target,
    title: 'Meta Paid Ads Management',
    headline: 'Stop Burning Money on "Boost Posts"',
    problem: "You're getting likes but not sales. Your CPL is high. Your funnel leaks money.",
    solutions: [
      'Laser audience targeting (not just demographics, but buyer intent)',
      'Offer-optimized ad creative that stops the scroll',
      'Real-time ROAS tracking & daily optimization',
    ],
    result: 'Average 3.2X ROAS in 90 days for local businesses.',
  },
  {
    icon: LineChart,
    title: 'Business Consulting',
    headline: "Your Business Is Leaking Profit. Let's Plug The Holes.",
    problem: 'You have traffic but low margins. Operational inefficiencies eat your ad profits.',
    solutions: [
      'Audit your offer & pricing structure',
      'Build high-converting sales funnels',
      'Train your team on lead handling',
    ],
    result: 'Clients see 20-40% profit margin increase without spending more on ads.',
  },
  {
    icon: PenTool,
    title: 'Copywriting That Actually Sells',
    headline: 'Words That Convert, Not Just Impress.',
    problem: 'Your product is great, but your messaging is confusing.',
    solutions: [
      'Ad copy that triggers immediate action',
      'Landing page copy that reduces bounce rates by 50%',
      'Email sequences that nurture & close',
    ],
    result: 'I write as a business owner, not a creative writer. Every word is ROI-focused.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How I Help Your Business{' '}
              <span className="text-gradient-gold">Grow</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three powerful services designed to transform your marketing into a predictable profit engine.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:shadow-gold transition-shadow">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  
                  {/* Headline */}
                  <h4 className="text-lg text-primary font-semibold mb-4">{service.headline}</h4>

                  {/* Problem */}
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">The Problem</p>
                    <p className="text-muted-foreground">{service.problem}</p>
                  </div>

                  {/* Solutions */}
                  <div className="mb-6 flex-grow">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">The Solution</p>
                    <ul className="space-y-3">
                      {service.solutions.map((solution, sIndex) => (
                        <li key={sIndex} className="flex items-start gap-3 text-foreground">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <p className="text-sm text-primary font-medium">{service.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="group">
                Get Custom Quote For Your Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
