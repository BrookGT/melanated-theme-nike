"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Instagram } from "lucide-react";

const images = [
    "/assets/004.jpg",
    "/assets/005.jpg",
    "/assets/006.jpg",
    "/assets/0014.jpg",
    "/assets/0016.jpg",
    "/assets/004.jpg",
    "/assets/005.jpg",
    "/assets/006.jpg",
];

export default function SocialCarousel() {
    return (
        <section aria-labelledby="community" className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2
                            id="community"
                            className="text-2xl font-bold tracking-tight sm:text-3xl"
                        >
                            From the Community
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Tag your looks with{" "}
                            <span className="font-semibold text-[#800080]">
                                #MelanatedPrincess
                            </span>
                        </p>
                    </div>
                    <Button
                        asChild
                        variant="outline"
                        className="rounded-full bg-transparent"
                    >
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Follow on Instagram"
                        >
                            <Instagram className="mr-2 h-4 w-4" />
                            Follow
                        </a>
                    </Button>
                </div>

                <ScrollArea className="mt-6 w-full">
                    <div className="flex w-max gap-4">
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className="group relative h-64 w-48 shrink-0 overflow-hidden rounded-xl"
                            >
                                <Image
                                    src={src || "/placeholder.svg"}
                                    alt={"Community post " + (i + 1)}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </section>
    );
}
