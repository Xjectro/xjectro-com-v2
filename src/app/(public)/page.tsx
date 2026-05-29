import { Section, Container } from '@/shared/ui/react/design-system';
import { Button } from '@/shared/ui/primitives/button';
import { Badge } from '@/shared/ui/primitives/badge';
import { HomeStructuredData } from '@/features/seo/components/home-structured-data';
import { buildMetadata } from '@/features/seo/utils/metadata';
import { cn } from '@/shared/lib/utils';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/shared/ui/icons/brand-icons';
import { FadeUp } from '@/shared/ui/motion/fade-up';
import { ScrollReveal } from '@/shared/ui/motion/scroll-reveal';
import Link from 'next/link';
import { Fragment } from 'react';

export const metadata = buildMetadata({
  title: 'Eray Günüuygun — Full Stack Developer',
  description:
    'Full Stack Developer specializing in TypeScript, Next.js, and ASP.NET Core. Building scalable production systems serving 100K+ daily users.',
});

const experience = [
  {
    company: 'Meşhur',
    role: 'Mid Backend Developer',
    period: 'Jan 2026 – Feb 2026',
    description:
      'Architected and built a production-grade marketplace backend using ASP.NET Core 10, taking full ownership from system design to multi-cloud deployment.',
    achievements: [
      'Designed scalable architecture serving 100K+ daily users (~2M+ requests/day)',
      'Maintained ~124ms average API response time under load',
      'Deployed containerized infrastructure on Google Cloud with Docker and Kubernetes',
      'Implemented distributed components using Redis, Elasticsearch, RabbitMQ, and Kafka',
    ],
    stack: [
      'ASP.NET Core 10',
      'Docker',
      'Kubernetes',
      'Google Cloud',
      'Redis',
      'Elasticsearch',
      'RabbitMQ',
      'Kafka',
    ],
  },
  {
    company: 'Meşhur',
    role: 'Mid Frontend Developer',
    period: 'May 2025 – Dec 2025',
    description:
      'Contributed to the architectural refactoring and modernization of a large-scale web application using Next.js, applying Clean Code and SOLID principles.',
    achievements: [
      'Led frontend architecture improvements and modularization efforts',
      'Implemented new features with Next.js, TailwindCSS, and Shadcn',
      'Built reusable UI components and maintained documentation using Storybook',
      'Implemented unit testing with Jest and integrated Google Ads & Meta Pixel',
    ],
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Shadcn', 'Storybook', 'Jest'],
  },
  {
    company: 'Blucka',
    role: 'Junior Full Stack Developer',
    period: 'May 2024 – Mar 2025',
    description:
      'Contributed to Telegram Mini App projects and supported multiple web applications across frontend and backend.',
    achievements: [
      'Developed Telegram Mini Apps using Next.js and TypeScript',
      'Supported backend–frontend integrations and ensured smooth API communication',
      'Identified and resolved frontend issues to improve stability and UX',
    ],
    stack: ['Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    company: 'Blucka',
    role: 'Junior Frontend Developer',
    period: 'Sep 2023 – May 2024',
    description:
      'Contributed to the frontend development of Punky AI, a Discord automation bot with AI-driven features.',
    achievements: [
      'Implemented and improved user interface components',
      'Fixed frontend bugs and improved application stability',
      'Worked closely with backend services for seamless API integration',
    ],
    stack: ['React', 'TypeScript', 'CSS'],
  },
];

const skills: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'Nuxt.js', 'TypeScript', 'TailwindCSS', 'Shadcn', 'Storybook'],
  Backend: ['Node.js', 'ASP.NET Core', 'RESTful APIs'],
  'DevOps & Cloud': ['Docker', 'Kubernetes', 'Google Cloud'],
  'Distributed Systems': ['Redis', 'Elasticsearch', 'RabbitMQ', 'Kafka'],
  'Monitoring & AI': ['Grafana', 'Prometheus', 'PyTorch', 'TensorFlow'],
  Mobile: ['iOS', 'Android'],
  Testing: ['Jest'],
};

const certifications = [
  { name: 'Frontend Developer (React)', issuer: 'HackerRank', level: 'Certified' },
  { name: 'JavaScript', issuer: 'HackerRank', level: 'Intermediate' },
  { name: 'Python', issuer: 'HackerRank', level: 'Basic' },
  { name: 'C#', issuer: 'HackerRank', level: 'Basic' },
  { name: 'Java', issuer: 'HackerRank', level: 'Basic' },
];

const languages = [
  { lang: 'Turkish', level: 'Native' },
  { lang: 'English', level: 'B2 — Upper Intermediate' },
  { lang: 'German', level: 'A2 — Elementary' },
];

const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Daily Users Served', value: '100K+' },
  { label: 'API Requests / Day', value: '~2M' },
  { label: 'Avg API Response Time', value: '124ms' },
];

