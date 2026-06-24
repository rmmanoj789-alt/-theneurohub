import { motion } from 'framer-motion';
import {
  Activity,
  Moon,
  Sun,
  Smile,
  ShieldCheck,
  Heart,
  Sparkles,
} from 'lucide-react';

const progressCards = [
  {
    icon: Activity,
    title: 'Better Mobility',
    desc: 'Improved movement and flexibility for daily activities.',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: ShieldCheck,
    title: 'Improved Comfort',
    desc: 'Reduced discomfort and better quality of daily life.',
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: Moon,
    title: 'Better Sleep',
    desc: 'More restful nights and refreshed mornings.',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    icon: Sun,
    title: 'Enhanced Daily Activities',
    desc: 'Greater energy and ability to enjoy everyday life.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Smile,
    title: 'Improved Confidence',
    desc: 'Feeling better about your health and wellbeing.',
    color: 'from-rose-400 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Better Overall Wellbeing',
    desc: 'A holistic sense of wellness and vitality.',
    color: 'from-emerald-500 to-green-600',
  },
];

export default function Testimonials() {
  return (
    <section id="journey" className="py-20 md:py-28 gradient-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal-100/30 blur-3xl" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-teal-700 text-sm font-semibold mb-4 shadow-soft">
            <Sparkles className="w-4 h-4" />
            Patient Transformation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-4">
            Every Wellness Journey is <span className="gradient-text">Unique</span>
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            While every individual&apos;s experience is different, these are the positive changes our patients often report during their wellness journey with us.
          </p>
        </motion.div>

        {/* Progress Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {progressCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative p-6 md:p-7 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-glow shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1.5">{card.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-navy-400 mt-10 max-w-2xl mx-auto"
        >
          Results vary from person to person. Individual experiences depend on condition severity, consistency of sessions, and adherence to the wellness plan.
        </motion.p>
      </div>
    </section>
  );
}
