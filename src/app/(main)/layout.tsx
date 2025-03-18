'use client'
import { redirect } from "next/navigation";


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // const user = localStorage.getItem('user')
    // if(!user) {
    //     redirect('/login')
    // }
    return (
        <div>
            
            {children}
        </div>
    )
}