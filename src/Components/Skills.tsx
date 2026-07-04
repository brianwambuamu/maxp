import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Camera,
  Sparkles,
  Circle,
  Layers,
  Eye,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Local History & Culture Exploration Platform",
      image: "/pst.png",
      description:
        "A digital platform designed to preserve and explore local history, culture and community stories.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://pst-topaz.vercel.app/",
      category: "Web Platform",
    },
    {
      number: "02",
      title: "Political Donation System",
      image: "/donation.png",
      description: "A web-based political donation system.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      link: "https://dr-ben-guf2.vercel.app/",
      category: "Web Application",
    },
    {
      number: "03",
      title: "Shamba Records System",
      image: "/shambarec.png",
      description:
        "A web-based Farm Records System for tracking crops and fields for farmers managing agents.",
      technologies: ["React Js", "Tailwind CSS", "JavaScript", "PostgreSQL"],
      link: "https://project-eight-drab-17.vercel.app/",
      category: "Management System",
    },
    {
      number: "04",
      title: "Personal Portfolio Website",
      image: "/portfolio.png",
      description:
        "A modern developer portfolio website showcasing my skills, projects and professional journey.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      link: "https://maxp-delta.vercel.app/",
      category: "Portfolio",
    },
    {
      number: "05",
      title: "Tamasha Cultural Platform",
      image: "/tamasha.png",
      description: "A web-based cultural platform for community engagement.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "MySQL"],
      link: "https://tamasha-ten.vercel.app/",
      category: "Cultural Platform",
    },
  ];

  const gallery = [
    { image: "/photo1.jpg", title: "RYSA Sports Event" },
    { image: "/photo2.jpg", title: "Community Activity" },
    { image: "/photo3.jpg", title: "Photography Work" },
    { image: "/photo4.jpg", title: "Youth Empowerment Program" },
    { image: "/photo5.jpg", title: "Media Production" },
    { image: "/photo6.jpg", title: "Community Storytelling" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/85 to-blue-950/90" />

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
                Selected Work
              </span>
            </div>
          </motion.div>

          {/* Centered Content */}
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div className="flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-emerald-400" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-300">
                  Portfolio — 2026
                </span>
                <div className="h-px w-10 bg-emerald-400" />
              </motion.div>

              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-white">
                Software solutions,
                <br />
                <span className="italic font-light text-blue-200">
                  community platforms
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                  & creative projects.
                </span>
              </motion.h1>

              <motion.p className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-3xl mx-auto">
                A curated collection of web applications, digital platforms and
                creative work developed through technology and media.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center gap-4 pt-4"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-white">
                        {projects.length}+
                      </p>
                      <p className="text-xs text-blue-200">
                        Projects Delivered
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section className="relative py-28 px-6 md:px-10 border-b border-blue-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
         
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
                (01) Featured Projects
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-blue-950 max-w-2xl">
              Selected work
              <br />
              <span className="italic font-light text-slate-500">
                & case studies.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group relative bg-white border border-blue-100 rounded-3xl overflow-hidden hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-16/10">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-white text-xs font-semibold text-blue-900 shadow-lg">
                      <Code2 className="w-3 h-3" />
                      {project.category}
                    </span>
                  </div>

                  {/* View button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-700 font-semibold text-sm shadow-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-mono text-blue-400">
                      / {project.number}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-blue-950 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PHOTOGRAPHY GALLERY ===================== */}
      <section className="relative py-28 px-6 md:px-10 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
        
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
                (02) Photography
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-blue-950 max-w-2xl">
              Visual storytelling
              <br />
              <span className="italic font-light text-slate-500">
                through the lens.
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 mt-6 max-w-2xl">
              Moments captured through my photography work with RYSA Media and
              community activities.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {gallery.map((item, index) => (
              <motion.div
                key={item.title}
              
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-blue-100 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-4/3">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* View icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl">
                      <Eye className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-400">
                      RYSA Media
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-blue-950">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
           
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 p-10 md:p-16 text-center shadow-2xl shadow-blue-600/20"
          >
            <div className="absolute -top-20 right-0 w-120 h-80 bg-emerald-400/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 left-0 w-120 h-80 bg-blue-400/30 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-8">
                <Circle className="w-1.5 h-1.5 fill-emerald-300 text-emerald-300" />
                <span className="text-xs font-semibold tracking-wider uppercase text-white">
                  Let's collaborate
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-5">
                Have a project in
                <br />
                <span className="italic font-light text-blue-100">mind?</span>
              </h2>
              <p className="text-base md:text-lg text-blue-50 max-w-xl mx-auto mb-10">
                I'm currently accepting new projects and collaborations. Let's
                build something meaningful together.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-700 hover:gap-3"
                >
                  Start a conversation
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/max-CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}