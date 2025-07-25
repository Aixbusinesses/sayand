'use client';

import { type Part } from "@/lib/types";
import { createContext, useState, type ReactNode, useEffect } from "react";

interface CartItem {
    part: Part;
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (part: Part) => void;
    removeFromCart: (partName: string) => void;
    updateQuantity: (partName: string, quantity: number) => void;
    getCartSubtotal: () => number;
    getCartTotalItems: () => number;
    lastAddedItem: Part | null;
    isPopoverOpen: boolean;
    setIsPopoverOpen: (isOpen: boolean) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [lastAddedItem, setLastAddedItem] = useState<Part | null>(null);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const addToCart = (part: Part) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.part.name === part.name);
            if (existingItem) {
                return prevCart.map(item =>
                    item.part.name === part.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { part, quantity: 1 }];
        });
        setLastAddedItem(part);
        setIsPopoverOpen(true);

        setTimeout(() => {
           setIsPopoverOpen(false);
        }, 5000)
    };

    const removeFromCart = (partName: string) => {
        setCart(prevCart => prevCart.filter(item => item.part.name !== partName));
    };

    const updateQuantity = (partName: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(partName);
            return;
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.part.name === partName ? { ...item, quantity } : item
            )
        );
    };
    
    const getCartSubtotal = () => {
        return cart.reduce((total, item) => total + item.part.estimatedCost * item.quantity, 0);
    }

    const getCartTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }


    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartSubtotal,
        getCartTotalItems,
        lastAddedItem,
        isPopoverOpen,
        setIsPopoverOpen,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
