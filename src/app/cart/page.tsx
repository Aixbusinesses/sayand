'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, getCartSubtotal } = useCart();
    
    const subtotal = getCartSubtotal();
    const shipping = subtotal > 0 ? 50 : 0; // Example shipping cost
    const total = subtotal + shipping;

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">Mi Carrito de Compras</h1>
                <p className="mt-2 text-lg text-muted-foreground">Revisa tus artículos y prepárate para potenciar tu Corsa.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl tracking-wide">Tus Artículos</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {cart.length === 0 ? (
                                <p className="text-muted-foreground text-center py-8">Tu carrito está vacío.</p>
                            ) : (
                                cart.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="relative h-24 w-24 rounded-md overflow-hidden">
                                            <Image
                                                src={"https://images.unsplash.com/photo-1599256872236-5bf143de4d5d?q=80&w=600&h=400&auto=format&fit=crop"}
                                                alt={item.part.name}
                                                fill
                                                className="object-cover"
                                                data-ai-hint="car part"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold">{item.part.name}</h3>
                                            <p className="text-muted-foreground text-sm">${item.part.estimatedCost}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Input 
                                                type="number" 
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.part.name, parseInt(e.target.value, 10))}
                                                className="w-16 text-center" 
                                                min="1"
                                            />
                                        </div>
                                        <p className="font-bold w-20 text-right">${(item.part.estimatedCost * item.quantity).toFixed(2)}</p>
                                        <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.part.name)}>
                                            <Trash2 className="h-5 w-5 text-destructive" />
                                        </Button>
                                    </div>
                                ))
                            )}
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl tracking-wide">Resumen del Pedido</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Envío (estimado)</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-4" disabled={cart.length === 0}>
                                Proceder al Pago
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
