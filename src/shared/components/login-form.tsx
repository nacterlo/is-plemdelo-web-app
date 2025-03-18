'use client'
import { cn } from "@/shared/lib/css"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip"
import { TooltipTrigger } from "@radix-ui/react-tooltip"
import { FormEvent } from "react"
import { redirect } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const handleSubmitLoginForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('user', 'user')
    redirect('/tribal-card')
  }

  return (
    <form onSubmit={handleSubmitLoginForm} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-xl font-bold">Войдите в свою учетную запись</h1>
        <p className="text-muted-foreground text-xs">
          Введите свой логин ниже, чтобы войти в учетную запись
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="login">Логин</Label>
          <Input id="login" type="text" placeholder="Логин" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Пароль</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Забыли пароль?
            </a>
          </div>
          <Input id="password" placeholder="Пароль" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Войти
        </Button>
      </div>
      <div className="text-center text-sm">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#" className="underline underline-offset-4">
                У Вас нет учетной записи?{" "}
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Обратитесь в ГИВЦ</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </form>
  )
}
