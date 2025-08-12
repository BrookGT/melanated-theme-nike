"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<string | null>(null);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setStatus("Please enter a valid email.");
            return;
        }
        setStatus("Thanks for joining! Check your inbox for confirmation.");
        setEmail("");
    }

    return (
        <section aria-labelledby="signup" className="py-12 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-[#800080] via-[#CBAACB] to-[#008080] p-6 sm:p-10">
                    <div
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.2),transparent_40%)]"
                        aria-hidden="true"
                    />
                    <div className="relative grid items-center gap-6 sm:grid-cols-2">
                        <div>
                            <h2
                                id="signup"
                                className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
                            >
                                Stay in the Royal Loop
                            </h2>
                            <p className="mt-2 text-sm text-white/90">
                                Get new drops, community stories, and exclusive
                                offers in your inbox.
                            </p>
                        </div>
                        <form
                            onSubmit={onSubmit}
                            className="flex w-full max-w-md items-center gap-2"
                        >
                            <Input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                aria-label="Email address"
                                className="bg-white"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button
                                type="submit"
                                className="bg-[#FF00AA] text-white hover:bg-[#d9008f]"
                            >
                                Join
                            </Button>
                        </form>
                    </div>
                    {status ? (
                        <p className="relative mt-3 text-sm font-medium text-white">
                            {status}
                        </p>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
