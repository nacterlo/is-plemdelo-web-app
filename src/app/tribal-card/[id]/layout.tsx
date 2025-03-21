'use client'
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from "@/shared/ui/card"
import { Separator } from "@/shared/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { X, PawPrint, MapPin, Calendar } from "lucide-react"
import { redirect } from "next/navigation"
import { use, useState } from "react"



export default function AnimalLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ id: string }>
}>) {
    const { id } = use(params)
    const [activeTab, setActiveTab] = useState("general")

    return (
        <div className="w-full h-full">
            <Card className="h-full">
                <CardHeader className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-4"
                        onClick={() => redirect("/tribal-card")}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                            <PawPrint className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">{id}</CardTitle>
                            <CardDescription>Кличка: {'data'}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <Separator />
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className="px-6">
                        <TabsList className="w-full grid grid-cols-6">
                            <TabsTrigger value="general" onClick={() => redirect(`/tribal-card/${id}/general-data`)}>Общие данные</TabsTrigger>
                            <TabsTrigger value="origin" onClick={() => redirect(`/tribal-card/${id}/genealogy`)}>Родословная</TabsTrigger>
                            <TabsTrigger value="weighting">Взвешивания</TabsTrigger>
                            <TabsTrigger value="tabs4">Линейный профиль</TabsTrigger>
                            <TabsTrigger value="tabs5">Оценка методом BLUP</TabsTrigger>
                            <TabsTrigger value="tabs5">Генетическая лаборатория</TabsTrigger>
                        </TabsList>
                    </div>
                    {children}
                </Tabs>
                {/* <Separator /> */}
                {/* <CardFooter className="flex justify-between gap-2 mx-auto my-auto">
                    <Button >Генетическая лаборатория</Button>
                    <Button >Оценка методом BLUP</Button>
                    <Button >Schedule Appointment</Button>
                    <Button >Schedule Appointment</Button>
                </CardFooter> */}
            </Card>

        </div>
    )
}