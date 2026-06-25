import { motion } from 'framer-motion';
import { ClipboardList, FileText, Activity, TrendingUp, Heart } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Assessment',
    desc: 'A thorough understanding of your health history, concerns, and wellness goals to create a complete picture of your needs.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Personalized Wellness Plan',
    desc: 'A custom-designed neurotherapy and wellness program tailored specifically to your body, condition, and lifestyle.',
  },
  {
    icon: Activity,
    step: '03',
    title: 'Neurotherapy Sessions',
    desc: 'Gentle, non-invasive sessions that stimulate your nervous system and support your body\'s natural healing response.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Progress Monitoring',
    desc: 'Regular tracking of improvements with adjustments to your plan to maximize results at every stage.',
  },
  {
    icon: Heart,
    step: '05',
    title: 'Better Quality of Life',
    desc: 'Sustained improvements in mobility, comfort, sleep, and overall wellbeing — naturally and drug-free.',
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-4">
            Supporting Your Body&apos;s <span className="gradient-text">Natural Healing</span>
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            Instead of focusing only on diseases, we focus on supporting your body&apos;s natural healing mechanisms through neurotherapy and wellness-based care.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-200 via-teal-400 to-brand-300 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                    i > 0 ? 'lg:mt-12' : ''
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}
                  >
                    <div
                      className={`p-5 sm:p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-elevated transition-all duration-300 w-full lg:max-w-[480px] ${
                        isLeft ? 'lg:ml-auto' : ''
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? 'lg:flex-row-reverse' : ''
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-brand-600 flex items-center justify-center shadow-glow shrink-0">
                          <s.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-2xl font-extrabold text-teal-600/30">{s.step}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">{s.title}</h3>
                      <p className="text-navy-500 leading-relaxed text-sm md:text-base">{s.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-teal-500 border-4 border-white shadow-md" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
