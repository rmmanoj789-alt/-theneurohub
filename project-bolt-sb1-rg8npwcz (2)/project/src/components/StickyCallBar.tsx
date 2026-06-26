import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const PHONE = '+917092381402';
const WHATSAPP_NUM = '+919715042170';
const WHATSAPP = `https://wa.me/${WHATSAPP_NUM}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Neuro%20Hub%20Wellness%20Centre.`;

export default function StickyCallBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex items-center justify-between gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-teal-600 to-brand-800 shadow-glow whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">Call Now</span>
          <span className="xs:hidden">Call</span>
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-emerald-700 border-2 border-emerald-500 bg-emerald-50 whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">WhatsApp</span>
          <span className="xs:hidden">Chat</span>
        </a>
        <a
          href="#appointment"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#appointment');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-brand-700 border-2 border-brand-500 bg-brand-50 whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Book
        </a>
      </div>
    </motion.div>
  );
}
