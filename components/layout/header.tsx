"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "#", label: "Shop" },
    { href: "#", label: "New" },
    { href: "#", label: "Collections" },
    { href: "#stories", label: "Stories" },
    { href: "#", label: "About" },
];

export default function Header() {
    const [cartCount] = useState<number>(0);
    const [searchOpen, setSearchOpen] = useState<boolean>(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden"
                                aria-label="Open menu"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-80">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2 text-lg">
                                    <div className="relative h-6 w-6">
                                        <Image
                                            src="/logo.png"
                                            alt="Melanated Princess logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    Melanated Princess
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="mt-6 grid gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-base font-medium hover:underline underline-offset-4"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="mt-4">
                                    <Input
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <Link
                        href="/"
                        className="flex items-center gap-2"
                        aria-label="Melanated Princess Home"
                    >
                        <div className="relative h-8 w-8">
                            <Image
                                src="/logo.png"
                                alt="Melanated Princess logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm font-semibold tracking-wide">
                            Melanated Princess
                        </span>
                        <div className="relative ml-1 hidden h-4 w-7 sm:block">
                            <Image
                                src="/crown.png"
                                alt=""
                                fill
                                className="object-contain"
                                aria-hidden="true"
                            />
                        </div>
                    </Link>
                </div>

                <nav
                    className="hidden lg:flex items-center gap-6"
                    aria-label="Primary"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Search"
                            onClick={() => setSearchOpen((v) => !v)}
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                        {searchOpen && (
                            <div className="absolute right-0 mt-2 w-64 rounded-md border bg-background p-2 shadow-lg">
                                <Input
                                    placeholder="Search products"
                                    aria-label="Search products"
                                    autoFocus
                                />
                            </div>
                        )}
                    </div>
                    <Button variant="ghost" size="icon" aria-label="Account">
                        <User className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Cart"
                        className="relative"
                    >
                        <ShoppingCart className="h-5 w-5" />
                        <span
                            className={cn(
                                "absolute -right-1 -top-1 rounded-full bg-[#FF00AA] px-1.5 py-0.5 text-[10px] font-bold leading-none text-white",
                                cartCount === 0 && "hidden"
                            )}
                            aria-live="polite"
                        >
                            {cartCount}
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
