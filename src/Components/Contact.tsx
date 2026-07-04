import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Header from "./Header";
import Footer from "./Footer";

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
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setForm({ name: "", email: "", message: "" }); // Reset form values
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

  return (
    <div className="dark">
      <div
        id="top"
        className="bg-gray-50 dark:bg-gray-900 min-h-screen scroll-smooth transition overflow-hidden"
      >
        <Header />

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pt-28 pb-16 px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Feel free to reach out for web development, photography, media work
            or community technology projects.
          </p>
        </motion.section>

        {/* CONTACT AREA */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            
            {/* INFORMATION */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 dark:bg-gray-800 p-8 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white">
                Contact Information
              </h2>

              <div className="mt-6 space-y-5 text-gray-300">
                <p>
                  📧 <span className="ml-2">maxwellmujeni@gmail.com</span>
                </p>
                <p>
                  📞 <span className="ml-2">0112 197 169 / 0795 270 517</span>
                </p>
                <p>
                  📍 <span className="ml-2">Nairobi, Kenya</span>
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="mailto:maxwellmujeni@gmail.com"
                  className="bg-blue-600 px-5 py-3 rounded-xl text-white hover:bg-blue-700 transition"
                >
                  Email
                </a>
                <a
                  href="https://wa.me/254112197169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 px-5 py-3 rounded-xl text-white hover:bg-green-700 transition"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-bold dark:text-white mb-6">
                Send Message
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border dark:bg-gray-900 dark:text-white outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl border dark:bg-gray-900 dark:text-white outline-none"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl border dark:bg-gray-900 dark:text-white outline-none"
                />

                {status.message && (
                  <p
                    className={`text-sm font-medium ${
                      status.type === "success" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FLOATING WHATSAPP */}
        <motion.a
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          href="https://wa.me/254112197169"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-5 rounded-full shadow-xl text-xl hover:bg-green-600 flex items-center justify-center"
        >
          💬
        </motion.a>

        <Footer />
      </div>
    </div>
  );
}