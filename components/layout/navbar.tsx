"use client";

import * as React from "react";
import Link from "next/link";
import { NavLinks } from "./nav-links";

export function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-sm border border-border shadow-lg rounded-full w-[90%] max-w-4xl">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        {/* <Tennis className="h-8 w-8 text-primary" /> */}
                        <span className="font-bold text-xl">Covalent Project</span>
                    </Link>
                </div>
                <NavLinks />
            </div>
        </nav>
    );
}