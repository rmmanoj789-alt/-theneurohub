import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Navigation, MessageCircle, Calendar, Instagram } from 'lucide-react';

const PHONE = '+917092381402';
const PHONE_DISPLAY = '+91 70923 81402';
const INSTAGRAM = 'https://www.instagram.com/theneurohub26/';
const WHATSAPP = `https://wa.me/${PHONE}?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20neurotherapy%20at%20The%20Neuro%20Hub%20Wellness%20Centre.`;
const EMAIL = 'mailto:theneurohub26@gmail.com';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=The+Neuro+Hub+Wellness+Centre,Sundarapuram,Coimbatore';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-4">
            Don&apos;t Wait For Wellness. <span className="gradient-text">Take The First Step Today.</span>
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            Ready to begin your healing journey? Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Phone */}
            <a
              href={`tel:${PHONE}`}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-r from-teal-50 to-white border border-teal-100 hover:shadow-elevated hover:border-teal-200 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-brand-600 flex items-center justify-center shadow-glow shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1">Call Us</h4>
                <p className="text-navy-600 text-sm mb-1">Speak directly with our team</p>
                <p className="text-teal-700 font-bold text-lg group-hover:text-teal-800 transition-colors">
                  {PHONE_DISPLAY}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-white border border-emerald-100 hover:shadow-elevated hover:border-emerald-200 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-glow shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1">WhatsApp</h4>
                <p className="text-navy-600 text-sm mb-1">Quick chat for enquiries & booking</p>
                <p className="text-emerald-700 font-bold text-lg group-hover:text-emerald-800 transition-colors">
                  {PHONE_DISPLAY}
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-r from-rose-50 to-white border border-rose-100 hover:shadow-elevated hover:border-rose-200 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-glow shrink-0">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1">Instagram</h4>
                <p className="text-navy-600 text-sm mb-1">Follow us for updates & wellness tips</p>
                <p className="text-rose-700 font-bold text-lg group-hover:text-rose-800 transition-colors">
                  @theneurohub26
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={EMAIL}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-r from-brand-50 to-white border border-brand-100 hover:shadow-elevated hover:border-brand-200 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1">Email Us</h4>
                <p className="text-navy-600 text-sm mb-1">For detailed enquiries</p>
                <p className="text-brand-700 font-bold text-lg group-hover:text-brand-800 transition-colors">
                  theneurohub26@gmail.com
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1">Working Hours</h4>
                <p className="text-navy-600 text-sm mb-1">We are open 7 days a week</p>
                <p className="text-navy-800 font-bold text-lg">
                  Monday – Sunday
                </p>
                <p className="text-navy-600 font-medium">
                  9:00 AM – 7:00 PM
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-1">Our Location</h4>
                <p className="text-navy-600 text-sm mb-1">Visit us in person</p>
                <p className="text-navy-800 font-bold text-lg">
                  The Neuro Hub Wellness Centre
                </p>
                <p className="text-navy-600">
                  Sundarapuram, Coimbatore, Tamil Nadu, India
                </p>
                <p className="text-navy-500 text-sm mt-1">
                  Approximately 5–7 km from Ukkadam on Pollachi Main Road (NH-948)
                </p>
              </div>
            </div>

            {/* Book Appointment CTA */}
            <a
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#appointment');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-r from-teal-600 to-brand-800 text-white hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Book Appointment Online</h4>
                <p className="text-white/80 text-sm mb-1">Schedule your consultation now</p>
                <p className="font-bold text-lg group-hover:underline">
                  Click to Book
                </p>
              </div>
            </a>
          </motion.div>

          {/* Map Integration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-elevated border border-slate-100 bg-gradient-to-br from-brand-50 to-teal-50 flex flex-col"
          >
            {/* Embedded Google Maps */}
            <div className="flex-1 min-h-[300px] md:min-h-[400px] relative">
              <iframe
                title="The Neuro Hub Wellness Centre Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0!2d76.9522!3d10.9674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU4JzAyLjYiTiA3NsKwNTcnMDcuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="px-6 py-5 bg-white/80 backdrop-blur-sm border-t border-slate-100">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-navy-900">The Neuro Hub Wellness Centre</p>
                  <p className="text-sm text-navy-600">Sundarapuram, Coimbatore, Tamil Nadu, India</p>
                  <p className="text-xs text-navy-500 mt-1">Approximately 5–7 km from Ukkadam on Pollachi Main Road (NH-948)</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-brand-800 hover:shadow-glow transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-teal-700 border-2 border-teal-600 hover:bg-teal-50 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp for Address
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
