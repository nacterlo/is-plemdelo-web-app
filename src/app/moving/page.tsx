'use client'
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/shared/ui/drawer";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { Separator } from "@/shared/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import { ArrowLeftRightIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsLeftRightIcon, ChevronsRightIcon, FileOutputIcon, HandCoinsIcon, InfoIcon, PawPrint, WeightIcon, X } from "lucide-react";
import { useState } from "react";
import { CalendarIcon } from "lucide-react"
import { cn } from "@/shared/lib/css";
import { Calendar } from "@/shared/ui/calendar";
import { format } from "date-fns";
import { toast } from "sonner";

interface TransferListProps {
    leftTitle?: string
    rightTitle?: string
    leftItems?: string[]
    rightItems?: string[]
    onChange?: (left: string[], right: string[]) => void
}

export default function MovingPage({
    leftTitle = "Откуда:",
    rightTitle = "Куда:",
    leftItems: initialLeftItems = ["BY79175021341001", "BY7915023341001", "BY79150235641001", "BY7912502341001", "BY7915021341001", "BY791502341002", "BY791502341003", "BY791502341004", "BY791502341005", "BY791502341006", "BY791502341007",],
    rightItems: initialRightItems = [],
    onChange,
}: TransferListProps) {

    const [leftItems, setLeftItems] = useState<string[]>(initialLeftItems)
    const [rightItems, setRightItems] = useState<string[]>(initialRightItems)
    const [leftChecked, setLeftChecked] = useState<string[]>([])
    const [rightChecked, setRightChecked] = useState<string[]>([])


    const handleToggleAll = (items: string[], setChecked: React.Dispatch<React.SetStateAction<string[]>>) => {
        if (items.length === 0) return

        const allChecked =
            items.length ===
            items.filter((item) => (setChecked === setLeftChecked ? leftChecked.includes(item) : rightChecked.includes(item)))
                .length

        if (allChecked) {
            setChecked([])
        } else {
            setChecked([...items])
        }
    }

    const handleToggle = (item: string, setChecked: React.Dispatch<React.SetStateAction<string[]>>) => {
        const currentChecked = setChecked === setLeftChecked ? leftChecked : rightChecked
        const isChecked = currentChecked.includes(item)

        if (isChecked) {
            setChecked(currentChecked.filter((i) => i !== item))
        } else {
            setChecked([...currentChecked, item])
        }
    }

    const handleMoveRight = () => {
        if (leftChecked.length === 0) return

        const newRightItems = [...rightItems, ...leftChecked]
        const newLeftItems = leftItems.filter((item) => !leftChecked.includes(item))

        setRightItems(newRightItems)
        setLeftItems(newLeftItems)
        setLeftChecked([])

        onChange?.(newLeftItems, newRightItems)
    }

    const handleMoveLeft = () => {
        if (rightChecked.length === 0) return

        const newLeftItems = [...leftItems, ...rightChecked]
        const newRightItems = rightItems.filter((item) => !rightChecked.includes(item))

        setLeftItems(newLeftItems)
        setRightItems(newRightItems)
        setRightChecked([])

        onChange?.(newLeftItems, newRightItems)
    }
    const customList = (
        title: string,
        items: string[],
        checked: string[],
        setChecked: React.Dispatch<React.SetStateAction<string[]>>,
    ) => (
        <Card className="w-full h-full md:w-92 max-h-full">
            <CardHeader className="pb-3 static" >
                <CardTitle className="text-lg font-medium">
                    <div className="w-full flex flex-col gap-2">
                        {title}
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder='Выберите ферму' />
                                {/* <Button className="just">weqeqw</Button> */}
                            </SelectTrigger>
                            <SelectContent onChange={(e) => console.log('qweqweqw')}>
                                {/* <Button className="w-full h-7 cursor-pointer">новая ферма</Button> */}
                                <SelectItem value="farm1">ферма 1</SelectItem>
                                <SelectItem value="farm2">ферма 2</SelectItem>
                                <SelectItem value="farm3">ферма 3</SelectItem>
                                <SelectItem value="farm4">ферма 4</SelectItem>
                                <SelectItem value="farm5">ферма 5</SelectItem>
                            </SelectContent>

                        </Select>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder='Выберите группу' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="group1">группа 1</SelectItem>
                                <SelectItem value="group2">группа 2</SelectItem>
                                <SelectItem value="group3">группа 3</SelectItem>
                                <SelectItem value="group4">группа 4</SelectItem>
                                <SelectItem value="group5">группа 5</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                {items.length > 0 ? (
                    <div className="m-1">
                        <div className="flex items-center px-4 py-1 border-b ">
                            <div className="text-md font-semibold">Список животных</div>
                        </div>
                        <ul className="max-h-[280px] cursor-pointer overflow-auto">
                            {items.map((item, index) => (
                                <li key={index} className="cursor-pointer flex items-center px-4 py-2 hover:bg-muted/50">
                                    <Checkbox
                                        id={`${title}-${index}`}
                                        checked={checked.includes(item)}
                                        onCheckedChange={() => handleToggle(item, setChecked)}
                                        className="mr-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                    />
                                    <label
                                        htmlFor={`${title}-${index}`}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full"
                                    >
                                        <div className="flex justify-between">
                                            {item}
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <InfoIcon size={16} color="#ff880088" />
                                                    <TooltipContent side="top">
                                                        <p>Дата рождения: 20.05.2022</p>
                                                        <p>Порода: Голштинская</p>
                                                    </TooltipContent>
                                                </TooltipTrigger>
                                            </Tooltip>
                                        </div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-32 text-muted-foreground">Список пуст</div>
                )}
            </CardContent>
        </Card>
    )
    const [activeTab, setActiveTab] = useState("between-groups")
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date>()
    const [calendarOpen, setCalendarOpen] = useState(false)

    const handleSave = () => {
        // Handle save logic here
        console.log("Saved date:", date)
        toast("Перемещение успешно сохранено", {
            description: 'Вторник, 26 марта, 2025 в 15:00',
            
        })
        setOpen(false)
    }
    return (
        <div className="min-h-[100vh] flex-1 rounded-xl  md:min-h-min my-1 mx-50 p-1">
            <Card className="h-full shadow-md shadow-accent-foreground/50">
                <CardHeader className="relative">
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-4"
                    >
                        <X className="h-4 w-4" />
                    </Button> */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent">
                            <ArrowLeftRightIcon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">Перемещение животных</CardTitle>
                            {/* <CardDescription>Кличка: {'data'}</CardDescription> */}
                        </div>
                    </div>
                </CardHeader>
                <Separator />
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-1">
                    <div className="px-6">
                        <TabsList className="w-full grid grid-cols-6">
                            <TabsTrigger value="between-groups">Из группы в группу</TabsTrigger>
                            <TabsTrigger value="withdrawal">Выбытие</TabsTrigger>
                            <TabsTrigger value="plemsell">Племпродажа</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="between-groups">
                        <CardContent className="w-full flex items-center justify-center">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                {customList(leftTitle, leftItems, leftChecked, setLeftChecked)}
                                <div className="flex md:flex-col gap-2 py-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleMoveRight}
                                        disabled={leftChecked.length === 0}
                                        aria-label="Move selected items to the right list"
                                    >
                                        <ChevronsRightIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleMoveRight}
                                        disabled={leftChecked.length === 0}
                                        aria-label="Move selected items to the right list"
                                    >
                                        <ChevronRightIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleMoveLeft}
                                        disabled={rightChecked.length === 0}
                                        aria-label="Move selected items to the left list"
                                    >
                                        <ChevronLeftIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleMoveLeft}
                                        disabled={rightChecked.length === 0}
                                        aria-label="Move selected items to the left list"
                                    >
                                        <ChevronsLeftIcon className="h-4 w-4" />
                                    </Button>
                                </div>

                                {customList(rightTitle, rightItems, rightChecked, setRightChecked)}
                            </div>
                        </CardContent>
                    </TabsContent>
                    <TabsContent value="withdrawal">
                        <CardContent className="w-full flex items-center justify-center">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                {customList(leftTitle, leftItems, leftChecked, setLeftChecked)}
                                <div className="flex md:flex-col gap-2 py-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleMoveRight}
                                        disabled={leftChecked.length === 0}
                                        aria-label="Move selected items to the right list"
                                    >
                                        <ChevronsRightIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleMoveRight}
                                        disabled={leftChecked.length === 0}
                                        aria-label="Move selected items to the right list"
                                    >
                                        <ChevronRightIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleMoveLeft}
                                        disabled={rightChecked.length === 0}
                                        aria-label="Move selected items to the left list"
                                    >
                                        <ChevronLeftIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleMoveLeft}
                                        disabled={rightChecked.length === 0}
                                        aria-label="Move selected items to the left list"
                                    >
                                        <ChevronsLeftIcon className="h-4 w-4" />
                                    </Button>
                                </div>

                                {customList(rightTitle, rightItems, rightChecked, setRightChecked)}
                            </div>
                        </CardContent>
                    </TabsContent>
                </Tabs>
                <Separator />
                <CardFooter className="flex justify-end gap-2">
                    <Button size='sm' variant='outline'>Отменить</Button>
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button size='sm' className="bg-chart-2">Переместить</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px]">
                            <DialogHeader>
                                <DialogTitle>Перемещение</DialogTitle>
                                <DialogDescription>Укажите дату перемещения животных.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="date" className="">
                                        Дата перемещения
                                    </Label>
                                    <div className="col-span-3 relative">
                                        <div
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                                            onClick={() => setCalendarOpen(true)}
                                        >
                                            <span className={cn("flex-grow", !date && "text-muted-foreground")}>
                                                {/* {date ? date.getDate() : 'Укажите дату'} */}
                                                {date ? format(date, "dd.MM.yyyy") : "Укажите дату"}
                                            </span>
                                            <CalendarIcon className="h-4 w-4 opacity-50" />
                                        </div>
                                        {calendarOpen && (
                                            <div className="absolute top-[calc(100%+5px)] left-0 z-10 rounded-md border bg-popover p-1 shadow-md">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={(newDate) => {
                                                        setDate(newDate)
                                                        setCalendarOpen(false)
                                                    }}
                                                    initialFocus
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" onClick={handleSave}>
                                    Подтвердить
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                </CardFooter>


            </Card>
        </div >
    )
}