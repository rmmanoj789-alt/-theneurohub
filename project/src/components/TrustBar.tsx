import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Heart, ThumbsUp, Sparkles } from 'lucide-react';

const stats = [
  { icon: Sparkles, value: 1000, suffix: '+', label: 'Wellness Sessions' },
  { icon: Users, value: 500, suffix: '+', label: 'Families Supported' },
  { icon: ThumbsUp, value: 95, suffix: '%', label: 'Patient Satisfaction' },
  { icon: Heart, value: 1, suffix: '', label: 'Personalized Care for Every Individual' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-8 md:-mt-12 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 px-5 py-6 md:px-6 md:py-7 rounded-2xl bg-white border border-slate-100 shadow-soft card-hover text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-brand-50 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-navy-900">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-navy-500 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
