import Link from "next/link"
import { Facebook, Github, Instagram, Mail, Phone } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
export default function ContactPage() {
    return (
        <main className="flex items-center justify-center min-h-screen">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-muted-foreground font-medium">Contact us</h2>
                            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Get in touch</h1>
                        </div>

                        <p className="text-muted-foreground max-w-md">
                            Feel free to reach out to us for any inquiries, feedback, or support. We are here to help you with anything you need.
                        </p>

                        <div className="flex items-center gap-6 pt-4">
                            <Link href="#" aria-label="Facebook">
                                <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                            </Link>
                            <Link href="#" aria-label="GitHub">
                                <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                            </Link>
                            <Link href="#" aria-label="Dribbble">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                                    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                                    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-muted/30 rounded-lg p-6 space-y-6">
                        <Card className="border-0 shadow-none bg-transparent">
                            <CardContent className="p-0 flex items-start gap-4">
                                <div className="bg-background p-3 rounded-md">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium">Call us</h3>
                                    <Link href="tel:+14005006000" className="text-muted-foreground hover:text-foreground transition-colors">
                                        +1 400 500 600
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-none bg-transparent">
                            <CardContent className="p-0 flex items-start gap-4">
                                <div className="bg-background p-3 rounded-md">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium">Write an email</h3>
                                    <Link
                                        href="mailto:hello@example.com"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        covalent@devmello.xyz
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    )
}