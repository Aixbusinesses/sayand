import Image from 'next/image';
import { type Part } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface PartCardProps {
  part: Part;
}

export function PartCard({ part }: PartCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader>
        <div className="aspect-video relative mb-4">
          <Image 
            src={`https://placehold.co/600x400.png`} 
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
            <AccordionTrigger>Compatibility</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {part.compatibility.map((model) => (
                  <li key={model}>{model}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="guide">
            <AccordionTrigger>Installation Guide</AccordionTrigger>
            <AccordionContent>
              <a href={part.installationGuide} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                View Installation Guide
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        <Badge variant="secondary" className="text-lg bg-accent text-accent-foreground">
          Est. ${part.estimatedCost}
        </Badge>
      </CardFooter>
    </Card>
  );
}
