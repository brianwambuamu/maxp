import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import {
  Code2,
  Camera,
  Users,
  GraduationCap,
  Award,
  Heart,
  ArrowUpRight,
  Circle,
  BookOpen,
} from "lucide-react";

export default function About() {
  const roles = [
    {
      number: "01",
      icon: Code2,
      title: "Software Engineer",
      text: "Developing web applications, solving problems through technology and creating digital solutions.",
      tags: ["React", "Full-Stack", "Problem Solving"],
    },
    {
      number: "02",
      icon: Camera,
      title: "Photographer - RYSA",
      text: "Capturing events, sports activities and telling community stories through photography.",
      tags: ["Events", "Sports", "Storytelling"],
    },
    {
      number: "03",
      icon: Users,
      title: "Team Lead - RYSA Media",
      text: "Leading media projects, coordinating content creation and supporting the media team.",
      tags: ["Leadership", "Coordination", "Media"],
    },
  ];

  const skills = [
    { name: "React JS", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "PHP", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
  ];

  const education = [
    "Artificial Intelligence",
    "Data Structures & Algorithms",
    "Cloud Computing",
    "Mobile Programming",
    "Web Development",
  ];

  const communityImpact = [
    { icon: Camera, label: "Photography Training" },
    { icon: Code2, label: "Coding Mentorship" },
    { icon: BookOpen, label: "Computer Literacy" },
    { icon: Award, label: "Sports Activities" },
    { icon: Heart, label: "Tree Planting" },
    { icon: Users, label: "Youth Empowerment" },
  ];

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
      <section className="relative overflow-hidden border-b border-blue-100">
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

        {/* Ambient glow */}
        <div className="absolute -top-40 left-1/4 w-160 h-100 bg-blue-400/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-20 right-0 w-100 h-100 bg-emerald-300/15 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24">
          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-16"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-blue-900">
                About Me
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* TEXT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="md:col-span-7 space-y-8"
            >
              <motion.div className="flex items-center gap-3">
                <div className="h-px w-10 bg-blue-600" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
                  Get to know me
                </span>
              </motion.div>

              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-blue-950">
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                  Maxwell Mujukane
                </span>
              </motion.h1>

              <motion.p className="text-lg md:text-xl leading-relaxed text-slate-700">
                A Software Engineering graduate from{" "}
                <span className="font-semibold text-blue-700">
                  Zetech University
                </span>{" "}
                passionate about designing and building modern, responsive and
                user-friendly web applications using React, Tailwind CSS,
                JavaScript, PHP and modern technologies.
              </motion.p>

              <motion.p className="text-base md:text-lg leading-relaxed text-slate-600">
                I am also a photographer at Runda Youth Sports Association
                (RYSA) and Team Lead at RYSA Media where I contribute to digital
                storytelling, media production and community projects.
              </motion.p>

              <motion.div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:gap-3 hover:shadow-xl hover:shadow-blue-600/30"
                >
                  Get in touch
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#roles"
                  className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50"
                >
                  View my roles
                </a>
              </motion.div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-emerald-400 blur-3xl opacity-30 rounded-full" />

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative p-3 bg-white rounded-3xl shadow-2xl shadow-blue-900/20"
                >
                  <img
                    src="/MAX.jpg"
                    alt="Maxwell"
                    className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating status */}
                  <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 backdrop-blur-xl border border-white px-4 py-3 shadow-lg">
                    <div>
                      <p className="text-xs font-semibold text-blue-950">
                        Maxwell Mujukane
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
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== ROLES ===================== */}
      <section id="roles" className="relative py-28 px-6 md:px-10 border-b border-blue-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
                (01) Professional Roles
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-blue-950 max-w-2xl">
              Three roles,
              <br />
              <span className="italic font-light text-slate-500">
                one mission.
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
                    {role.text}
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

      {/* ===================== EDUCATION ===================== */}
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
                (02) Education
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-950 mb-5">
              Academic
              <br />
              <span className="italic font-light text-slate-500">
                background.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 max-w-xs">
              Building a strong foundation in software engineering principles and
              modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-8"
          >
            <div className="bg-white border border-blue-100 rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-1">
                    Zetech University
                  </h3>
                  <p className="text-base text-blue-700 font-semibold">
                    Bachelor of Science in Software Engineering
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Graduate</p>
                </div>
              </div>

              <div className="pt-6 border-t border-blue-100">
                <p className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-4">
                  Key Coursework
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {education.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100"
                    >
                      <Circle className="w-1.5 h-1.5 fill-emerald-500 text-emerald-500 shrink-0" />
                      <span className="text-sm font-medium text-blue-950">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <section className="relative py-28 px-6 md:px-10 border-b border-blue-100">
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
              Technical
              <br />
              <span className="italic font-light text-slate-500">skills.</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 max-w-xs">
              A comprehensive toolkit for building modern web applications and
              digital solutions.
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
                  <span
                    className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                      skill.level === "Advanced"
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                        : "bg-blue-50 text-blue-600 border-blue-100"
                    }`}
                  >
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== COMMUNITY IMPACT ===================== */}
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
                (04) Community
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-950 mb-5">
              Community
              <br />
              <span className="italic font-light text-slate-500">impact.</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 max-w-xs">
              Using technology and creativity to empower local communities and
              drive positive change.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-8"
          >
            <div className="bg-white border border-blue-100 rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-1">
                    Runda Youth Sports Association (RYSA)
                  </h3>
                  <p className="text-base text-blue-700 font-semibold">
                    Community Development & Youth Empowerment
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-blue-100">
                <p className="text-sm leading-relaxed text-slate-600 mb-6">
                  Through RYSA, I actively support various community initiatives
                  focused on youth development, education, and environmental
                  sustainability.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {communityImpact.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/50 border border-blue-100 hover:border-blue-300 transition-all"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-blue-950">
                          {item.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
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
                Ready to work
                <br />
                <span className="italic font-light text-blue-100">together?</span>
              </h2>
              <p className="text-base md:text-lg text-blue-50 max-w-xl mx-auto mb-10">
                Whether it's a web development project, photography work, or
                community initiative — let's create something meaningful.
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