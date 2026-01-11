import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Rocket, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    week: 'Week 1',
    title: 'BUSINESS AUDIT',
    description: "Deep dive into your offer, margins, and current marketing. No ads until we fix the foundation.",
    icon: Search,
  },
  {
    week: 'Week 2',
    title: 'CAMPAIGN BUILD',
    description: "Custom ad strategy, high-converting creative, pixel-perfect tracking setup.",
    icon: Rocket,
  },
  {
    week: 'Week 3',
    title: 'LAUNCH & OPTIMIZE',
    description: "Go live. Daily monitoring. Real-time budget shifts. A/B testing.",
    icon: BarChart3,
  },
  {
    week: 'Week 4',
    title: 'SCALE & SYSTEMATIZE',
    description: "Identify winning audiences. Build SOPs. Train your team. Plan next quarter.",
    icon: TrendingUp,
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-card to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              My Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your 30-Day{' '}
              <span className="text-gradient-gold">Profit Roadmap</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven, systematic approach that transforms your marketing into a predictable profit engine.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative h-full"
                >
                  <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center group h-full flex flex-col">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-gold text-primary-foreground text-sm font-bold">
                      {step.week}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center mx-auto mt-4 mb-6 group-hover:border-primary/50 group-hover:shadow-gold/20 group-hover:shadow-lg transition-all shrink-0">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="group">
                Book Your Free 45-Minute Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
