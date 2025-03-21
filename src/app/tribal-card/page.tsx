import PetList from "@/features/animals/components/pet-list";



export default function TribalCardPage({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/20 md:min-h-min">
            {children}
        </div>
    )
}