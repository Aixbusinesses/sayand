import Image from 'next/image';
import { AIAssistant } from '@/components/ai-assistant';
import { PartCard } from '@/components/part-card';
import { type Part } from '@/lib/types';

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

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full h-[50vh] md:h-[60vh] relative flex items-center justify-center text-center text-white p-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Chevrolet Corsa" 
          layout="fill" 
          objectFit="cover" 
          className="z-0"
          data-ai-hint="tuned car"
          priority
        />
        <div className="relative z-20 flex flex-col items-center">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-wider text-shadow-lg">CRAFT YOUR ULTIMATE CORSA</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-200">
            From street style to track-ready performance, find and configure the perfect parts for your build. Our AI assistant helps you choose, you do the driving.
          </p>
        </div>
      </section>

      <AIAssistant />

      <section className="w-full max-w-7xl px-4 py-16">
        <h2 className="font-headline text-4xl text-center mb-8 tracking-wide text-primary">Featured Parts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredParts.map((part) => (
            <PartCard key={part.name} part={part} />
          ))}
        </div>
      </section>
    </div>
  );
}
