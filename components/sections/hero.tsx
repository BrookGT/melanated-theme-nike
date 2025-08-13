"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
    image: string;
    headline: string;
    subhead?: string;
    ctaText: string;
    ctaHref: string;
    accent: string;
    align?: "left" | "center" | "right";
};

const SLIDES: Slide[] = [
    {
        image: "/assets/004.jpg",
        headline: "Crowns. Confidence. Community.",
        subhead: "Celebrate sisterhood in every color.",
        ctaText: "Explore the Drop",
        ctaHref: "#",
        accent: "#FFD700",
        align: "center",
    },
    {
        image: "/assets/005.jpg",
        headline: "Everyday Royalty",
        subhead: "Elevated essentials for bold self-expression.",
        ctaText: "Shop the Edit",
        ctaHref: "#",
        accent: "#008080",
        align: "left",
    },
    {
        image: "/assets/006.jpg",
        headline: "Iconic. Effortless.",
        subhead: "Lavender and cream—signature MP style.",
        ctaText: "Shop New Arrivals",
        ctaHref: "#",
        accent: "#FF00AA",
        align: "right",
    },
];

const AUTO_MS = 5000;

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const total = SLIDES.length;

    const goTo = useCallback(
        (i: number) => setIndex((i + total) % total),
        [total]
    );
    const next = useCallback(() => goTo(index + 1), [goTo, index]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);

    useEffect(() => {
        if (paused) return;
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % total);
        }, AUTO_MS);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [paused, total]);

    const current = useMemo(() => SLIDES[index], [index]);

    return (
        <section
            aria-labelledby="hero-title"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured collections"
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div
                className="relative aspect-[16/9] w-full min-h-[60svh] sm:min-h-[66svh] lg:min-h-[68svh]"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "ArrowRight") next();
                    if (e.key === "ArrowLeft") prev();
                }}
            >
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image
                            src={current.image || "/placeholder.svg"}
                            alt={current.headline}
                            fill
                            priority
                            className="object-cover lg:object-contain"
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(100% 60% at 10% 90%, rgba(0,0,0,0.45), transparent), linear-gradient(120deg, rgba(0,0,0,0.55), transparent 40%), radial-gradient(120% 60% at 90% 10%, rgba(255,215,0,0.08), transparent)",
                            }}
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 flex items-end">
                    <div className="mx-auto mb-10 w-full max-w-7xl px-4 sm:mb-16 sm:px-6 lg:mb-20 lg:px-8">
                        <motion.div
                            key={"content-" + index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.1,
                            }}
                            className={[
                                "max-w-xl text-white",
                                current.align === "center"
                                    ? "mx-auto text-center"
                                    : "",
                                current.align === "right"
                                    ? "ml-auto text-right"
                                    : "",
                            ].join(" ")}
                        >
                            <h1
                                id="hero-title"
                                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                            >
                                {current.headline}
                            </h1>
                            {current.subhead ? (
                                <p className="mt-4 text-sm sm:text-base text-white/85">
                                    {current.subhead}
                                </p>
                            ) : null}
                            <div
                                className={[
                                    "mt-6 flex items-center gap-3",
                                    current.align === "right"
                                        ? "justify-end"
                                        : "",
                                    current.align === "center"
                                        ? "justify-center"
                                        : "",
                                ].join(" ")}
                            >
                                <Button
                                    asChild
                                    className="h-11 rounded-full px-6 text-white"
                                    style={{ backgroundColor: current.accent }}
                                >
                                    <Link href={current.ctaHref}>
                                        {current.ctaText}
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    asChild
                                    className="h-11 rounded-full border-white/70 bg-white/10 px-6 text-white backdrop-blur hover:bg-white/20"
                                >
                                    <Link href="#stories">
                                        Discover the Story
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
                    <button
                        aria-label="Previous slide"
                        onClick={prev}
                        className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        aria-label="Next slide"
                        onClick={next}
                        className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>

                <div className="absolute bottom-4 left-1/2 z-[1] -translate-x-1/2">
                    <div className="flex items-center gap-3 rounded-full bg-black/40 px-3 py-2 text-white backdrop-blur">
                        {SLIDES.map((_, i) => (
                            <div
                                key={i}
                                className="h-1.5 w-12 overflow-hidden rounded-full bg-white/25"
                            >
                                {i === index ? (
                                    <motion.div
                                        key={index}
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{
                                            duration: AUTO_MS / 1000,
                                            ease: "linear",
                                        }}
                                        className="h-full bg-white"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <div
                                        className="h-full w-0 bg-white"
                                        aria-hidden="true"
                                    />
                                )}
                                <span className="sr-only">
                                    Slide {i + 1} of {SLIDES.length}{" "}
                                    {i === index ? "(active)" : ""}
                                </span>
                            </div>
                        ))}
                        <button
                            onClick={() => setPaused((p) => !p)}
                            aria-label={
                                paused ? "Play slideshow" : "Pause slideshow"
                            }
                            className="ml-1 grid h-6 w-6 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
                        >
                            {paused ? (
                                <Play className="h-3.5 w-3.5" />
                            ) : (
                                <Pause className="h-3.5 w-3.5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
