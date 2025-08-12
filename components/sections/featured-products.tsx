"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Product = {
    id: string;
    name: string;
    price: string;
    image: string;
    alt: string;
    tag?: string;
};

const products: Product[] = [
    {
        id: "1",
        name: "Sisterhood Stage Crew",
        price: "$98",
        image: "/assets/004.jpg",
        alt: "Three girls with crowns on stage",
        tag: "New",
    },
    {
        id: "2",
        name: "Crown Studio Duo",
        price: "$96",
        image: "/assets/005.jpg",
        alt: "Two girls wearing crowns in studio",
    },
    {
        id: "3",
        name: "Signature Street Set",
        price: "$90",
        image: "/assets/006.jpg",
        alt: "Two girls outdoors in lavender and cream",
    },
    {
        id: "4",
        name: "Sunset Royalty",
        price: "$88",
        image: "/assets/0016.jpg",
        alt: "Woman in black set walking at sunset",
    },
    {
        id: "5",
        name: "Lavender Runway",
        price: "$92",
        image: "/assets/0014.jpg",
        alt: "Girl in lavender set on runway",
    },
    {
        id: "6",
        name: "Stage Confidence",
        price: "$98",
        image: "/assets/004.jpg",
        alt: "Three girls with crowns on stage",
    },
    {
        id: "7",
        name: "Studio Elegance",
        price: "$96",
        image: "/assets/005.jpg",
        alt: "Two girls wearing crowns in studio",
    },
    {
        id: "8",
        name: "Urban Icons",
        price: "$90",
        image: "/assets/006.jpg",
        alt: "Two girls outdoors in lavender and cream",
    },
];

export default function FeaturedProducts() {
    return (
        <section aria-labelledby="featured-products" className="py-10 sm:py-12">
            <div className="mx-auto max-w-[100rem] px-0">
                <div className="flex items-end justify-between px-4 sm:px-6 lg:px-8">
                    <h2
                        id="featured-products"
                        className="text-2xl font-bold tracking-tight sm:text-3xl"
                    >
                        Featured
                    </h2>
                    <Link
                        href="#"
                        className="text-sm font-medium underline-offset-4 hover:underline"
                    >
                        Shop All
                    </Link>
                </div>

                <motion.div
                    className="mt-6 grid grid-cols-2 gap-px sm:gap-1 md:grid-cols-3 lg:grid-cols-4"
                    aria-label="Product grid"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.08 } },
                    }}
                >
                    {products.map((p) => (
                        <motion.article
                            key={p.id}
                            className="group relative isolate"
                            variants={{
                                hidden: { opacity: 0, y: 16 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <Link href="#" className="block">
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={p.image || "/placeholder.svg"}
                                        alt={p.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                                        style={{
                                            background:
                                                "linear-gradient(180deg, #FF00AA 0%, transparent 50%, #FFD700 100%)",
                                        }}
                                        aria-hidden="true"
                                    />
                                    {p.tag ? (
                                        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs font-semibold text-white">
                                            {p.tag}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-3">
                                    <div className="rounded-md bg-white/85 p-3 backdrop-blur transition-all duration-300 group-hover:bg-white">
                                        <h3 className="text-sm font-semibold">
                                            {p.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {p.price}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
