"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className="mt-10 border-t text-white"
            style={{
                background:
                    "radial-gradient(1200px 600px at 20% -20%, rgba(203,170,203,0.18), transparent), linear-gradient(135deg,#150a26 0%, #2a0b3a 50%, #053f3f 100%)",
            }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="h-px w-full bg-gradient-to-r from-[#FFD700]/50 via-transparent to-[#FFD700]/30" />

                <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="relative h-8 w-8">
                                <Image
                                    src="/logo.png"
                                    alt="Melanated Princess logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Our Mission
                            </h3>
                        </div>
                        <p className="mt-3 max-w-prose text-sm text-white/80">
                            Melanated Princess celebrates the royalty within
                            every Black girl and woman—through premium design,
                            bold storytelling, and community. Wear your crown
                            daily.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold">Quick Links</h4>
                        <ul className="mt-3 grid gap-2 text-sm">
                            <li>
                                <Link
                                    className="text-white/80 underline-offset-4 hover:text-white hover:underline"
                                    href="#"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-white/80 underline-offset-4 hover:text-white hover:underline"
                                    href="#"
                                >
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-white/80 underline-offset-4 hover:text-white hover:underline"
                                    href="#"
                                >
                                    Collections
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-white/80 underline-offset-4 hover:text-white hover:underline"
                                    href="#stories"
                                >
                                    Stories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-white/80 underline-offset-4 hover:text-white hover:underline"
                                    href="#"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold">Contact</h4>
                        <ul className="mt-3 grid gap-2 text-sm text-white/80">
                            <li>support@melanatedprincess.com</li>
                            <li>Mon–Fri, 9am–5pm</li>
                        </ul>
                        <div className="mt-4 h-5 w-10 opacity-90">
                            <div className="relative h-5 w-10">
                                <Image
                                    src="/crown.png"
                                    alt=""
                                    fill
                                    className="object-contain"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6 text-xs text-white/70">
                    <div className="flex items-center justify-between">
                        <p>
                            &copy; {new Date().getFullYear()} Melanated
                            Princess. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-white">
                                Privacy
                            </Link>
                            <Link href="#" className="hover:text-white">
                                Terms
                            </Link>
                            <Link href="#" className="hover:text-white">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
