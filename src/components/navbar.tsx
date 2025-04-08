"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { NavItem, navigation } from "@/lib/navigation"
import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"
import { Menu, X } from "lucide-react"

export function Navbar() {
    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            if (scrollPosition > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-md"
                : "bg-white border-b border-gray-200"
                }`}
        >
            <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
                <Link href="/" className="flex items-cente z-10 pt-4">
                    <div className="relative h-64 w-48 sm:w-64">
                        <Image src="/vi-logo.png" alt="VAIDEHI INSTITUTE" fill className="object-contain" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 justify-end">
                    <DesktopNav items={navigation} />
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 hover:bg-primary/10 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[85%] max-w-sm p-0 border-l shadow-lg">
                        <Link href="/" className="flex items-cente z-10 pt-4">
                            <div className="relative h-64 w-48 sm:w-64">
                                <Image src="/vi-logo.png" alt="VAIDEHI INSTITUTE" fill className="object-contain" />
                            </div>
                        </Link>
                        <MobileNav items={navigation} setOpen={setOpen} />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
} 