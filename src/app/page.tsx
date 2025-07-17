import Image from 'next/image';
import Link from 'next/link';
import { AIAssistant } from '@/components/ai-assistant';
import { PartCard } from '@/components/part-card';
import { type Part } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Wrench } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CommunityCard } from '@/components/community-card';

const featuredParts: Part[] = [
  {
    name: "Turbo Kit Stage 2",
    description: "Complete turbo kit to boost your Corsa's performance. Includes manifold, turbocharger, intercooler, and all necessary piping.",
    estimatedCost: 1500,
    installationGuide: "#",
    compatibility: ["Corsa 1.6L", "Corsa 1.8L"]
  },
  {
    name: "Adjustable Coilover Suspension",
    description: "Lower your Corsa and improve handling with this fully adjustable coilover kit. Set your own height and damping.",
    estimatedCost: 850,
    installationGuide: "#",
    compatibility: ["All Corsa B/C Models"]
  },
  {
    name: "Wide Body Fender Flares",
    description: "Give your Corsa an aggressive stance with these custom-fit wide body fender flares. Made from durable ABS plastic.",
    estimatedCost: 400,
    installationGuide: "#",
    compatibility: ["Corsa B 3-door"]
  }
];

const communityProjects = [
    {
        title: "My 1.8T Corsa B Sleeper",
        author: "TunerTom",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        imageUrl: "https://placehold.co/800x600.png",
        likes: 128,
    },
    {
        title: "Clean & Low Daily Driver",
        author: "StanceLife",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
        imageUrl: "https://placehold.co/800x600.png",
        likes: 256,
    },
    {
        title: "Full Rally Build Corsa C",
        author: "RallyFanatic",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
        imageUrl: "https://placehold.co/800x600.png",
        likes: 98,
    },
];

const carouselImages = [
  { src: "https://placehold.co/1920x1080.png", alt: "Corsa deportivo modificado", hint: "tuned car" },
  { src: "https://placehold.co/1920x1080.png", alt: "Corsa rojo en una carretera", hint: "red car" },
  { src: "https://placehold.co/1920x1080.png", alt: "Detalle de llanta de aleación", hint: "alloy wheel" },
  { src: "https://placehold.co/1920x1080.png", alt: "Interior de un Corsa personalizado", hint: "custom car interior" },
];


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full relative">
        <Carousel
          opts={{ loop: true, }}
          className="w-full"
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
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-wider text-shadow-lg">CREA EL COCHE DE TUS SUEÑOS</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-200">
            Desde estilo urbano hasta rendimiento para la pista, encuentra y configura las piezas perfectas para tu proyecto. Nuestro asistente de IA te ayuda a elegir, tú conduces.
          </p>
        </div>
      </section>
      
      <AIAssistant />

      <section className="w-full max-w-7xl px-4 py-16">
        <h2 className="font-headline text-4xl text-center mb-2 tracking-wide text-primary">Piezas Destacadas</h2>
        <p className="text-center text-muted-foreground mb-8">Una selección de nuestras piezas más populares.</p>
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
                    src="https://placehold.co/800x600.png"
                    alt="Garaje con herramientas"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="garage tools"
                />
            </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 py-16">
        <h2 className="font-headline text-4xl text-center mb-2 tracking-wide text-primary">Comunidad</h2>
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
