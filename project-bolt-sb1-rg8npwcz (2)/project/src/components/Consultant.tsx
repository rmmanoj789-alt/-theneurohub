import { motion } from 'framer-motion';
import { Award, GraduationCap, Clock, Users, Star, BadgeCheck, Phone, Calendar } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Certified Neurotherapy Consultant' },
  { icon: GraduationCap, label: 'Specialized Training in Neurotherapy' },
  { icon: Clock, label: '5+ Years of Clinical Practice' },
  { icon: Users, label: '1,000+ Wellness Sessions Delivered' },
];

export default function Consultant() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-50/40 blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-4">
                <BadgeCheck className="w-4 h-4" />
                Meet Your Consultant
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-4">
                M. <span className="gradient-text">Sarojadevi</span>
              </h2>
              <p className="text-teal-600 font-semibold text-lg mb-6">
                Neurotherapy Consultant
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-navy-600 text-lg leading-relaxed mb-8"
            >
              With over a decade of dedicated practice in neurotherapy, M. Sarojadevi has helped 
              hundreds of families find relief and improved quality of life through natural, drug-free 
              wellness support. Her compassionate approach and deep expertise in nervous system regulation 
              make her one of the most trusted neurotherapy consultants in the region.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-teal-600" />
                  </div>
                  <span className="text-sm font-medium text-navy-700">{item.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-1.5 mb-8"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-2 text-sm font-semibold text-navy-700">4.9/5</span>
              <span className="text-sm text-navy-400">from patient feedback</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="tel:+917092381402"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-brand-800 hover:shadow-glow transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('#appointment');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-teal-700 border-2 border-teal-600 hover:bg-teal-50 transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated bg-gradient-to-br from-brand-50 via-teal-50 to-white aspect-[3/4] flex items-center justify-center">
              <div className="text-center p-10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-brand-600 flex items-center justify-center shadow-glow">
                  <span className="text-4xl font-bold text-white">MS</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-1">M. Sarojadevi</h3>
                <p className="text-teal-600 font-medium mb-6">Neurotherapy Consultant</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft">
                  <BadgeCheck className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-semibold text-navy-700">Verified Consultant</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-teal-100/50 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-brand-100/50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
