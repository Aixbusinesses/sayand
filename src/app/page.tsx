
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { AIAssistant } from '@/components/ai-assistant';
import { PartCard } from '@/components/part-card';
import { type Part } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Wrench } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CommunityCard } from '@/components/community-card';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const featuredParts: Part[] = [
  {
    name: "Kit de Turbo para Corsa 1.6L",
    description: "Kit completo de turbo para llevar tu Corsa al siguiente nivel. Incluye turbocompresor, intercooler y tuberías.",
    estimatedCost: 1800,
    installationGuide: "#",
    compatibility: ["Corsa 1.6L"]
  },
  {
    name: "Faros Angel Eyes Corsa B",
    description: "Moderniza la apariencia de tu Corsa con estos faros 'Angel Eyes' de alta calidad con fondo negro.",
    estimatedCost: 250,
    installationGuide: "#",
    compatibility: ["Corsa B (1993-2000)"]
  },
  {
    name: "Tapa Válvulas Cromada",
    description: "Dale un toque de elegancia y personalización al motor de tu Corsa con esta tapa de válvulas cromada.",
    estimatedCost: 120,
    installationGuide: "#",
    compatibility: ["Corsa 1.4L", "Corsa 1.6L"]
  }
];

const communityProjects = [
    {
        title: "Proyecto Corsa Turbo",
        author: "Andrés G.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        imageUrl: "https://images.unsplash.com/photo-1604172497384-6fea2a1e7092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxyZWQlMjBjb3JzYXxlbnwwfHx8fDE3NTM1NzcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        likes: 152,
        dataAiHint: "red corsa"
    },
    {
        title: "Corsa Evolution Restaurado",
        author: "Carlos R.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
        imageUrl: "https://images.unsplash.com/photo-1585458992684-c0222b9cb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxibHVlJTIwY29yc2F8ZW58MHx8fHwxNzUzNTc3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        likes: 210,
        dataAiHint: "blue corsa"
    },
    {
        title: "Mi Corsa de Pista",
        author: "Sebastian M.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
        imageUrl: "https://images.unsplash.com/photo-1668560764958-ed96c0830438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3JzYSUyMHJhY2UlMjBjYXJ8ZW58MHx8fHwxNzUzNTc3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        likes: 305,
        dataAiHint: "corsa race car"
    },
];

const carouselImages = [
  { src: "https://images.unsplash.com/photo-1562508156-afcfbacc5360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb3JzYSUyMGVuZ2luZXxlbnwwfHx8fDE3NTM1NzcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Motor de Corsa modificado", hint: "corsa engine" },
  { src: "https://images.unsplash.com/photo-1735012314901-10b3638774a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxibHVlJTIwY29yc2F8ZW58MHx8fHwxNzUzNTc3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Corsa azul deportivo", hint: "blue corsa" },
  { src: "https://images.unsplash.com/photo-1604172497384-6fea2a1e7092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxyZWQlMjBjb3JzYXxlbnwwfHx8fDE3NTM1NzcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Corsa rojo clásico", hint: "red corsa" },
];


export default function Home() {

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="flex flex-col items-center">
      <section className="w-full relative">
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true, }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="h-[60vh] md:h-[70vh] w-full relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    data-ai-hint={image.hint}
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white border-white/50 hover:bg-white/20 hover:text-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white border-white/50 hover:bg-white/20 hover:text-white" />
        </Carousel>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-wider text-shadow-lg">REPUESTOS Y MODIFICACIONES PARA TU CORSA</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-200">
            2 décadas de experiencia nos respaldan. Todo lo que necesitas para tu proyecto, repuestos y modificaciones
          </p>
        </div>
      </section>

      <section className="w-full bg-card">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <Wrench className="h-12 w-12 text-accent"/>
                <h2 className="font-headline text-4xl mt-4 tracking-wide text-primary">Tu Garaje Virtual</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                    Guarda tus piezas favoritas, planifica tus modificaciones y sigue el progreso de tu Corsa. Tu garaje es el centro de mando para todos tus proyectos.
                </p>
                <Button asChild size="lg" className="mt-6">
                    <Link href="/garage">
                        Ir a Mi Garaje
                        <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
            <div className="order-1 md:order-2">
                <Image 
                    src="https://images.unsplash.com/photo-1659625883328-26a8df1d8c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb3JzYSUyMGdhcmFnZXxlbnwwfHx8fDE3NTM1NzcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Garaje con herramientas y un Corsa"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="corsa garage"
                />
            </div>
        </div>
      </section>
      
      <AIAssistant />

      <section className="w-full max-w-7xl px-4 py-16">
        <h2 className="font-headline text-4xl text-center mb-2 tracking-wide text-primary">Piezas Destacadas</h2>
        <p className="text-center text-muted-foreground mb-8">Una selección de nuestros repuestos más populares para Corsa.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredParts.map((part) => (
            <PartCard key={part.name} part={part} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/catalog">
                    Ver Catálogo Completo
                    <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 py-16">
        <h2 className="font-headline text-4xl text-center mb-2 tracking-wide text-primary">Comunidad Corsa</h2>
        <p className="text-center text-muted-foreground mb-8">Inspírate con los proyectos de otros entusiastas del Corsa.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityProjects.map((project) => (
            <CommunityCard key={project.title} project={project} />
          ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/community">
                    Ver más proyectos
                    <Users className="ml-2" />
                </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
