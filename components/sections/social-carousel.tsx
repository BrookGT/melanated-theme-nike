"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Pause, Play } from "lucide-react";

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
    const [paused, setPaused] = useState(false);
    const trackRef = useRef<HTMLDivElement | null>(null);
    // Duplicate the list to create a seamless loop
    const loopImages = useMemo(() => [...images, ...images], []);

    return (
        <section
            aria-labelledby="community"
            className="py-12 sm:py-16"
            style={{
                // Subtle brand gradient that adapts with screen size
                background:
                    "linear-gradient(180deg, rgba(128,0,128,0.07), rgba(0,0,0,0) 30%), linear-gradient(0deg, rgba(255,215,0,0.04), rgba(0,0,0,0) 50%)",
            }}
        >
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

                <div
                    className="mt-6 w-full overflow-hidden rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onFocus={() => setPaused(true)}
                    onBlur={() => setPaused(false)}
                >
                    <div
                        ref={trackRef}
                        className="flex w-[200%] gap-4"
                        style={{
                            animation: paused
                                ? undefined
                                : "scroll-x 30s linear infinite",
                        }}
                    >
                        {loopImages.map((src, i) => (
                            <div
                                key={i}
                                className="group relative h-64 w-48 shrink-0 overflow-hidden rounded-xl"
                            >
                                <Image
                                    src={src || "/placeholder.svg"}
                                    alt={
                                        "Community post " +
                                        ((i % images.length) + 1)
                                    }
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 flex items-center justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setPaused((p) => !p)}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-3 py-1 text-xs text-foreground backdrop-blur transition hover:bg-black/20"
                            aria-pressed={paused}
                            aria-label={
                                paused ? "Play carousel" : "Pause carousel"
                            }
                        >
                            {paused ? (
                                <>
                                    <Play className="h-3.5 w-3.5" /> Play
                                </>
                            ) : (
                                <>
                                    <Pause className="h-3.5 w-3.5" /> Pause
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
