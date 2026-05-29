import { Section, Container } from '@/shared/ui/react/design-system';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/shared/ui/icons/brand-icons';
import Link from 'next/link';

const links = [
  { label: 'GitHub', href: 'https://github.com/Xjectro', icon: GithubIcon, external: true },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/xjectro',
    icon: LinkedinIcon,
    external: true,
  },
  { label: 'Email', href: 'mailto:xjectro@gmail.com', icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t">
      <Section>
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eray Günüuygun. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {links.map(({ label, href, icon: Icon, external }) => (
              <Link
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </footer>
  );
}
