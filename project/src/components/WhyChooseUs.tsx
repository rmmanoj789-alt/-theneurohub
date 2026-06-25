import { motion } from 'framer-motion';
import {
  Pill,
  Scissors,
  UserCheck,
  Heart,
  Home,
  ClipboardList,
  GraduationCap,
  SmilePlus,
} from 'lucide-react';

const features = [
  {
    icon: Pill,
    title: 'Drug-Free Wellness Support',
    desc: 'No medications, no chemicals — just your body healing itself through natural neurostimulation and wellness care.',
  },
  {
    icon: Scissors,
    title: 'No Surgery Approach',
    desc: 'Our non-invasive methods work externally to support your body without any surgical intervention.',
  },
  {
    icon: UserCheck,
    title: 'Individual Attention',
    desc: 'Every patient receives dedicated one-on-one care tailored to their unique condition and wellness goals.',
  },
  {
    icon: Heart,
    title: 'Holistic Care',
    desc: 'We address the whole person — mind, body, and nervous system — for comprehensive wellness support.',
  },
  {
    icon: Home,
    title: 'Comfortable Environment',
    desc: 'A calm, welcoming space designed to help you relax and focus on your healing journey.',
  },
  {
    icon: ClipboardList,
    title: 'Wellness-Focused Programs',
    desc: 'Programs designed around long-term wellness, not just temporary symptom relief.',
  },
  {
    icon: GraduationCap,
    title: 'Professional Guidance',
    desc: 'Led by experienced neurotherapy consultant M. Sarojadevi with over a decade of clinical practice.',
  },
  {
    icon: SmilePlus,
    title: 'Patient-Centered Approach',
    desc: 'Your comfort, progress, and satisfaction are at the center of everything we do.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-50/50 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-50/50 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-4">
            Why People Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-4">
            Trusted for <span className="gradient-text">Natural Wellness</span>
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            Discover why families across the region trust The Neuro Hub Wellness Centre for their wellness journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group p-6 md:p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-brand-600 flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">{f.title}</h3>
              <p className="text-sm text-navy-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