export default async function Page() {
  return (
    <Fragment>
      <HomeStructuredData />

      {/* Hero */}
      <Section id="hero" className="border-b py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Full Stack Developer
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mb-6 text-5xl font-medium tracking-tight sm:text-7xl">
                Eray Günüuygun
              </h1>
            </FadeUp>
            <FadeUp delay={0.22}>
              <p className="mb-10 max-w-xl leading-relaxed text-muted-foreground">
                Building scalable, production-grade web applications and distributed systems.
                Specialized in TypeScript, Next.js, and ASP.NET Core.
              </p>
            </FadeUp>
            <FadeUp delay={0.35}>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="https://github.com/Xjectro" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href="https://linkedin.com/in/xjectro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="mailto:xjectro@gmail.com">
                    <Mail />
                    Email me
                  </Link>
                </Button>
              </div>
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section id="about" className="border-b py-16 sm:py-24">
        <Container>
          <div className="grid items-start gap-12 md:grid-cols-2">
            <ScrollReveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                About
              </p>
              <h2 className="mb-6 text-3xl font-medium tracking-tight">Who I am</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                I&apos;m a Full-Stack Software Developer with hands-on experience across the entire
                stack — from pixel-perfect React frontends to high-throughput distributed backends.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I care about clean architecture, performance, and maintainability. Whether it&apos;s
                designing a system for millions of daily requests or building a smooth UI component,
                I bring the same attention to quality and production-readiness.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.1 + i * 0.08}>
                  <div className="h-full rounded-lg border p-5 transition-shadow hover:shadow-md">
                    <p className="text-3xl font-medium tracking-tight">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section id="experience" className="border-b py-16 sm:py-24">
        <Container>
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Experience
            </p>
            <h2 className="mb-12 text-3xl font-medium tracking-tight">Where I&apos;ve worked</h2>
          </ScrollReveal>
          <div>
            {experience.map((job, i) => (
              <ScrollReveal
                key={i}
                delay={0.05 + i * 0.07}
                className={cn(
                  'grid gap-4 md:grid-cols-[180px_1fr] md:gap-10',
                  i === 0 ? 'pb-10' : 'border-t py-10',
                )}
              >
                <div className="pt-1">
                  <p className="font-semibold">{job.company}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{job.period}</p>
                  <Badge variant="secondary" className="mt-3 text-xs">
                    Remote
                  </Badge>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">{job.role}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                  <ul className="mb-5 space-y-2">
                    {job.achievements.map((a, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-0.5 shrink-0 text-foreground">—</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section id="skills" className="border-b py-16 sm:py-24">
        <Container>
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Skills
            </p>
            <h2 className="mb-12 text-3xl font-medium tracking-tight">What I work with</h2>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, techs], i) => (
              <ScrollReveal key={category} delay={i * 0.06}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section id="certifications" className="border-b py-16 sm:py-24">
        <Container>
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Certifications
            </p>
            <h2 className="mb-10 text-3xl font-medium tracking-tight">Certifications</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 0.07}>
                <div className="h-full rounded-lg border p-4 transition-shadow hover:shadow-md">
                  <p className="font-medium">{cert.name}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.level}
                    </Badge>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Languages */}
      <Section id="languages" className="border-b py-16 sm:py-24">
        <Container>
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Languages
            </p>
            <h2 className="mb-10 text-3xl font-medium tracking-tight">Languages</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-4">
            {languages.map((l, i) => (
              <ScrollReveal key={l.lang} delay={i * 0.09}>
                <div className="min-w-[180px] rounded-lg border px-5 py-4 transition-shadow hover:shadow-md">
                  <p className="font-medium">{l.lang}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{l.level}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-20 sm:py-32">
        <Container>
          <div className="max-w-xl">
            <ScrollReveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Contact
              </p>
              <h2 className="mb-4 text-3xl font-medium tracking-tight">Get in touch</h2>
              <p className="mb-10 leading-relaxed text-muted-foreground">
                I&apos;m open to new opportunities — full-time roles, freelance projects, or just a
                conversation. Feel free to reach out.
              </p>
            </ScrollReveal>
            <div className="flex flex-col gap-4">
              <ScrollReveal delay={0.1}>
                <Link
                  href="mailto:xjectro@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  xjectro@gmail.com
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={0.17}>
                <Link
                  href="tel:+905442454558"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +90 544 245 45 58
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={0.24}>
                <Link
                  href="https://github.com/Xjectro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4 shrink-0" />
                  github.com/Xjectro
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={0.31}>
                <Link
                  href="https://linkedin.com/in/xjectro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4 shrink-0" />
                  linkedin.com/in/xjectro
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>
    </Fragment>
  );
}
