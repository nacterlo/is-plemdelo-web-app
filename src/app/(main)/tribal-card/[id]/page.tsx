'use client'
import { useParams } from "next/navigation"





export default function AnimalGeneralData() {
    const { id } = useParams()
    return (
        <>{id}</>
    )
}