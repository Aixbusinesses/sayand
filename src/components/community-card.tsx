import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface CommunityCardProps {
  project: {
    title: string;
    author: string;
    avatar: string;
    imageUrl: string;
    likes: number;
  };
}

export function CommunityCard({ project }: CommunityCardProps) {
  return (
    <Card className="group overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
          <Image 
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="custom car"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-headline tracking-wide text-xl mb-2">{project.title}</CardTitle>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={project.avatar} alt={project.author} />
              <AvatarFallback>{project.author.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">{project.author}</span>
          </div>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary/80" />
            <span className="text-muted-foreground">{project.likes}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
