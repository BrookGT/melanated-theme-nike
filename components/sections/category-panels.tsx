"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Girls",
        color: "#CBAACB",
        image: "/assets/0014.jpg",
        alt: "Girl in lavender set on runway",
    },
    {
        title: "Women",
        color: "#008080",
        image: "/assets/0016.jpg",
        alt: "Woman in black set at sunset",
    },
    {
        title: "Accessories",
        color: "#FFD700",
        image: "/assets/005.jpg",
        alt: "Two girls wearing crowns in studio",
    },
];

export default function CategoryPanels() {
    return (
        <section aria-labelledby="shop-by-category" className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between">
                    <h2
                        id="shop-by-category"
                        className="text-2xl font-bold tracking-tight sm:text-3xl"
                    >
                        Shop by Category
                    </h2>
                    <Link
                        href="#"
                        className="text-sm font-medium underline-offset-4 hover:underline"
                    >
                        Explore Collections
                    </Link>
                </div>

                <motion.div
                    className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.09 } },
                    }}
                >
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.title}
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.55 },
                                },
                            }}
                        >
                            <Link
                                className="group relative block overflow-hidden rounded-xl"
                                href="#"
                            >
                                <div className="relative aspect-[16/10]">
                                    <Image
                                        src={cat.image || "/placeholder.svg"}
                                        alt={cat.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80"
                                        style={{
                                            backgroundColor: cat.color,
                                            opacity: 0.5,
                                        }}
                                        aria-hidden="true"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-end p-6">
                                    <h3 className="rounded-md bg-white/90 px-3 py-1.5 text-base font-semibold backdrop-blur">
                                        {cat.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
