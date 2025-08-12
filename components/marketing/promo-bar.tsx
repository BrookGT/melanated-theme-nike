"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const STORAGE_KEY = "mp_promo_dismissed_v4";

export default function PromoBar() {
    const [show, setShow] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        try {
            const dismissed = window.localStorage.getItem(STORAGE_KEY) === "1";
            if (dismissed) setShow(false);
        } catch {}
    }, []);

    function dismiss() {
        try {
            window.localStorage.setItem(STORAGE_KEY, "1");
        } catch {}
        setShow(false);
    }

    const shouldRender = show || !mounted;

    return (
        <AnimatePresence initial={false}>
            {shouldRender ? (
                <motion.div
                    initial={{ y: -16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative border-b bg-gradient-to-r from-[#800080] via-[#CBAACB] to-[#008080]"
                    role="region"
                    aria-label="Promotion: First purchase discount"
                >
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -left-1 w-1/3 opacity-25 mix-blend-screen"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.7) 50%, rgba(255,255,255,0) 100%)",
                        }}
                        initial={{ x: "-30%" }}
                        animate={{ x: ["-30%", "130%"] }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />

                    <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                        <div className="flex min-w-0 items-center gap-3 text-white">
                            <span className="relative hidden h-7 w-10 sm:inline-flex">
                                <Image
                                    src="/crown.png"
                                    alt=""
                                    fill
                                    className="object-contain"
                                    aria-hidden="true"
                                />
                            </span>
                            <p className="truncate text-xs font-semibold tracking-wide sm:text-sm">
                                First Purchase 10% Off
                                <span className="mx-2 opacity-80">—</span>
                                Use code{" "}
                                <span className="rounded bg-white/20 px-1.5 py-0.5 font-bold tracking-widest">
                                    REIGN10
                                </span>
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href="#"
                                className="group inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60"
                            >
                                Shop Now
                                <ArrowRight className="ml-1 h-3.5 w-3.5 -translate-x-0.5 transition group-hover:translate-x-0" />
                            </a>

                            <button
                                type="button"
                                onClick={dismiss}
                                aria-label="Dismiss promotion"
                                className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
