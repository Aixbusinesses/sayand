'use client';

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function SupportButton() {
    return (
        <Button 
            asChild
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-accent shadow-lg hover:bg-accent/90"
        >
            <Link href="https://t.me/your_telegram_bot" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-8 w-8 text-accent-foreground" />
                <span className="sr-only">Soporte por Telegram</span>
            </Link>
        </Button>
    )
}
