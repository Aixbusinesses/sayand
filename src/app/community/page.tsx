import { CommunityCard } from "@/components/community-card";

const communityProjects = [
    {
        title: "My 1.8T Corsa B Sleeper",
        author: "TunerTom",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        imageUrl: "https://placehold.co/800x600.png",
        likes: 128,
    },
    {
        title: "Clean & Low Daily Driver",
        author: "StanceLife",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
        imageUrl: "https://placehold.co/800x600.png",
        likes: 256,
    },
    {
        title: "Full Rally Build Corsa C",
        author: "RallyFanatic",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
        imageUrl: "https://placehold.co/800x600.png",
        likes: 98,
    },
    {
        title: "Brazilian Style Audio Build",
        author: "BassHeadBR",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
        imageUrl: "https://placehold.co/800x600.png",
        likes: 402,
    },
    {
        title: "Resto-modded 1995 Corsa",
        author: "ClassicCarl",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
        imageUrl: "https://placehold.co/800x600.png",
        likes: 177,
    },
    {
        title: "Track-Focused Time Attack Car",
        author: "SpeedDemon",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704c",
        imageUrl: "https://placehold.co/800x600.png",
        likes: 312,
    },
];

export default function CommunityPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">Comunidad</h1>
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
