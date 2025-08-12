"use client";

import type React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    once?: boolean;
};

export function Reveal({
    children,
    className,
    delay = 0.05,
    y = 22,
    once = true,
}: RevealProps) {
    const variants: Variants = {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0 },
    };
    return (
        <motion.div
            className={cn(className)}
            initial="hidden"
            whileInView="show"
            viewport={{ once, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
