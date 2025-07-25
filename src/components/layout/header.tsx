'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cog, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/catalog', label: 'Catálogo' },
  { href: '/garage', label: 'Mi Garaje' },
  { href: '/community', label: 'Comunidad' },
  { href: '/contact', label: 'Contacto' },
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
                pathname === link.href ? 'text-accent' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="ghost" size="icon">
          <Link href="/cart">
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">Carrito de Compras</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
