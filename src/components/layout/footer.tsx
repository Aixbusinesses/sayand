import { Cog } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-card mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Cog className="h-5 w-5 text-primary" />
          <p className="font-headline text-lg text-foreground">SAYAND</p>
        </div>
        <p className="mt-4 sm:mt-0">&copy; {new Date().getFullYear()} SAYAND. All rights reserved.</p>
      </div>
    </footer>
  );
}
