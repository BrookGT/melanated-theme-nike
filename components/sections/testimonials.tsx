"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Testimonial = {
    image: string;
    alt: string;
    name: string;
    role: string;
    quote: string;
    rating?: number;
};

const testimonials: Testimonial[] = [
    {
        image: "/assets/0014.jpg",
        alt: "Smiling girl in lavender set on runway",
        name: "Aaliyah M.",
        role: "Mom & Customer",
        quote: "Every piece makes my daughters stand taller. The quality is unreal and the details feel royal.",
        rating: 5,
    },
    {
        image: "/assets/006.jpg",
        alt: "Two girls outdoors in lavender and cream",
        name: "Nia J.",
        role: "College Student",
        quote: "I love the message. These fits are comfortable, premium, and make me feel like a queen.",
        rating: 5,
    },
    {
        image: "/assets/004.jpg",
        alt: "Three girls with crowns on stage",
        name: "Coach Renee",
        role: "Youth Coach",
        quote: "The girls on our team wear MP to practice and beyond—confidence on and off the court.",
        rating: 5,
    },
    {
        image: "/assets/0016.jpg",
        alt: "Woman walking at sunset in black set",
        name: "Danielle P.",
        role: "Stylist",
        quote: "From packaging to fabric, everything says premium. We're lifelong fans.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section
            aria-labelledby="testimonials-title"
            className="py-12 sm:py-16"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <p className="text-xs font-semibold tracking-widest text-[#008080]">
                        TESTIMONIALS
                    </p>
                    <h2
                        id="testimonials-title"
                        className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl"
                    >
                        Loved by the Royal Community
                    </h2>
                </div>

                <motion.div
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.08 } },
                    }}
                >
                    {testimonials.map((t, idx) => (
                        <motion.figure
                            key={idx}
                            className="relative rounded-2xl bg-gradient-to-br from-[#FFD700] via-[#CBAACB] to-[#008080] p-[1px]"
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.55 },
                                },
                            }}
                        >
                            <div className="relative h-full w-full rounded-2xl bg-white/95 p-5 shadow-sm backdrop-blur">
                                <div className="flex items-center gap-3">
                                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-[#FFD700]">
                                        <Image
                                            src={t.image || "/placeholder.svg"}
                                            alt={t.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-semibold">
                                                {t.name}
                                            </h3>
                                            <div className="relative h-4 w-7">
                                                <Image
                                                    src="/crown.png"
                                                    alt=""
                                                    fill
                                                    className="object-contain"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Quote className="mb-2 h-4 w-4 text-[#800080]" />
                                    <blockquote className="text-sm leading-relaxed text-foreground/90">
                                        {t.quote}
                                    </blockquote>
                                </div>

                                {typeof t.rating === "number" ? (
                                    <div className="mt-4 flex items-center gap-0.5">
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-4 w-4"
                                                    style={{
                                                        fill:
                                                            i < (t.rating || 0)
                                                                ? "#FFD700"
                                                                : "transparent",
                                                        stroke: "#FFD700",
                                                    }}
                                                />
                                            )
                                        )}
                                    </div>
                                ) : null}
                            </div>
                        </motion.figure>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
