import { PartCard } from "@/components/part-card";
import { type Part } from "@/lib/types";

const catalogParts: Part[] = [
    {
        name: "Performance Exhaust System",
        description: "Stainless steel cat-back exhaust for a deeper tone and improved horsepower. TIG welded for durability.",
        estimatedCost: 600,
        installationGuide: "#",
        compatibility: ["All Corsa Models"]
    },
    {
        name: "Short Ram Air Intake",
        description: "Increase airflow to your engine with this short ram intake. Comes with a high-flow reusable air filter.",
        estimatedCost: 180,
        installationGuide: "#",
        compatibility: ["Corsa 1.4L", "Corsa 1.6L"]
    },
    {
        name: "16-inch Alloy Wheels 'Torque'",
        description: "Set of four lightweight 16-inch alloy wheels in matte black. Reduces unsprung weight for better handling.",
        estimatedCost: 950,
        installationGuide: "#",
        compatibility: ["All Corsa models with 4-lug pattern"]
    },
    {
        name: "LED Projector Headlights",
        description: "Modernize your Corsa's look with these black housing LED projector headlights. Includes DRL light bar.",
        estimatedCost: 350,
        installationGuide: "#",
        compatibility: ["Corsa B (1993-2000)"]
    },
    {
        name: "Big Brake Kit - Front",
        description: "Improve your stopping power with this front big brake kit. Includes 4-piston calipers and drilled/slotted rotors.",
        estimatedCost: 1200,
        installationGuide: "#",
        compatibility: ["Corsa C (2000-2006)"]
    },
    {
        name: "GSi Style Rear Spoiler",
        description: "Iconic GSi style rear spoiler to add a sporty look. Comes primered and ready for paint.",
        estimatedCost: 220,
        installationGuide: "#",
        compatibility: ["Corsa B 3-door", "Corsa B 5-door"]
    },
];


export default function CatalogPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">Parts Catalog</h1>
                <p className="mt-2 text-lg text-muted-foreground">Browse all available parts for your Corsa.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catalogParts.map((part) => (
                    <PartCard key={part.name} part={part} />
                ))}
            </div>
        </div>
    );
}
