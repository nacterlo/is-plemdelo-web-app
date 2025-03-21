'use client'
import PetList from "@/features/animals/components/pet-list";
import { AppSidebar } from "@/shared/components/app-sidebar";
import { ThemeModeToogle } from "@/shared/components/theme-mode-toogle";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/shared/ui/breadcrumb";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/shared/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const renderBreadcrumItem = (item: string) => {
    switch (item) {
        case 'general-data':
            return 'Общие данные'
        case 'genealogy':
            return 'Родословная'
        case 'animals':
            return 'Животные'
        default:
            return 'Общие данные'
    }
}

export default function TribalCardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [breadcrumLink, setBreadcrumLink] = useState<string>('')
    const pathname = usePathname()
    console.log(pathname);
    const pathNames = pathname.split('/').splice(1, pathname.split('/').length - 1)
    console.log(pathNames);

    useEffect(() => {
        if (pathNames[0] === 'tribal-card') {
            setBreadcrumLink('Племкарточки')
        }
    }, [pathname])
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex justify-between mr-5 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        {breadcrumLink}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{renderBreadcrumItem(pathNames[pathNames.length - 1])}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <ThemeModeToogle />
                </header>
                <div className="flex flex-1 gap-4 p-4 pt-0">
                    <PetList />
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/20 md:min-h-min">
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}