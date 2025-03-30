"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/about", label: "About Us", variant: "ghost" },
    { href: "/dashboard", label: "Dashboard", variant: "ghost" },
    { href: "/signin", label: "Sign In", variant: "ghost" },
    { href: "/contact", label: "Contact Us", variant: "default" },
] as const;

export function NavLinks() {
    const pathname = usePathname();

    return (
        <div className="hidden md:block">
            <div className="flex items-center space-x-4">
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        <Button
                            variant={link.variant as "ghost" | "default"}
                            className={pathname === link.href ? "bg-primary/10" : ""}
                        >
                            {link.label}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}