'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Cog, ShoppingCart, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useCart } from '@/hooks/use-cart';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Badge } from '../ui/badge';

const navLinks = [
  { href: '/catalog', label: 'Catálogo' },
  { href: '/garage', label: 'Mi Garaje' },
  { href: '/community', label: 'Comunidad' },
  { href: '/contact', label: 'Contacto' },
];

export function Header() {
  const pathname = usePathname();
  const { cart, lastAddedItem, isPopoverOpen, setIsPopoverOpen, getCartTotalItems } = useCart();

  const totalItems = getCartTotalItems();

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

        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger asChild>
            <Button asChild variant="ghost" size="icon" className="relative">
              <Link href="/cart">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                   <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0">{totalItems}</Badge>
                )}
                <span className="sr-only">Carrito de Compras</span>
              </Link>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 mr-4">
             {lastAddedItem ? (
              <div className="space-y-4">
                 <div className="flex justify-between items-start">
                    <h4 className="font-medium leading-none">Añadido al carrito</h4>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsPopoverOpen(false)}>
                        <X className="h-4 w-4"/>
                    </Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1599256872236-5bf143de4d5d?q=80&w=600&h=400&auto=format&fit=crop"
                      alt={lastAddedItem.name}
                      fill
                      className="object-cover"
                      data-ai-hint="car part"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">{lastAddedItem.name}</h5>
                    <p className="text-sm text-muted-foreground">${lastAddedItem.estimatedCost}</p>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/cart" onClick={() => setIsPopoverOpen(false)}>Ver Carrito ({totalItems})</Link>
                </Button>
              </div>
            ) : (
                <div className="text-center p-4">
                    <p>Tu carrito está vacío.</p>
                </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
