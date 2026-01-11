import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahim Ahmed',
    business: 'Owner, Dhaka Cafe Chain',
    quote: "I thought Tajul was just another ad guy. He restructured my entire sales process. Best investment I've made.",
    stars: 5,
  },
  {
    name: 'Fatima Khan',
    business: 'E-commerce Store Owner',
    quote: "He speaks business, not jargon. That's rare. Our revenue tripled in 3 months.",
    stars: 5,
  },
  {
    name: 'Kamal Hossain',
    business: 'Furniture Showroom',
    quote: "From zero online sales to $25k in 60 days. Tajul doesn't just promise, he delivers.",
    stars: 5,
  },
  {
    name: 'Nadia Rahman',
    business: 'Fashion Boutique Owner',
    quote: "Finally someone who understands local business challenges. Our ROAS went from 0.8 to 3.2!",
    stars: 5,
  },
  {
    name: 'Imran Shah',
    business: 'Restaurant Owner, Chattogram',
    quote: "Opening a new location was scary until Tajul's launch campaign brought in 200+ customers week one.",
    stars: 5,
  },
  {
    name: 'Sadia Begum',
    business: 'Fitness Studio Owner',
    quote: "He fixed our seasonal slumps. Now we have consistent leads year-round.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

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
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              They Came For Ads.{' '}
              <span className="text-gradient-gold">They Stayed For Growth.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't take my word for it. Here's what business owners across Bangladesh say about working with me.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-lg leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
