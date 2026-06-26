import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What is neurotherapy and how does it support wellness?',
    a: 'Neurotherapy is a drug-free, non-invasive wellness approach that uses specialized techniques to stimulate the nervous system. It supports your body\'s natural healing mechanisms by improving nerve signaling, blood circulation, and overall nervous system function — helping the brain and body communicate more effectively.',
  },
  {
    q: 'Is neurotherapy safe for children and elderly patients?',
    a: 'Yes, neurotherapy is completely safe for all age groups including children and senior citizens. Since it is non-invasive and drug-free, there are no side effects or risks associated with the sessions. Each session is gentle and tailored to the individual\'s comfort level.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'The number of sessions varies depending on your condition and its severity. Acute issues may require fewer sessions, while chronic conditions might need more for optimal results. During your initial consultation, we will provide a personalized wellness plan with an estimated timeline.',
  },
  {
    q: 'Will I feel any pain during the treatment?',
    a: 'No, neurotherapy is completely painless. Most patients describe the sensation as mild tingling or a gentle warmth. The sessions are designed to be relaxing and comfortable.',
  },
  {
    q: 'Can neurotherapy replace my current medications?',
    a: 'Neurotherapy is intended to support your overall wellness and quality of life. It can complement your existing treatment plan. However, any changes to prescribed medication should always be discussed with your prescribing doctor.',
  },
  {
    q: 'What conditions does neurotherapy support best?',
    a: 'Neurotherapy is highly effective for supporting conditions related to nerve weakness, migraine, neck and back pain, joint pain, stress and anxiety, sleep disorders, digestive issues, and general wellness. It is also excellent for preventive care.',
  },
  {
    q: 'How long does each session last?',
    a: 'A typical neurotherapy session lasts between 30 to 60 minutes depending on the wellness protocol. We recommend arriving a few minutes early for your first session to complete any necessary paperwork.',
  },
  {
    q: 'Do I need to book an appointment in advance?',
    a: 'Yes, we recommend booking your appointment in advance to ensure availability. You can book through our website, call us at +91 70923 81402, or message us on WhatsApp. Walk-ins are welcome but may have to wait depending on schedule.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-4">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            Everything you need to know about neurotherapy and our wellness programs.
            Can&apos;t find your answer? Reach out to us directly.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="rounded-2xl border border-slate-100 bg-slate-50/50 overflow-hidden transition-colors hover:bg-white hover:shadow-soft"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-navy-800 text-base md:text-lg pr-4">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    openIndex === i
                      ? 'bg-teal-500 text-white shadow-glow'
                      : 'bg-white text-navy-400 border border-slate-200'
                  }`}
                >
                  {openIndex === i ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-navy-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
