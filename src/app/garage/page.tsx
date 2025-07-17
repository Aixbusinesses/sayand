import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, Wrench, Lock, UserPlus } from "lucide-react";

export default function GaragePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">My Garage</h1>
                <p className="mt-2 text-lg text-muted-foreground">Your personal space to plan, build, and showcase your Corsa.</p>
            </div>

            <div className="relative p-8 border-2 border-dashed border-border rounded-lg">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-4">
                    <Lock className="h-16 w-16 text-accent mb-4" />
                    <h2 className="font-headline text-3xl text-white tracking-wide">Feature Locked</h2>
                    <p className="text-muted-foreground max-w-md mt-2">
                        Create an account or sign in to access your garage, save parts lists, and track your modifications.
                    </p>
                    <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                        <UserPlus className="mr-2 h-5 w-5" />
                        Sign Up / Login
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 filter blur-md select-none">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline tracking-wide text-2xl">
                                <List />
                                My Saved Parts
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-card-foreground/5 rounded-md">
                                <span>Performance Exhaust System</span>
                                <span className="font-bold text-muted-foreground">$600</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-card-foreground/5 rounded-md">
                                <span>16-inch Alloy Wheels 'Torque'</span>
                                <span className="font-bold text-muted-foreground">$950</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline tracking-wide text-2xl">
                                <Wrench />
                                My Current Build
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-card-foreground/5 rounded-lg"></div>
                            <p className="text-muted-foreground mt-2">1998 Corsa B 1.6 - Track Project</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
