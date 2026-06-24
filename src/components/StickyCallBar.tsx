import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const PHONE = '+917092381402';
const WHATSAPP = `https://wa.me/${PHONE}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Neuro%20Hub%20Wellness%20Centre.`;

export default function StickyCallBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden"
    >
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-teal-600 to-brand-800 shadow-glow"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-bold text-emerald-700 border-2 border-emerald-500 bg-emerald-50"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href="#appointment"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#appointment');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-bold text-brand-700 border-2 border-brand-500 bg-brand-50"
        >
          <Calendar className="w-4 h-4" />
          Book
        </a>
      </div>
    </motion.div>
  );
}
