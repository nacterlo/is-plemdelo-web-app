"use client"

import { useState, useEffect } from "react"
import { PawPrint, Search, Plus, ChevronLeft, ChevronRight, Info } from "lucide-react"
import { Input } from "@/shared/ui/input"
import { Button } from "@/shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/shared/ui/dialog"
import { Label } from "@/shared/ui/label"
import { redirect, useRouter } from "next/navigation"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip"

interface Animal {
    animalNumber: string
    animalName: string
}

export default function PetList() {
    const [activePetId, setActivePetId] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [isAddingPet, setIsAddingPet] = useState(false)
    const [newPetName, setNewPetName] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

    const [animals, setAnimals] = useState<Animal[]>([
        { animalNumber: "BY791502341001", animalName: "Lion" },
        { animalNumber: "BY791502341002", animalName: "Tiger" },
        { animalNumber: "BY791502341003", animalName: "Elephant" },
        { animalNumber: "BY791502341004", animalName: "Giraffe" },
        { animalNumber: "BY791502341005", animalName: "Zebra" },
        { animalNumber: "BY791502341006", animalName: "Kangaroo" },
        { animalNumber: "BY791502341007", animalName: "Panda" },
        { animalNumber: "BY791502341008", animalName: "Penguin" },
        { animalNumber: "BY791502341009", animalName: "" },
        { animalNumber: "BY791502341010", animalName: "Wolf" },
        { animalNumber: "BY7915023410011", animalName: "Lion" },
        { animalNumber: "BY7915023410022", animalName: "Tiger" },
        { animalNumber: "BY7915023410033", animalName: "Elephant" },
        { animalNumber: "BY7915023410044", animalName: "Giraffe" },
        { animalNumber: "BY7915023410055", animalName: "Zebra" },
        { animalNumber: "BY7915023410066", animalName: "Kangaroo" },
        { animalNumber: "BY7915023410077", animalName: "Panda" },
        { animalNumber: "BY7915023410088", animalName: "Penguin" },
        { animalNumber: "BY7915023410099", animalName: "" },
        { animalNumber: "BY79150234101010", animalName: "Wolf" },
        { animalNumber: "BY791555234105010", animalName: "Wolf" },
    ])

    const filteredPets = animals.filter(
        (animal) => animal.animalNumber.toLowerCase().includes(searchTerm.toLowerCase()) || animal.animalNumber.toString().includes(searchTerm),
    )

    // Reset to first page when search changes
    useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm])

    // Calculate pagination
    const totalPages = Math.ceil(filteredPets.length / itemsPerPage)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = filteredPets.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const handleAddPet = () => {
        if (newPetName.trim()) {
            // const newId = (...animals.map((animal) => animal.animalNumber)) + 1
            // setPets([...pets, { id: newId, name: newPetName.trim() }])
            // setNewPetName("")
            // setIsAddingPet(false)
        }
    }

    // Generate page numbers
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const handleClickAnimal = async (animal: Animal) => {
        setActivePetId(animal.animalNumber)
        redirect(`/tribal-card/${animal.animalNumber}/general-data`)
    }

    return (
        <div className="w-full max-w-xs mx-auto">
            <h2 className="text-xl font-semibold mb-4">Список быков</h2>

            <div className="flex gap-2 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Поиск..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Button variant='default' onClick={() => setIsAddingPet(true)}>
                    <Plus className="h-4 w-4 mr-1" />
                    Добавить
                </Button>
            </div>
            <div className="flex flex-col justify-between min-h-[75vh]">

                <ul className="max-h-[75vh] min-h-[75vh] overflow-y-auto space-y-2 rounded-md border p-2">
                    {currentItems.length > 0 ? (
                        currentItems.map((pet) => (
                            <li
                                key={pet.animalNumber}
                                onClick={() => handleClickAnimal(pet)}
                                className={`flex items-center p-1 transition-colors hover:bg-muted cursor-pointer rounded-md ${activePetId === pet.animalNumber ? "bg-primary/10 border-l-3 border-primary/80" : ""
                                    }`}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
                                    <PawPrint className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-medium text-primary">{pet.animalNumber}</span>
                                    <span className="text-sm text-muted-foreground">{pet.animalName ? pet.animalName : "Без клички"}</span>
                                </div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="flex flex-col ml-auto">
                                            <Info className="h-5 w-5 text-primary" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>Ферма: МТФ "ВАНЕЛЕВИЧИ"</p>
                                        <p>Группа: ДРАКО В.П.</p>
                                    </TooltipContent>
                                </Tooltip>

                            </li>
                        ))
                    ) : (
                        <li className="p-4 text-center text-muted-foreground">No pets found matching "{searchTerm}"</li>
                    )}
                </ul>

                {/* Pagination */}
                {filteredPets.length > 0 && (
                    <div className="flex items-center justify-between mt-4">
                        {/* <div className="text-sm text-muted-foreground">
                            Показано {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredPets.length)} из {filteredPets.length}
                        </div> */}
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="h-8 w-8"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                <span className="sr-only">Previous page</span>
                            </Button>

                            <div className="flex items-center">
                                {pageNumbers.map((number) => (
                                    <Button
                                        key={number}
                                        variant={currentPage === number ? "default" : "outline"}
                                        size="icon"
                                        onClick={() => handlePageChange(number)}
                                        className="h-8 w-8 mx-0.5"
                                    >
                                        {number}
                                    </Button>
                                ))}
                            </div>

                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="h-8 w-8"
                            >
                                <ChevronRight className="h-4 w-4" />
                                <span className="sr-only">Next page</span>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            <Dialog open={isAddingPet} onOpenChange={setIsAddingPet}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Pet</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-2">
                        <div className="space-y-2">
                            <Label htmlFor="pet-name">Pet Name</Label>
                            <Input
                                id="pet-name"
                                value={newPetName}
                                onChange={(e) => setNewPetName(e.target.value)}
                                placeholder="Enter pet name"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddingPet(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleAddPet}>Add Pet</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

