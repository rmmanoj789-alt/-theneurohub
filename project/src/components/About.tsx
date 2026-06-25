import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Leaf } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Patient-Centered Care',
    desc: 'Every wellness plan is personalized to address your unique health concerns and quality of life goals.',
  },
  {
    icon: Heart,
    title: 'Holistic Approach',
    desc: 'We support the root cause, not just symptoms — restoring balance to your entire nervous system.',
  },
  {
    icon: Lightbulb,
    title: 'Evidence-Based Methods',
    desc: 'Our neurotherapy protocols are grounded in neuroscience and proven therapeutic techniques.',
  },
  {
    icon: Leaf,
    title: '100% Natural & Safe',
    desc: 'No drugs, no surgery, no side effects — just your body\'s innate ability to heal itself.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 gradient-bg">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Image area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-teal-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-500 to-brand-700 flex items-center justify-center shadow-glow">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">The Neuro Hub</h3>
                  <p className="text-navy-600">Wellness Centre</p>
                </div>
              </div>
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 md:right-8 px-6 py-4 rounded-2xl bg-white shadow-elevated border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <div className="text-lg font-bold text-navy-900">100%</div>
                  <div className="text-xs text-navy-500">Natural Healing</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-4">
                About Our Centre
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
                Supporting Wellness Through{' '}
                <span className="gradient-text">Natural Neurotherapy</span>
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                At The Neuro Hub Wellness Centre, we believe your body has an incredible capacity to heal itself. 
                Our neurotherapy treatments harness this power — stimulating the nervous system to restore balance, 
                reduce discomfort, and improve overall wellbeing without drugs or invasive procedures.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="group p-5 rounded-2xl bg-white/60 border border-slate-100 hover:bg-white hover:shadow-soft transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-50 to-brand-50 flex items-center justify-center mb-3 group-hover:from-teal-100 group-hover:to-brand-100 transition-colors">
                    <feat.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h4 className="font-bold text-navy-900 mb-1.5">{feat.title}</h4>
                  <p className="text-sm text-navy-500 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
