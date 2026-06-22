import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Cloud, Container, Layers, Monitor, Workflow, LayoutGrid, Terminal, Database, ShieldCheck, HardDrive } from "lucide-react";
import heroServers from "@/assets/hero-servers.jpg";
import heroCode from "@/assets/hero-code.jpg";
import projShopify from "@/assets/project-shopify.jpg";
import projAws from "@/assets/project-aws.jpg";
import projDevops from "@/assets/project-devops.jpg";
import projEcommerce from "@/assets/project-ecommerce.jpg";

const NAME = "YOURNAME";
const TITLE = "E-COMMERCE & DEVOPS ENGINEER";
const TAGLINE = "Architecting scalable solutions for global brands and high-growth platforms.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${NAME} — ${TITLE}` },
      { name: "description", content: TAGLINE },
      { property: "og:title", content: `${NAME} — ${TITLE}` },
      { property: "og:description", content: TAGLINE },
    ],
  }),
  component: Index,
});

const stack = [
  { name: "Shopify", desc: "E-commerce Platform", Icon: Cog },
  { name: "Docker", desc: "Containerization", Icon: Container },
  { name: "Terraform", desc: "Infrastructure as Code", Icon: Layers },
  { name: "Kubernetes", desc: "Container Orchestration", Icon: Boxes },
  { name: "React", desc: "UI Library", Icon: Atom },
  { name: "AWS", desc: "Cloud Infrastructure", Icon: Cloud },
];

const projects = [
  {
    title: "Global Shopify Migration",
    desc: "Migrated a multinational brand to Shopify Plus, increasing conversion by 45%.",
    img: projShopify,
  },
  {
    title: "AWS Serverless Architecture",
    desc: "Implemented a scalable serverless backend on AWS, reducing operational costs.",
    img: projAws,
  },
  {
    title: "DevOps Pipeline Optimization",
    desc: "Automated CI/CD pipelines for rapid deployment, improving team efficiency.",
    img: projDevops,
  },
  {
    title: "Custom E-commerce Platform",
    desc: "Developed a headless commerce solution for a luxury fashion retailer.",
    img: projEcommerce,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <CoreStack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-wider">{NAME}</a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#stack" className="hover:text-foreground transition">Services</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-accent-violet/15 text-accent-violet border border-accent-violet/30 hover:bg-accent-violet/25 transition"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-14">
      <div className="relative grid grid-cols-12 gap-0 min-h-[88vh] items-stretch">
        {/* Left image */}
        <div className="col-span-3 hidden md:block relative overflow-hidden">
          <img
            src={heroServers}
            alt="Server racks with neon lighting"
            width={768}
            height={1024}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-background" />
        </div>

        {/* Center */}
        <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center text-center px-6 py-24">
          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] uppercase">
            {NAME}
          </h1>
          <div className="mt-4 h-px w-24 bg-accent-violet" />
          <h2 className="font-display mt-6 text-[clamp(1.25rem,3vw,2.25rem)] uppercase tracking-wide text-foreground/90">
            {TITLE}
          </h2>
          <p className="mt-8 max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
            {TAGLINE}
          </p>
        </div>

        {/* Right image */}
        <div className="col-span-3 hidden md:block relative overflow-hidden">
          <img
            src={heroCode}
            alt="Violet code on screen"
            width={768}
            height={1024}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/40 to-background" />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-[10px] uppercase tracking-[0.3em] text-accent-violet font-semibold">{kicker}</p>
      <h3 className="font-display mt-2 text-3xl md:text-4xl uppercase">{title}</h3>
    </div>
  );
}

function CoreStack() {
  return (
    <section id="stack" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader kicker="The Core Stack" title="Technologies driving innovation" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {stack.map(({ name, desc, Icon }) => (
            <div key={name} className="flex items-center gap-4 py-3 border-b border-border/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-2 border border-border">
                <Icon className="h-5 w-5 text-accent-violet" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold text-base">{name}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader kicker="Selected Projects" title="Recent work" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-lg bg-surface border border-border hover:border-accent-violet/50 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-sm leading-snug">{p.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
              <ArrowUpRight className="absolute top-3 right-3 h-4 w-4 text-foreground/0 group-hover:text-accent-violet transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <SectionHeader kicker="About" title="Engineering for scale" />
        <div className="grid md:grid-cols-3 gap-10 text-sm text-muted-foreground leading-relaxed">
          <p className="md:col-span-2 text-base text-foreground/85">
            I build the systems that keep high-traffic e-commerce platforms fast, reliable, and ready
            to grow. My work bridges product engineering and infrastructure — from headless storefronts
            on Shopify Plus to Kubernetes-backed deployment pipelines on AWS.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-foreground font-semibold">10+ years</p>
              <p>Building production systems</p>
            </div>
            <div>
              <p className="text-foreground font-semibold">50+ launches</p>
              <p>From startups to global brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent-violet font-semibold">
          Contact
        </p>
        <h3 className="font-display mt-4 text-4xl md:text-6xl uppercase">
          Let's build something
        </h3>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-accent-violet text-white text-sm font-medium hover:opacity-90 transition"
        >
          <Mail className="h-4 w-4" />
          hello@example.com
        </a>
        <div className="flex items-center justify-center gap-5 mt-10 text-muted-foreground">
          <a href="#" aria-label="LinkedIn" className="hover:text-accent-violet transition"><Linkedin className="h-5 w-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-accent-violet transition"><Github className="h-5 w-5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-accent-violet transition"><Twitter className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#stack" className="hover:text-foreground transition">Services</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
