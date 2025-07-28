'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getPartSuggestions } from '@/app/actions';
import { type Part } from '@/lib/types';
import { PartCard } from './part-card';
import { Skeleton } from './ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const formSchema = z.object({
  description: z.string().min(10, {
    message: 'Por favor, describe la modificación deseada con al menos 10 caracteres.',
  }),
});

export function AIAssistant() {
  const [parts, setParts] = useState<Part[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setParts([]);
    const result = await getPartSuggestions(values);

    if (result.success && result.data?.parts) {
      setParts(result.data.parts);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Ocurrió un error inesperado.',
      });
    }
    setIsLoading(false);
  }

  return (
    <section id="ai-assistant" className="w-full bg-card -mt-24 md:-mt-32 relative z-20">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <Card className="border-accent/30 border-2 shadow-2xl shadow-black/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-3xl md:text-4xl tracking-wide text-accent">
              <Wand2 className="h-8 w-8" />
              Asistente de Proyectos con IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Describe el Corsa de tus Sueños</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ej: 'Quiero que mi Corsa sea más rápido para los días de pista con un presupuesto de $2000' o 'Un Corsa wide-body con mejor sonido'"
                          className="min-h-[100px] bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  {isLoading ? 'Generando Ideas...' : 'Generar Lista de Piezas'}
                </Button>
              </form>
            </Form>

            <div className="mt-8">
              {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex flex-col space-y-3">
                      <Skeleton className="h-[125px] w-full rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-4 w-3/5" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {parts.length > 0 && (
                <>
                  <h3 className="font-headline text-3xl text-center mb-6 tracking-wide text-primary">Tu Lista de Piezas Personalizada</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parts.map((part) => (
                      <PartCard key={part.name} part={part} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
