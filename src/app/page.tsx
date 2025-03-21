'use client'
import Image from "next/image";
import { redirect } from "next/navigation";
export default function Home({
  params
}: {
  params: { user : string };
}) {

  redirect(`/tribal-card`);
}
