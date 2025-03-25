import { CardContent } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { TabsContent } from "@/shared/ui/tabs";
import { Calendar, MapPin } from "lucide-react";



export default function LineagePage() {
    return (
        <TabsContent value="origin" className="m-0">
            <CardContent className="space-y-4 pt-6 ">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Origin Information</span>
                </div>

                <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2 hover:bg-chart-5/10">
                        <div className="text-sm font-medium">Birthplace</div>
                        <div className="text-sm">{'data'}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium">Acquired Date</div>
                        <div className="text-sm">{'data'}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium">Source</div>
                        <div className="text-sm">{'data'}</div>
                    </div>
                </div>

                <Separator />

                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Registration Details</span>
                </div>

                <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium">Microchip ID</div>
                        <div className="text-sm">{'data' }</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium">Registration #</div>
                        <div className="text-sm">{'data' }</div>
                    </div>
                </div>
            </CardContent>
        </TabsContent> 
    )
}