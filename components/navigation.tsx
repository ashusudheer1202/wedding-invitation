"use client"
import { Heart, Home, Calendar, Camera, BookOpen } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  {href:"#story",label:"Our Story",icon : BookOpen},
  { href: "#details", label: "Details", icon: Calendar },
  { href: "#gallery", label: "Gallery", icon: Camera },
]

export function Navigation() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity"
          >
            <Heart className="h-6 w-6 fill-current" />
            <span className="font-bold text-lg">Ashlesha & Sudheer</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="p-2 rounded-md transition-colors hover:bg-muted text-muted-foreground"
                >
                  <Icon className="h-5 w-5" />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
