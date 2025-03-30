import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="w-full py-6 px-4 mt-auto">
            <div className="container mx-auto flex flex-col items-center justify-center text-center">
                {/* Logo */}
                <Link href="/" className="font-semibold text-xl mb-4">
                    The Covalent Project
                </Link>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-4">
                    <Link href="https://status.devmello.xyz" className="hover:text-foreground transition-colors">
                        Status
                    </Link>
                    <Link href="/contact" className="hover:text-foreground transition-colors">
                        Contact
                    </Link>
                    <Link href="/docs" className="hover:text-foreground transition-colors">
                        Docs
                    </Link>
                    <Link href="/api" className="hover:text-foreground transition-colors">
                        API
                    </Link>
                    {/* <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link> */}
                </nav>

                {/* Separator */}
                <Separator className="w-full max-w-[200px] my-4" />

                {/* Social Media Links */}
                <div className="flex justify-center gap-4 mb-4">
                    <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/pranav-yerramaneni-2938a9294/" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>

                {/* Copyright */}
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Pranav Yerramaneni. All rights reserved.
                </p>
            </div>
        </footer>
    );
}