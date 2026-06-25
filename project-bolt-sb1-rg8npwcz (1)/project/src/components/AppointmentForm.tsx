import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, Instagram, MessageCircle, Mail as MailIcon } from 'lucide-react';

const conditions = [
  'Migraine & Headache',
  'Neck & Back Pain',
  'Joint Pain',
  'Nerve Weakness',
  'Stress & Anxiety',
  'Sleep Disorders',
  'Diabetes Support',
  'Blood Pressure Management',
  'Stroke Rehabilitation',
  'Knee Problems',
  'Digestive Disorders',
  'General Wellness',
  'Other',
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
];

const PHONE = '+917092381402';
const PHONE_DISPLAY = '+91 70923 81402';
const WHATSAPP_NUM = '+919715042170';
const INSTAGRAM = 'https://www.instagram.com/theneurohub26/';
const EMAIL = 'mailto:theneurohub26@gmail.com';

function buildWhatsAppUrl(form: { name: string; phone: string; condition: string; date: string; time: string; message: string }) {
  const text = encodeURIComponent(
    `🩺 New Appointment Request\n\n` +
    `Name: ${form.name}\n` +
    `Phone: ${form.phone}\n` +
    `Condition: ${form.condition}\n` +
    `Preferred Date: ${form.date}\n` +
    `Preferred Time: ${form.time}\n` +
    (form.message ? `Message: ${form.message}\n\n` : '\n') +
    `I would like to book an appointment at The Neuro Hub Wellness Centre.`
  );
  return `https://wa.me/${WHATSAPP_NUM}?text=${text}`;
}

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    condition: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.condition || !form.date || !form.time) {
      setError('Please fill in all required fields.');
      return;
    }

    const url = buildWhatsAppUrl(form);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="appointment" className="py-20 md:py-28 gradient-bg pb-28 md:pb-28">
        <div className="max-w-xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-elevated border border-slate-100 p-10 md:p-14 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-3">
              Appointment Requested!
            </h3>
            <p className="text-navy-600 leading-relaxed mb-6">
              Thank you, {form.name}. Your appointment request has been sent via WhatsApp. Our team will contact
              you shortly at <strong>{form.phone}</strong> to confirm your booking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-brand-800 hover:shadow-glow transition-all"
              >
                <Phone className="w-4 h-4" />
                Call for Urgent Booking
              </a>
              <a
                href={buildWhatsAppUrl(form)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-emerald-700 border-2 border-emerald-500 hover:bg-emerald-50 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp Again
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-rose-700 border border-rose-200 hover:bg-rose-50 transition-all">
                <Instagram className="w-4 h-4" />
                @theneurohub26
              </a>
              <a href={EMAIL} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-brand-700 border border-brand-200 hover:bg-brand-50 transition-all">
                <MailIcon className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-20 md:py-28 gradient-bg pb-28 md:pb-28">
      <div className="max-w-5xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-teal-700 text-sm font-semibold mb-4 shadow-soft">
            Book an Appointment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-4">
            Start Your <span className="gradient-text">Healing Journey</span>
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            Fill in your details below and we will send your request via WhatsApp. Our team will get back to you within 24 hours to confirm your consultation with M. Sarojadevi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-elevated border border-slate-100 p-6 md:p-10 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-navy-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-300" />
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-navy-800 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-navy-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-300" />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-navy-800 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-navy-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-300" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-navy-800 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                  />
                </div>
              </div>

              {/* Condition */}
              <div>
                <label className="block text-sm font-semibold text-navy-700 mb-2">
                  Condition / Concern <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-300" />
                  <select
                    value={form.condition}
                    onChange={(e) => handleChange('condition', e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all appearance-none bg-white"
                  >
                    <option value="">Select a condition</option>
                    {conditions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-navy-700 mb-2">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-300" />
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold text-navy-700 mb-2">
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-300" />
                  <select
                    value={form.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all appearance-none bg-white"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={4}
                placeholder="Tell us more about your symptoms or any specific requirements..."
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-navy-800 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all resize-none"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm font-medium bg-red-50 rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-teal-600 to-brand-800 hover:shadow-glow transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Neuro%20Hub%20Wellness%20Centre.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-emerald-700 border-2 border-emerald-500 hover:bg-emerald-50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Quick WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-teal-700 border-2 border-teal-600 hover:bg-teal-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
