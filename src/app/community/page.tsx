import { CommunityCard } from "@/components/community-card";

const communityProjects = [
    {
        title: "Mi Corsa B Sleeper 1.8T",
        author: "TunerTom",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        imageUrl: "https://images.unsplash.com/photo-1629450648316-c14d6f859424?q=80&w=1974&auto=format&fit=crop",
        likes: 128,
        dataAiHint: "red corsa"
    },
    {
        title: "Proyecto Corsa Evolution",
        author: "StanceLife",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
        imageUrl: "https://images.unsplash.com/photo-1555516183-1e247b92a343?q=80&w=2070&auto=format&fit=crop",
        likes: 256,
        dataAiHint: "blue corsa"
    },
    {
        title: "Corsa C para Rally",
        author: "RallyFanatic",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
        imageUrl: "https://images.unsplash.com/photo-1553440569-b5f370461872?q=80&w=2070&auto=format&fit=crop",
        likes: 98,
        dataAiHint: "corsa rally"
    },
    {
        title: "Corsa Active con Sonido",
        author: "BassHeadBR",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
        imageUrl: "https://images.unsplash.com/photo-1622684803738-17a415a781b1?q=80&w=2070&auto=format&fit=crop",
        likes: 402,
        dataAiHint: "corsa audio"
    },
    {
        title: "Restauración Corsa 1998",
        author: "ClassicCarl",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
        imageUrl: "https://images.unsplash.com/photo-1603642089422-427c88019cf5?q=80&w=1974&auto=format&fit=crop",
        likes: 177,
        dataAiHint: "classic corsa"
    },
    {
        title: "Corsa para Time Attack",
        author: "SpeedDemon",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704c",
        imageUrl: "https://images.unsplash.com/photo-1610196928275-3b953835c643?q=80&w=1974&auto=format&fit=crop",
        likes: 312,
        dataAiHint: "corsa race car"
    },
];

export default function CommunityPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">Comunidad Corsa</h1>
                <p className="mt-2 text-lg text-muted-foreground">Inspírate con los proyectos de otros entusiastas del Corsa.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {communityProjects.map((project) => (
                    <CommunityCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}
