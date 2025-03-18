import { LoginForm } from "@/shared/components/login-form";
import { Button } from "@/shared/ui/button";
import { Copyright, GalleryVerticalEnd, PawPrint } from "lucide-react";


export default function LoginPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="https://mshp.gov.by/ru" className="flex items-center gap-3 font-medium">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <PawPrint className="size-7" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="">ИС ПЛЕМДЕЛО КРС</h2>
                            <p className=" text-sm/6 text-gray nowrap">Министерство сельского хозяйства и продовольствия Республики Беларусь</p>
                            {/* <h2 className="text-gray-900">Министерство сельского хозяйства и продовольствия</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">ИС ПЛЕМДЕЛО КРС</p> */}
                        </div>
                    </a>

                </div>

                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    
                    <h3 className="text-sm font-bold">© УП ГИВЦ Минсельхозпрода {new Date().getFullYear()}</h3>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <img
                    src="/next.svg"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}