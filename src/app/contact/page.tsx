import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">Contáctanos</h1>
        <p className="mt-2 text-lg text-muted-foreground">¿Tienes preguntas? Estamos aquí para ayudarte con tu proyecto Corsa.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl tracking-wide">Enviar un Mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Tu Nombre" />
              <Input type="email" placeholder="Tu Email" />
              <Textarea placeholder="Tu Mensaje" className="min-h-[150px]" />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h3 className="font-headline text-2xl tracking-wide text-accent">Nuestra Información</h3>
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-accent mt-1" />
            <div>
              <h4 className="font-bold">Email</h4>
              <p className="text-muted-foreground">contacto@sayand.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageCircle className="h-6 w-6 text-accent mt-1" />
            <div>
              <h4 className="font-bold">Telegram</h4>
              <Link href="https://t.me/your_telegram_bot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                Contáctanos por Telegram
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-accent mt-1" />
            <div>
              <h4 className="font-bold">Dirección</h4>
              <p className="text-muted-foreground">Carrera 17 #8-37, Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
