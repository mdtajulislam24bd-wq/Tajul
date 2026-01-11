import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
const caseStudies = [{
  industry: 'Furniture Store',
  location: 'Dhaka',
  result: '417% ROI',
  timeframe: '60 Days',
  challenge: '$5k spent, zero sales. Website traffic but no conversions.',
  approach: 'Fixed offer messaging, built 3-step funnel, retargeted abandoned carts.',
  revenue: '$25,850',
  adSpend: '$5k'
}, {
  industry: 'Cafe Chain',
  location: 'Dhaka',
  result: '285% ROI',
  timeframe: '45 Days',
  challenge: 'Low foot traffic, weak social presence, no repeat customers.',
  approach: 'Local targeting, UGC content strategy, loyalty program integration.',
  revenue: '$18,200',
  adSpend: '$4.7k'
}, {
  industry: 'E-commerce Store',
  location: 'Bangladesh',
  result: '520% ROI',
  timeframe: '90 Days',
  challenge: 'High cart abandonment, low average order value.',
  approach: 'Retargeting sequences, upsell funnels, email automation.',
  revenue: '$45,000',
  adSpend: '$7.2k'
}, {
  industry: 'Fitness Studio',
  location: 'Dhaka',
  result: '340% ROI',
  timeframe: '30 Days',
  challenge: 'Seasonal business, inconsistent lead flow.',
  approach: 'Membership offers, lead magnets, community building.',
  revenue: '$12,500',
  adSpend: '$2.8k'
}, {
  industry: 'Restaurant',
  location: 'Chattogram',
  result: '380% ROI',
  timeframe: '45 Days',
  challenge: 'New location, zero brand awareness in the area.',
  approach: 'Grand opening campaign, influencer partnerships, geo-targeted ads.',
  revenue: '$22,000',
  adSpend: '$4.6k'
}, {
  industry: 'Fashion Boutique',
  location: 'Dhaka',
  result: '290% ROI',
  timeframe: '60 Days',
  challenge: 'Low online sales, competition from big brands.',
  approach: 'Lifestyle branding, lookalike audiences, seasonal campaigns.',
  revenue: '$16,800',
  adSpend: '$4.3k'
}];
const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section id="results" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-card to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Real Results From{' '}
              <span className="text-gradient-gold">Real Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how local businesses like yours transformed their marketing into predictable, profitable growth.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.1 + index * 0.1
          }} className="group">
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold/10 hover:shadow-xl flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-sm text-primary font-medium">{study.industry}</span>
                      <h3 className="text-xl font-bold text-foreground">{study.location}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient-gold">{study.result}</div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground justify-end">
                        <Clock className="w-3 h-3" />
                        {study.timeframe}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-border mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-green-400 mb-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold">{study.revenue}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Revenue</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold">{study.adSpend}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Ad Spend</span>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-3 flex-grow">
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>

                  {/* Approach */}
                  <div className="mb-4">
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">My Approach</p>
                    <p className="text-sm text-foreground">{study.approach}</p>
                  </div>

                  {/* CTA */}
                  
                </div>
              </motion.div>)}
          </div>

          {/* CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ready to become the next success story?</p>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Start Your Transformation</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ResultsSection;