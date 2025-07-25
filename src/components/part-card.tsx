'use client';

import Image from 'next/image';
import { type Part } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

interface PartCardProps {
  part: Part;
}

export function PartCard({ part }: PartCardProps) {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(part);
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader>
        <div className="aspect-video relative mb-4">
          <Image 
            src={`https://images.unsplash.com/photo-1599256872236-5bf143de4d5d?q=80&w=600&h=400&auto=format&fit=crop`} 
            alt={part.name}
            fill
            className="object-cover rounded-md"
            data-ai-hint="car part"
          />
        </div>
        <CardTitle className="font-headline tracking-wide text-2xl">{part.name}</CardTitle>
        <CardDescription>{part.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="compatibility">
            <AccordionTrigger>Compatibilidad</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {part.compatibility.map((model) => (
                  <li key={model}>{model}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="guide">
            <AccordionTrigger>Guía de Instalación</AccordionTrigger>
            <AccordionContent>
              <a href={part.installationGuide} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Ver Guía de Instalación
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant="secondary" className="text-lg bg-accent text-accent-foreground">
          Est. ${part.estimatedCost}
        </Badge>
        <Button variant="outline" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4"/>
          Añadir al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
