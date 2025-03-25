'use client'

import { Badge } from "@/shared/ui/badge"
import { CardContent, CardDescription } from "@/shared/ui/card"
import { Separator } from "@/shared/ui/separator"
import { TabsContent } from "@/shared/ui/tabs"
import { BadgeIcon } from "lucide-react"


export default function AnimalGeneralDataPage() {

    return (
        <TabsContent value="general" className="mx-50 p-1">
            <CardContent className="space-y-4 py-6 border-1 rounded-xl">
                <CardDescription className="text-lg text-chart-3">Общие данные:</CardDescription>
                <div className="flex flex-wrap gap-2">
                    <Badge variant='outline' className="border-chart-2/50">
                        <BadgeIcon />
                        BY791502341001
                    </Badge>
                    <Badge variant='outline' className="border-chart-2/50">Голштинская</Badge>
                    <Badge variant='outline' className="border-chart-2/50">B&W</Badge>
                </div>

                <Separator />

                <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Индивидуальный номер</div>
                        <div className="text-sm">{'BY791502341001' }</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Рабочий номер</div>
                        <div className="text-sm">{'100970' }</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Порода</div>
                        <div className="text-sm">{'Голтшинская' }</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Масть</div>
                        <div className="text-sm">{'B&W' }</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Дата рождения</div>
                        <div className="text-sm">{'10.05.2023'}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Дата поступления</div>
                        <div className="text-sm">{`02.03.2024-РУСП ВИТЕБСКОЕ ПП` }</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Дата выбытия</div>
                        <div className="text-sm">{'09.05.2024' }</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Место рождения</div>
                        <div className="text-sm">{'СПК АГРОКОМБ-Т СНОВ' }</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Принадлежит</div>
                        <div className="text-sm">{'РУСП МИНСКОЕ ПП' }</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Комплекс</div>
                        <div className="text-sm">{'4' }</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Семя</div>
                        <div className="text-sm">{'11335' }</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Линия</div>
                        <div className="text-sm">{'Р.СОВ.198998'}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 hover:[&>div:nth-child(2)]:text-blue-500">
                        <div className="text-md font-medium">Ветвь</div>
                        <div className="text-sm">{'ПОНИ ФАРМ АРЛИНДА ЧИФА 1427381' }</div>
                    </div>
                </div>

            </CardContent>
        </TabsContent>
    )
}