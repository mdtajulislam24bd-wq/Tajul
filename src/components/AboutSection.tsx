import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, PenTool, MapPin, Mail, Phone } from 'lucide-react';
const expertise = [{
  icon: Target,
  label: 'Meta Ads Precision',
  desc: 'Every dollar tracked'
}, {
  icon: TrendingUp,
  label: 'Business Consulting',
  desc: 'Strategy before spending'
}, {
  icon: PenTool,
  label: 'Copywriting That Sells',
  desc: 'Words that convert'
}];
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
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
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              I'm Tajul Islam And I've Been{' '}
              <span className="text-gradient-gold">In Your Shoes</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Main Content */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">Most marketers talk theory. I talk results because I'm running my own business while helping others scale theirs.</p>
              
              <p className="text-lg text-foreground leading-relaxed">
                For 3 years, I've sat where you sit:
              </p>
              
              <ul className="space-y-3">
                {['Worrying if ad spend will actually convert', 'Wondering why "traffic" doesn\'t mean "sales"', 'Frustrated with agencies that overpromise and underdeliver'].map((item, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={isInView ? {
                opacity: 1,
                x: 0
              } : {}} transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1
              }} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary text-xl">→</span>
                    {item}
                  </motion.li>)}
              </ul>

              <p className="text-lg text-foreground leading-relaxed pt-4">
                That's why I built a system that combines:
              </p>

              {/* Expertise Cards */}
              <div className="grid gap-4 pt-2">
                {expertise.map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} animate={isInView ? {
                opacity: 1,
                y: 0
              } : {}} transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.1
              }} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Story Card */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="space-y-8">
              {/* Quote Card */}
              <div className="border-gold-gradient rounded-2xl p-8 bg-card">
                <div className="text-5xl text-primary mb-4">"</div>
                <p className="text-lg text-foreground leading-relaxed italic mb-6">
                  Started with one client, one laptop, and a simple promise: I'll treat your business like mine. Today, I've helped 50+ local businesses in Bangladesh generate over $2M in revenue. My secret? I never forgot what it's like to be the underdog.
                </p>
                <p className="text-primary font-semibold">— Tajul Islam</p>
              </div>

              {/* Result Highlight */}
              <div className="p-6 rounded-2xl bg-gradient-gold text-primary-foreground text-center">
                <p className="text-lg font-medium mb-2">THE RESULT?</p>
                <p className="text-2xl font-bold">My clients don't just get leads they get predictable, profitable growth.</p>
              </div>

              {/* Contact Info */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Get In Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span>House 03, Road No. 10, Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <a href="mailto:mdtajulislam24bd@gmail.com" className="hover:text-primary transition-colors">
                      mdtajulislam24bd@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a href="tel:+8801568619196" className="hover:text-primary transition-colors">
                      +880 1568619196
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;