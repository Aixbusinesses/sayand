'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ThumbsUp, User } from "lucide-react";

const communityPosts = [
    {
        author: "CorsaFan82",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        time: "Hace 2 horas",
        content: "¿Alguien sabe dónde conseguir un buen kit de turbo para un Corsa 1.6? Busco algo que no requiera modificar demasiado el motor.",
        likes: 15,
        comments: 4,
    },
    {
        author: "EvoDriver",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
        time: "Hace 5 horas",
        content: "Acabo de instalar el sistema de escape performance de SAYAND y ¡suena increíble! Totalmente recomendado. El envío a Medellín fue súper rápido.",
        likes: 42,
        comments: 12,
    },
    {
        author: "Anónimo",
        time: "Hace 1 día",
        content: "Busco rines de 15 pulgadas para un Corsa B, ¿tienen alguna recomendación de las que venden aquí? Quiero un look más deportivo.",
        likes: 8,
        comments: 2,
    }
];

export default function GaragePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">Foro de la Comunidad</h1>
                <p className="mt-2 text-lg text-muted-foreground">Conéctate con otros dueños de Corsa, comparte tus proyectos y resuelve tus dudas.</p>
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="font-headline tracking-wide text-2xl">Crear Nueva Publicación</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <Input placeholder="Tu apodo (opcional)" />
                        <Textarea placeholder="Escribe tu pregunta o comentario aquí..." className="min-h-[120px]" />
                        <div className="flex justify-between items-center">
                            <p className="text-xs text-muted-foreground">
                                **Reglas:** Mantén el respeto. No spam. Solo contenido relacionado a Corsa.
                            </p>
                            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                                Publicar
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <div className="space-y-6">
                {communityPosts.map((post, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                             <Avatar>
                                {post.avatar ? <AvatarImage src={post.avatar} alt={post.author} /> : <User className="h-full w-full p-2 text-muted-foreground"/> }
                                <AvatarFallback>{post.author.substring(0,2)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <p className="font-bold">{post.author}</p>
                                <p className="text-xs text-muted-foreground">{post.time}</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/90">{post.content}</p>
                        </CardContent>
                        <CardContent className="flex items-center gap-6 text-muted-foreground pt-4">
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <ThumbsUp className="h-4 w-4" />
                                </Button>
                                <span>{post.likes}</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MessageSquare className="h-4 w-4" />
                                </Button>
                                <span>{post.comments}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
