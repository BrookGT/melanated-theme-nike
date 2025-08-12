"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stories = [
    {
        title: "Sisterhood on Stage",
        image: "/assets/004.jpg",
        href: "#",
        eyebrow: "Editorial",
        alt: "Three girls with crowns on stage",
    },
    {
        title: "Runway Royalty",
        image: "/assets/0014.jpg",
        href: "#",
        eyebrow: "Lifestyle",
        alt: "Girl in lavender set on runway",
    },
];

export default function EditorialStories() {
    return (
        <section
            id="stories"
            aria-labelledby="stories-title"
            className="py-12 sm:py-16"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-[#008080]">
                            STORIES
                        </p>
                        <h2
                            id="stories-title"
                            className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl"
                        >
                            Culture. Community. Celebration.
                        </h2>
                    </div>
                    <Link
                        href="#"
                        className="text-sm font-medium underline-offset-4 hover:underline"
                    >
                        Read More
                    </Link>
                </div>

                <motion.div
                    className="mt-6 grid gap-6 sm:grid-cols-2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.08 } },
                    }}
                >
                    {stories.map((s) => (
                        <motion.div
                            key={s.title}
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6 },
                                },
                            }}
                            className="group relative overflow-hidden rounded-2xl"
                        >
                            <Link href={s.href} className="block">
                                <div className="relative aspect-[16/10]">
                                    <Image
                                        src={s.image || "/placeholder.svg"}
                                        alt={s.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                </div>
                                <div className="pointer-events-none absolute inset-0 flex items-end p-6">
                                    <div className="max-w-sm">
                                        <p className="text-xs font-semibold uppercase tracking-widest text-[#FFD700]">
                                            {s.eyebrow}
                                        </p>
                                        <h3 className="mt-1 text-xl font-semibold text-white">
                                            {s.title}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
