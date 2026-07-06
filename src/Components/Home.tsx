import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  MapPin,
  Code2,
  Camera,
  Users,
  ArrowRight,
  Circle,
} from "lucide-react";

export default function Home() {
  const skills = [
    { name: "React.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "PHP", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Git & GitHub", level: "Advanced" },
  ];

  const roles = [
    {
      number: "01",
      icon: Code2,
      title: "Software Engineer",
      description:
        "Crafting scalable web applications with modern frameworks and clean architecture.",
      tags: ["Frontend", "Backend", "APIs"],
    },
    {
      number: "02",
      icon: Camera,
      title: "Photographer",
      description:
        "Visual storytelling through the lens at RYSA Media — capturing moments that matter.",
      tags: ["Editorial", "Events", "Brand"],
    },
    {
      number: "03",
      icon: Users,
      title: "Community Builder",
      description:
        "Leveraging technology to drive social impact and empower local communities.",
      tags: ["Leadership", "Outreach", "Tech"],
    },
  ];

  const credentials = [
    { label: "Education", value: "Dip Software Engineering" },
    { label: "University", value: "Zetech University" },
    { label: "Based in", value: "Nairobi, Kenya" },
    { label: "Experience", value: "3+ Years" },
  ];

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 antialiased selection:bg-blue-500/20 selection:text-blue-900">
      <Header />

      {/* ===================== HERO ===================== */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-blue-100"
      >
        {/* Soft dot pattern */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,130,246,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          }}
        />

        {/* Ambient blue + green glow */}
        <div className="absolute -top-40 left-1/4 w-160 h-100 bg-blue-400/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-20 right-0 w-100 h-100 bg-emerald-300/15 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24">
          {/* Top status bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-16 text-xs font-medium tracking-wider uppercase text-slate-500"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-blue-900">Available for new projects</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-blue-900">
              <MapPin className="w-3.5 h-3.5" />
              <span>Nairobi, Kenya</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12 items-end">
            {/* LEFT — Editorial headline */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="md:col-span-8 space-y-8"
            >
              <motion.div
                className="flex items-center gap-3"
              >
                <div className="h-px w-10 bg-blue-600" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
                  Portfolio — 2026
                </span>
              </motion.div>

              <motion.h1
                className="text-[2.75rem] sm:text-6xl md:text-[5.25rem] font-semibold tracking-[-0.03em] leading-[0.95] text-blue-950"
              >
                Maxwell{" "}
                <span className="italic font-light text-slate-500">is a</span>
                <br />
                <span className="bg-linear-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                  software engineer
                </span>
                <br />
                <span className="italic font-light text-slate-500">
                  & visual storyteller.
                </span>
              </motion.h1>

              <motion.p
                className="max-w-xl text-base md:text-lg leading-relaxed text-slate-600"
              >
                I design and build thoughtful digital products, capture stories
                through photography, and use technology to strengthen
                communities — one project at a time.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <a
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:gap-3 hover:shadow-xl hover:shadow-blue-600/30"
                >
                  View selected work
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50"
                >
                  Get in touch
                </a>

                <a
                  href="/max-CV.pdf"
                  download
                  className="group inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — Profile + credentials */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-4"
            >
              <div className="relative">
                {/* Profile image */}
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-linear-to-br from-blue-100 to-blue-50 shadow-xl shadow-blue-900/10">
                  <img
                    src="/MAX.jpg"
                    alt="Maxwell"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950/40 via-transparent to-transparent" />

                  {/* Floating label */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 backdrop-blur-xl border border-white px-4 py-3 shadow-lg">
                    <div>
                      <p className="text-xs font-semibold text-blue-950">
                        Maxwell
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Software Engineer
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1">
                      <Circle className="w-1.5 h-1.5 fill-emerald-500 text-emerald-500" />
                      <span className="text-[10px] font-semibold text-emerald-600">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                {/* Credentials card */}
                <div className="mt-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {credentials.map((item) => (
                      <div key={item.label}>
                        <p className="text-[10px] font-semibold tracking-wider uppercase text-blue-400 mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-blue-950">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trusted technologies strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 pt-8 border-t border-blue-100"
          >
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-400 mb-5">
              Trusted technologies
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-slate-500">
              {["React", "Tailwind", "TypeScript", "Node.js", "PHP", "MySQL", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-sm md:text-base font-medium tracking-tight text-blue-900 hover:text-blue-600 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section className="relative py-28 px-6 md:px-10 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
                (01) About
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-950">
              Building with
              <br />
              <span className="italic font-light text-slate-500">
                intention.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-8 space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              I'm a Software Engineering graduate from{" "}
              <span className="font-semibold text-blue-700">
                Zetech University
              </span>
              , passionate about frontend engineering, backend systems, and the
              intersection of design and code.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              Beyond engineering, I contribute to RYSA Media as a photographer
              and team lead — blending creativity with technical precision to
              deliver work that resonates. I believe technology, when built
              thoughtfully, can uplift communities and create lasting impact.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-blue-100">
              {[
                { num: "3+", label: "Years coding" },
                { num: "20+", label: "Projects shipped" },
                { num: "10+", label: "Happy clients" },
                { num: "∞", label: "Curiosity" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-600">
                    {stat.num}
                  </p>
                  <p className="text-xs tracking-wider uppercase text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== ROLES / WHAT I DO ===================== */}
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
                (02) What I do
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-blue-950 max-w-2xl">
              Three disciplines,
              <br />
              <span className="italic font-light text-slate-500">
                one purpose.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="group relative bg-white border border-blue-100 rounded-2xl p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/5"
                >
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-xs font-mono text-blue-400">
                      / {role.number}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-blue-950 mb-3">
                    {role.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 mb-6">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <section className="relative py-28 px-6 md:px-10 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
                (03) Toolkit
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-950 mb-5">
              Technologies I
              <br />
              <span className="italic font-light text-slate-500">
                work with.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 max-w-xs">
              A curated stack refined over years of building real products —
              chosen for reliability, speed, and developer experience.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-8"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ x: 4 }}
                  className="group flex items-center justify-between p-5 rounded-xl border border-blue-100 bg-white hover:border-blue-300 hover:shadow-md hover:shadow-blue-600/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-blue-950">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
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
            {/* Decorative glow */}
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
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-700 hover:gap-3"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:hello@maxwell.dev"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                >
                  hello@maxwell.dev
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