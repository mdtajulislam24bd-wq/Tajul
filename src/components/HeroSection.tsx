import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tajulImage from '@/assets/tajul-hero.png';
const stats = [{
  value: '3+',
  label: 'Years Experience'
}, {
  value: '50+',
  label: 'Businesses Helped'
}, {
  value: '$2M+',
  label: 'Revenue Generated'
}, {
  value: '3X',
  label: 'Average ROI'
}];
const trustBadges = ['Meta Certified', '50+ Local Businesses', '3X Avg ROI'];
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="text-center lg:text-left">
            {/* Trust Badges */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {trustBadges.map(badge => <span key={badge} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  {badge}
                </span>)}
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              I Help Local Businesses{' '}
              <span className="text-gradient-gold">3X Their Revenue</span>{' '}
              With Meta Ads & Strategic Consulting
            </motion.h1>

            {/* Subheadline */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">3+ years. 50+ businesses. $2M+ revenue generated. I don't just run ads I build profit engines that work while you sleep.</motion.p>

            {/* CTAs */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="group">
                  Book Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <a href="#results" className="group">
                  <Play className="w-5 h-5" />
                  View Case Studies
                </a>
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: 'easeOut'
        }} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-3xl rounded-full scale-90" />
              
              {/* Image Container */}
              <div className="relative z-10 flex flex-col items-center">
                <img src={tajulImage} alt="Tajul Islam - Digital Marketing Expert" className="w-full max-w-lg lg:max-w-xl object-contain drop-shadow-2xl" />
                
                {/* Decorative line right below image */}
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="w-full max-w-[280px] h-[3px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 -mt-1"
                />
                
                {/* Name below line with small gap */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-lg font-poppins font-semibold tracking-wider text-foreground mt-3"
                >
                  Tajul Islam
                </motion.p>
              </div>

              {/* Floating Card */}
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 1,
              duration: 0.6
            }} className="absolute -right-4 md:right-0 top-1/4 glass-card rounded-2xl p-4 shadow-elevated">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Revenue Generated</p>
                    <p className="text-xl font-bold text-foreground">$2M+</p>
                  </div>
                </div>
              </motion.div>

              {/* Another Floating Card */}
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 1.2,
              duration: 0.6
            }} className="absolute -left-4 md:left-0 bottom-1/4 glass-card rounded-2xl p-4 shadow-elevated">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. ROAS</p>
                    <p className="text-xl font-bold text-foreground">3.2X</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;