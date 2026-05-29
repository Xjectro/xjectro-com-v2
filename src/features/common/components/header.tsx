'use client';

import { Button } from '@/shared/ui/primitives/button';
import { Nav } from '@/shared/ui/react/design-system';
import { GithubIcon } from '@/shared/ui/icons/brand-icons';
import { motion } from 'motion/react';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <motion.div
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50"
    >
      <Nav
        className="border-b bg-background/80 backdrop-blur-md"
        containerClassName="flex justify-between items-center gap-4"
      >
        <Link href="/" className="font-semibold tracking-tight">
          Eray Günüuygun
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="https://github.com/Xjectro" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            GitHub
          </Link>
        </Button>
      </Nav>
    </motion.div>
  );
}
