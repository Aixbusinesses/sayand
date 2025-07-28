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
        name: "Rines de Lujo 15 pulgadas",
        description: "Juego de 4 rines de lujo de 15 pulgadas, diseño multiradio en color grafito. Ideales para Corsa.",
        estimatedCost: 800,
        installationGuide: "#",
        compatibility: ["Todos los modelos Corsa 4-lug"]
    },
    {
        name: "Stop Trasero Tipo Altezza",
        description: "Dale un look más moderno a tu Corsa con estos stops traseros tipo Altezza con fondo cromado.",
        estimatedCost: 150,
        installationGuide: "#",
        compatibility: ["Corsa B (1993-2000)"]
    },
    {
        name: "Kit de Frenos Mejorado",
        description: "Mejora la frenada de tu Corsa con este kit de discos hiperventilados y pastillas de cerámica.",
        estimatedCost: 450,
        installationGuide: "#",
        compatibility: ["Corsa C (2000-2006)"]
    },
    {
        name: "Spoiler Estilo GSi",
        description: "Alerón trasero icónico estilo GSi para darle un look deportivo. Viene listo para pintar.",
        estimatedCost: 220,
        installationGuide: "#",
        compatibility: ["Corsa B 3-puertas", "Corsa B 5-puertas"]
    },
    {
        name: "Pila de Gasolina de Alto Flujo",
        description: "Asegura el flujo de combustible correcto para tu motor modificado con esta pila de alto rendimiento.",
        estimatedCost: 90,
        installationGuide: "#",
        compatibility: ["Todos los modelos Corsa"]
    },
    {
        name: "Capó de Fibra de Vidrio",
        description: "Reduce peso y mejora la estética con este capó de fibra de vidrio con tomas de aire funcionales.",
        estimatedCost: 500,
        installationGuide: "#",
        compatibility: ["Corsa B", "Corsa Evolution"]
    },
    {
        name: "Cables de Alta para Bujías",
        description: "Set de cables de 8mm en silicona para mejorar la chispa y el rendimiento del motor.",
        estimatedCost: 70,
        installationGuide: "#",
        compatibility: ["Corsa 1.4L", "Corsa 1.6L"]
    }
];


export default function CatalogPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">Catálogo de Repuestos</h1>
                <p className="mt-2 text-lg text-muted-foreground">Explora todas las piezas disponibles para tu Chevrolet Corsa.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catalogParts.map((part) => (
                    <PartCard key={part.name} part={part} />
                ))}
            </div>
        </div>
    );
}
