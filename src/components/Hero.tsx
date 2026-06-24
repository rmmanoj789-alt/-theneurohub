import { motion } from 'framer-motion';
import { Phone, Calendar, Shield, Heart, Sparkles, Check, ArrowDown, Clock, MapPin, Instagram, Mail, MessageCircle } from 'lucide-react';

const highlights = [
  'No Medicine',
  'No Surgery',
  'Non-Invasive Approach',
  'Personalized Care',
  'Holistic Wellness Support',
];

const PHONE = '+917092381402';
const PHONE_DISPLAY = '+91 70923 81402';
const INSTAGRAM = 'https://www.instagram.com/theneurohub26/';
const WHATSAPP = `https://wa.me/${PHONE}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Neuro%20Hub%20Wellness%20Centre.`;
const EMAIL = 'mailto:theneurohub26@gmail.com';

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-400/10 blur-3xl animate-blob animate-delay-200" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl animate-blob animate-delay-400" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 w-full section-padding pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 text-teal-300" />
                Natural Healing Through Neurotherapy
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
              >
                Your Body Has the Ability to Heal.
                <span className="text-teal-300"> We Help Unlock It Naturally.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Drug-Free Neurotherapy and Wellness Support focused on improving mobility, nerve function, circulation, comfort, and overall quality of life.
              </motion.p>

              {/* Highlight Cards */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
              >
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm font-medium"
                  >
                    <Check className="w-4 h-4 text-teal-300" />
                    {item}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              >
                <button
                  onClick={() => handleScroll('#appointment')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-brand-900 bg-white hover:bg-teal-50 transition-all shadow-elevated hover:shadow-glow hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </button>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </a>
              </motion.div>

              {/* Contact info row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
              >
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm font-medium hover:bg-white/15 transition-all"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={EMAIL}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm font-medium hover:bg-white/15 transition-all"
                >
                  <Mail className="w-4 h-4 text-teal-300" />
                  theneurohub26@gmail.com
                </a>
              </motion.div>

              {/* Working Hours & Location + Social */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
              >
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm">
                  <Clock className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Open 7 Days — 9 AM to 7 PM</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm">
                  <MapPin className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Sundarapuram, Coimbatore</span>
                </div>
              </motion.div>

              {/* Social buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-3 mt-6"
              >
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm font-medium hover:bg-white/15 transition-all"
                >
                  <Instagram className="w-4 h-4 text-teal-300" />
                  @theneurohub26
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm font-medium hover:bg-white/15 transition-all"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  Call Now
                </a>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              {/* Decorative rings */}
              <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute w-[340px] h-[340px] rounded-full border border-white/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              <div className="absolute w-[260px] h-[260px] rounded-full border border-teal-400/20" />

              {/* Central card */}
              <div className="relative w-80 h-96 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 flex flex-col items-center justify-center text-center shadow-glass">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-brand-600 flex items-center justify-center mb-6 shadow-glow">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">The Neuro Hub</h3>
                <p className="text-white/70 text-sm mb-6">Wellness Centre</p>
                <div className="w-full space-y-3">
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 text-white/90 text-sm">
                    <Shield className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Certified Neurotherapy</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 text-white/90 text-sm">
                    <Sparkles className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 text-white/90 text-sm">
                    <Clock className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Mon – Sun | 9 AM – 7 PM</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 text-white/90 text-sm">
                    <MapPin className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Sundarapuram, Coimbatore</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white shadow-elevated text-navy-800 text-sm font-bold"
              >
                1000+ Sessions
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-teal-500 shadow-glow text-white text-sm font-bold"
              >
                95% Satisfaction
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
