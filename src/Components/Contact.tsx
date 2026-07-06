import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Header from "./Header";
import Footer from "./Footer";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Circle,
  Sparkles,
  ArrowUpRight,
  Clock,
  Loader2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface StatusState {
  type: "success" | "error" | null;
  message: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusState>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): string | null => {
    if (!form.name || !form.email || !form.message) {
      return "All fields are required.";
    }
    if (!form.email.includes("@")) {
      return "Enter a valid email address.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      setIsSubmitting(false);
      return;
    }

    // Replace these with your actual EmailJS keys
    const SERVICE_ID = "service_snzbhv7";
    const TEMPLATE_ID = "template_si9ds6m";
    const PUBLIC_KEY = "4OQ7vS1TPfChZ6wJE";

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maxwellmujeni@gmail.com",
      href: "mailto:maxwellmujeni@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0112 197 169 / 0795 270 517",
      href: "tel:+254112197169",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 antialiased selection:bg-blue-500/20 selection:text-blue-900">
      <Header />

      {/* ===================== HERO ===================== */}
      <section
        className="relative overflow-hidden border-b border-blue-100"
        style={{
          backgroundImage: "url('/MAX.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/90 via-blue-900/85 to-blue-950/90" />

        {/* Soft dot pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute -top-40 left-1/4 w-160 h-100 bg-blue-400/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-20 right-0 w-100 h-100 bg-emerald-300/15 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24">
          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-16"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span className="text-xs font-semibold text-white">
                Get In Touch
              </span>
            </div>
          </motion.div>

          {/* Centered Content */}
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-emerald-400" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-300">
                  Let's Connect
                </span>
                <div className="h-px w-10 bg-emerald-400" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-white">
                Let's build
                <br />
                <span className="italic font-light text-blue-200">
                  something great
                </span>
                <br />
                <span className="bg-linear-to-r from-emerald-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                  together.
                </span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-2xl mx-auto">
                Reach out for web development, photography, media work, or
                community technology projects. I'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT AREA ===================== */}
      <section className="relative py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          {/* INFORMATION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 space-y-4"
          >
            {/* Main Info Card */}
            <div className="relative bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 text-white shadow-2xl shadow-blue-600/30 overflow-hidden">
              {/* Decorative glows */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/30 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-300" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-300">
                    Contact Info
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  Let's start a
                  <br />
                  <span className="italic font-light text-blue-100">
                    conversation.
                  </span>
                </h2>

                <p className="text-sm text-blue-100 mb-8 leading-relaxed">
                  Whether you have a project in mind, need photography services,
                  or want to collaborate on community work — I'm here to help.
                </p>

                {/* Contact Items */}
                <div className="space-y-3">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-400/20 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-semibold tracking-wider uppercase text-blue-200">
                            {item.label}
                          </p>
                          <p className="text-sm font-semibold text-white truncate">
                            {item.value}
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-blue-200 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Average Response
                  </p>
                  <p className="text-sm font-bold text-blue-950">
                    Within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Circle className="w-1.5 h-1.5 fill-emerald-500 text-emerald-500 animate-pulse" />
                <span>Currently accepting new projects</span>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3"
            >
              <a
                href="mailto:maxwellmujeni@gmail.com"
                className="group flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://wa.me/254112197169"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <div className="bg-white border border-blue-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-600/5">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-blue-600" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
                    Send a Message
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-950 mb-2">
                  Drop me a line
                </h2>
                <p className="text-sm text-slate-600">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl border border-blue-100 bg-blue-50/30 text-blue-950 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-blue-100 bg-blue-50/30 text-blue-950 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-xl border border-blue-100 bg-blue-50/30 text-blue-950 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 p-4 rounded-xl border ${
                      status.type === "success"
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                        : "bg-red-50 border-red-200 text-red-700"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center pt-2">
                  By submitting, you agree to our privacy practices. Your data
                  is safe with me.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/254112197169"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-4 rounded-full shadow-2xl shadow-emerald-500/40 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">
          Chat Now
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
      </motion.a>

      <Footer />
    </div>
  );
}