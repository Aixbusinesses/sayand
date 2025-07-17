'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cog } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/catalog', label: 'Parts Catalog' },
  { href: '/garage', label: 'My Garage' },
  { href: '/#ai-assistant', label: 'AI Assistant' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Cog className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl tracking-wider text-foreground">SAYAND</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-accent',
                (pathname === link.href || (link.href === '/#ai-assistant' && pathname === '/')) ? 'text-accent' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
}
