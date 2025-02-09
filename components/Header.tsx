"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold md:hidden">AZ RP Prison</span>
          <span className="text-2xl font-bold hidden md:inline">High Security Prison</span>
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            Про Тюрьму
          </Link>
          <Link href="/facilities" className="text-sm font-medium transition-colors hover:text-primary">
            Экскурсия по тюрьме
          </Link>
          <Link href="/visiting" className="text-sm font-medium transition-colors hover:text-primary">
          Информация для посетителей
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Контакты
          </Link>
          <ModeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              Про Тюрьму
            </Link>
            <Link href="/facilities" className="text-sm font-medium transition-colors hover:text-primary">
              Экскурсия по тюрьме
            </Link>
            <Link href="/visiting" className="text-sm font-medium transition-colors hover:text-primary">
              Информация для посетителей
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Контакты
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

