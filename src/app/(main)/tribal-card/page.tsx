'use client'
import { ListAnimals } from "@/features/animals/components/AnimalList";
import PetList from "@/features/animals/components/pet-list";
import { AppSidebar } from "@/shared/components/app-sidebar";
import { ThemeModeToogle } from "@/shared/components/theme-mode-toogle";
import { cn } from "@/shared/lib/css";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/shared/ui/breadcrumb";
import { navigationMenuTriggerStyle } from "@/shared/ui/navigation-menu";
import { ScrollArea } from "@/shared/ui/scroll-area";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/shared/ui/sidebar";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { Separator } from "@radix-ui/react-separator";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";



export default function TribalCardPage({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Позже
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Сейчас</BreadcrumbPage>
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