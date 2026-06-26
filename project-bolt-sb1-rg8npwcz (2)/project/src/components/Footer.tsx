import { Brain, Phone, Mail, Clock, MapPin, Heart, Instagram, MessageCircle, Navigation } from 'lucide-react';

const PHONE = '+917092381402';
const PHONE_DISPLAY = '+91 70923 81402';
const WHATSAPP_NUM = '+919715042170';
const INSTAGRAM = 'https://www.instagram.com/theneurohub26/';
const WHATSAPP = `https://wa.me/${WHATSAPP_NUM}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Neuro%20Hub%20Wellness%20Centre.`;
const EMAIL = 'mailto:theneurohub26@gmail.com';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=The+Neuro+Hub+Wellness+Centre,Sundarapuram,Coimbatore';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Conditions', href: '#conditions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Journey', href: '#journey' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book Appointment', href: '#appointment' },
];

const services = [
  'Neurological & Rehabilitation',
  'Bone, Joint & Mobility',
  'Digestive & Internal Wellness',
  "Women's Wellness",
  'Respiratory & ENT Wellness',
  'General Wellness Support',
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-navy-950 text-white/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-brand-600 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-base font-bold text-white leading-tight">The Neuro Hub</div>
                <div className="text-xs text-white/60 leading-tight">Wellness Centre</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Natural healing through advanced neurotherapy. Drug-free, non-invasive wellness support for a better quality of life.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
              <Heart className="w-3.5 h-3.5 text-teal-400" />
              Made with care for your wellness
            </div>
            {/* Social buttons */}
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-rose-500 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-emerald-500 hover:text-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={EMAIL}
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-500 hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${PHONE}`}
                aria-label="Call"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-teal-500 hover:text-white transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-white/60 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5">Our Wellness Areas</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#conditions"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('#conditions');
                    }}
                    className="text-sm text-white/60 hover:text-teal-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-teal-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-teal-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-rose-400 shrink-0" />
                  @theneurohub26
                </a>
              </li>
              <li>
                <a
                  href={EMAIL}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                  theneurohub26@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  Open 7 Days a Week
                  <br />
                  Monday – Sunday
                  <br />
                  9:00 AM – 7:00 PM
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  The Neuro Hub Wellness Centre
                  <br />
                  Sundarapuram, Coimbatore, Tamil Nadu
                </span>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500/20 text-teal-300 text-sm font-semibold hover:bg-teal-500/30 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="max-w-4xl mx-auto section-padding py-8 text-center">
          <p className="text-xs text-white/40 leading-relaxed mb-3">
            <strong className="text-white/60">Disclaimer:</strong> Results vary from person to person. The services offered are intended to support wellness and quality of life and are not a substitute for emergency medical care, diagnosis, or treatment by qualified medical professionals.
          </p>
          <p className="text-xs text-white/30">
            If you are experiencing a medical emergency, please call your local emergency services or visit the nearest hospital immediately.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} The Neuro Hub Wellness Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">Drug-Free</span>
            <span className="text-xs text-white/40">Non-Invasive</span>
            <span className="text-xs text-white/40">Natural Healing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
