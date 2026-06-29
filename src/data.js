import projMariana from './assets/project-mariana.webp'
import projAnita from './assets/project-anita.webp'
import projOrnatto from './assets/project-ornatto.webp'

// EDITAR: substitui pelos teus dados reais (email, redes)
export const SITE = {
  name: 'FelicianoJR',
  role: 'E-Commerce & DevOps Engineer',
  tagline: 'Architecting scalable solutions for global brands and high-growth platforms.',
  email: 'ola@exemplo.pt',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: 'https://github.com/felicianogoncalves' },
    { label: 'Twitter', href: '#' },
  ],
}

export const CLOCKS = [
  { city: 'LIS', tz: 'Europe/Lisbon' },
  { city: 'LDN', tz: 'Europe/London' },
  { city: 'NYC', tz: 'America/New_York' },
]

// THE CORE STACK — agrupada por categoria
export const STACK = [
  {
    title: 'Infra',
    items: [
      { name: 'AWS', desc: 'Cloud Infrastructure' },
      { name: 'Azure', desc: 'Cloud Infrastructure' },
      { name: 'Docker', desc: 'Containerization' },
      { name: 'Terraform', desc: 'Infrastructure as Code' },
      { name: 'VMware', desc: 'Virtualization Platform' },
      { name: 'Veeam', desc: 'Backup & Replication' },
      { name: 'Sophos Firewall', desc: 'Network Security' },
      { name: 'NAS', desc: 'Network Attached Storage' },
      { name: 'Vercel', desc: 'Frontend Deployment' },
      { name: 'Railway', desc: 'App Hosting Platform' },
    ],
  },
  {
    title: 'Code',
    items: [
      { name: 'Python', desc: 'Programming Language' },
      { name: 'React / TypeScript', desc: 'Frontend Stack' },
      { name: 'Git', desc: 'Version Control' },
      { name: 'Medusa.js', desc: 'Headless E-commerce' },
      { name: 'Stripe', desc: 'Payments & Billing' },
      { name: 'Claude AI', desc: 'AI Development' },
      { name: 'MySQL / Supabase', desc: 'Database & Backend' },
      { name: 'Microsoft 365', desc: 'Productivity Suite' },
    ],
  },
]

// SELECTED PROJECTS — trabalho real
export const PROJECTS = [
  {
    title: 'Mariana Cabeleireiros',
    desc: 'Website institucional para salão de cabeleireiro — design, desenvolvimento e deployment.',
    img: projMariana,
    href: 'https://marianacabeleireiros.pt',
  },
  {
    title: 'Salão Anita',
    desc: 'Presença online para o Salão Anita — site moderno, responsivo e otimizado.',
    img: projAnita,
    href: 'https://salaoanita.pt',
  },
  {
    title: 'Ornatto',
    desc: 'Loja online de moda — e-commerce headless, design minimal e checkout.',
    img: projOrnatto,
  },
]
