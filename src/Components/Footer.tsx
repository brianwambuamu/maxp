import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Circle,
  Code2,
  Camera,
  Users,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
    },
    {
      icon: Mail,
      label: "Email",
      value: "maxwellmujeni@gmail.com",
      href: "mailto:maxwellmujeni@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0112 197 169",
      href: "tel:+254112197169",
    },
  ];

  const roles = [
    { icon: Code2, label: "Software Engineer" },
    { icon: Camera, label: "Photographer" },
    { icon: Users, label: "Community Builder" },
  ];


  return (
    <footer className="relative bg-linear-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Soft dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto px-6 md:px-10 py-16"
      >
        {/* Top Section - Brand & CTA */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* BRAND SECTION */}
          <motion.div
           
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="/MAX.jpg"
                  alt="Maxwell"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500/50 shadow-xl"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-blue-950" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Maxwell
                  <span className="text-blue-400">.</span>
                </h2>
                <p className="text-xs font-semibold tracking-wider uppercase text-blue-300">
                  Software Engineer
                </p>
              </div>
            </div>

            <p className="text-sm text-blue-100/80 leading-relaxed max-w-md">
              Building modern web applications, digital solutions and technology
              projects using React, Tailwind CSS and modern tools. Passionate
              about creating impactful digital experiences.
            </p>

            {/* Roles */}
            <div className="flex flex-wrap gap-2 pt-2">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <div
                    key={role.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-semibold text-blue-100">
                      {role.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30">
              <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300">
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-6 bg-emerald-400" />
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-300">
                Quick Links
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <motion.div key={item.path} whileHover={{ x: 6 }}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-sm text-blue-100/80 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-6 bg-emerald-400" />
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-300">
                Get In Touch
              </h3>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/30 group-hover:text-emerald-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold tracking-wider uppercase text-blue-300/70">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-white truncate">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2 mt-4">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                href="https://wa.me/254112197169"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                href="mailto:maxwellmujeni@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Email
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-sm text-blue-200/70">
              © {year} Maxwell Mujukane. All rights reserved.
            </p>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <p className="text-sm text-blue-200/70">
              Built with{" "}
              <span className="text-emerald-400 font-semibold">React</span> +{" "}
              <span className="text-emerald-400 font-semibold">Tailwind CSS</span>
            </p>
          </div>

          <motion.a
            href="#top"
            whileHover={{ y: -3 }}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Back to Top
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}