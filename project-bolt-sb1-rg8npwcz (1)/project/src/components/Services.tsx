import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Bone,
  Heart,
  Apple,
  User,
  Wind,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

const categories = [
  {
    id: 'neuro',
    label: 'Neurological & Rehabilitation',
    icon: Brain,
    color: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    items: [
      'Intellectual / Developmental Disability',
      'Stroke Rehabilitation',
      'Speech Therapy',
      'Nerve Weakness',
      'Nervous System Disorders',
      'Muscular Dystrophy',
      'Muscle Cramps',
      'Migraine Therapy',
      'Neck Therapy / Neck Massage',
      'Thoracic T1 / T2 Related Problems',
      'Spinal Problems',
    ],
  },
  {
    id: 'bone',
    label: 'Bone, Joint & Mobility',
    icon: Bone,
    color: 'from-brand-500 to-brand-700',
    bg: 'bg-brand-50',
    border: 'border-brand-200',
    text: 'text-brand-700',
    items: [
      'Knee Problems',
      'Knee Pain',
      'Shoulder Pain',
      'Back Pain',
      'Joint Pain',
      'Rheumatoid Arthritis',
      'Varicose Veins',
    ],
  },
  {
    id: 'digestive',
    label: 'Digestive & Internal Wellness',
    icon: Apple,
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    items: [
      'Constipation',
      'Piles',
      'Digestive Disorders',
      'Ulcer Problems',
      'Liver Disorders',
      'Gallbladder Problems',
      'Pancreas Disorders',
      'Kidney Stones',
    ],
  },
  {
    id: 'women',
    label: "Women's Wellness",
    icon: User,
    color: 'from-rose-400 to-pink-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    items: [
      'Uterus Related Problems',
      'Menstrual Disorders',
    ],
  },
  {
    id: 'respiratory',
    label: 'Respiratory & ENT Wellness',
    icon: Wind,
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    items: [
      'Lung Problems',
      'Sinus Problems',
    ],
  },
  {
    id: 'general',
    label: 'General Wellness Support',
    icon: Heart,
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    items: [
      'Thyroid Disorders',
      'Ringworm / Dermatophytosis',
      'Blood Pressure Monitoring',
      'Diabetes Support',
      'Hemoglobin Support',
      'Vitamin C Support',
      'Vitamin D Support',
      'Vitamin E Support',
      'Vitamin B12 Support',
    ],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>('neuro');

  return (
    <section id="conditions" className="py-20 md:py-28 gradient-bg">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-teal-700 text-sm font-semibold mb-4 shadow-soft">
            Conditions We Support
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-4">
            Comprehensive <span className="gradient-text">Wellness Support</span>
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            Our neurotherapy and wellness programs are designed to support a wide range of health conditions — naturally and holistically.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeId === cat.id
                  ? `${cat.bg} ${cat.text} ${cat.border} shadow-soft`
                  : 'bg-white text-navy-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <cat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline">{cat.label}</span>
              <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform shrink-0 ${activeId === cat.id ? 'rotate-180' : ''}`}
              />
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {categories
              .filter((cat) => activeId === null || activeId === cat.id)
              .map((cat) => (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={`rounded-2xl border ${cat.border} bg-white shadow-soft hover:shadow-elevated transition-all overflow-hidden`}
                >
                  {/* Card Header */}
                  <div className={`px-6 py-5 bg-gradient-to-r ${cat.color}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <cat.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{cat.label}</h3>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="p-6">
                    <ul className="space-y-2.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-gradient-to-r ${cat.color}`}
                          />
                          <span className="text-navy-700 text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Show all button */}
        {activeId !== null && (
          <div className="text-center mt-8">
            <button
              onClick={() => setActiveId(null)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-teal-700 bg-white border border-teal-200 hover:bg-teal-50 transition-all shadow-soft"
            >
              <Sparkles className="w-4 h-4" />
              Show All Categories
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
