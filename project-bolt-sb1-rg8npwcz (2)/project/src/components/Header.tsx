import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Brain, Instagram, Mail, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Conditions', href: '#conditions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Journey', href: '#journey' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const PHONE = '+917092381402';
const PHONE_DISPLAY = '+91 70923 81402';
const WHATSAPP_NUM = '+919715042170';
const INSTAGRAM = 'https://www.instagram.com/theneurohub26/';
const WHATSAPP = `https://wa.me/${WHATSAPP_NUM}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Neuro%20Hub%20Wellness%20Centre.`;
const EMAIL = 'mailto:theneurohub26@gmail.com';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-slate-100'
            : 'bg-transparent'
        )}
      >
        {/* Emergency top bar */}
        <div
          className={cn(
            'hidden lg:flex items-center justify-between text-xs font-medium transition-all duration-300 overflow-hidden',
            scrolled
              ? 'bg-teal-50 text-teal-800 py-2 section-padding'
              : 'bg-white/10 text-white/90 py-2 section-padding'
          )}
        >
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 hover:underline">
              <Phone className="w-3 h-3" />
              {PHONE_DISPLAY}
            </a>
            <span>Mon – Sun | 9:00 AM – 7:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-80">Drug-Free • Natural • Non-Invasive</span>
            <div className="flex items-center gap-2">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-70 transition-opacity">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a href={EMAIL} aria-label="Email" className="hover:opacity-70 transition-opacity">
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="section-padding">
          <div className="flex items-center justify-between h-14 md:h-[4.5rem]">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 group"
            >
              <div
                className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                  scrolled
                    ? 'bg-gradient-to-br from-teal-600 to-brand-800'
                    : 'bg-white/20'
                )}
              >
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    'text-sm md:text-base font-bold leading-tight tracking-tight transition-colors',
                    scrolled ? 'text-navy-900' : 'text-white'
                  )}
                >
                  The Neuro Hub
                </span>
                <span
                  className={cn(
                    'text-[10px] md:text-xs font-medium leading-tight transition-colors',
                    scrolled ? 'text-teal-700' : 'text-white/80'
                  )}
                >
                  Wellness Centre
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    'px-2.5 py-2 rounded-lg text-sm font-medium transition-colors',
                    scrolled
                      ? 'text-navy-600 hover:text-teal-700 hover:bg-teal-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all',
                  scrolled
                    ? 'text-teal-700 hover:bg-teal-50'
                    : 'text-white/90 hover:bg-white/10'
                )}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#appointment');
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-brand-800 hover:shadow-glow transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors',
                scrolled
                  ? 'text-navy-800 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-600 to-brand-800 flex items-center justify-center">
                      <Brain className="w-[18px] h-[18px] text-white" />
                    </div>
                    <span className="text-sm font-bold text-navy-900">The Neuro Hub</span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg text-navy-600 hover:bg-slate-100"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 px-3">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center px-3 py-3 rounded-xl text-navy-700 font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="p-5 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-navy-600 hover:bg-teal-50 hover:text-teal-700 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-navy-600 hover:bg-teal-50 hover:text-teal-700 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a href={EMAIL} aria-label="Email" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-navy-600 hover:bg-teal-50 hover:text-teal-700 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href={`tel:${PHONE}`} aria-label="Call" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-navy-600 hover:bg-teal-50 hover:text-teal-700 transition-colors">
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-teal-600 text-teal-700 font-semibold hover:bg-teal-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href="#appointment"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#appointment');
                    }}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-teal-600 to-brand-800"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
