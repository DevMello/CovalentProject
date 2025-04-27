import type { Metadata } from "next"
import Image from "next/image"
import { DonationForm } from "@/components/sections/donation-form"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
    title: "Donate | The Covalent Project",
    description: "Support the next generation of scientific researchers through your donation",
}
export default function DonatePage() {
    const goalAmount = 50000
    const raisedAmount = 32750
    const donorsCount = 187
    const percentComplete = Math.round((raisedAmount / goalAmount) * 100)

    return (
        <div className="flex items-center justify-center min-h-screen">
            <main className="container py-12 px-4 md:py-16 lg:py-24">
                <div className="mx-auto max-w-5xl">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                            Support the Future of Science
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Your donation helps us empower the next generation of researchers with the resources, mentorship, and
                            community they need to drive scientific innovation.
                        </p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left Column - Why Donate */}
                        <div className="space-y-8">
                            {/* Fundraising Progress */}
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-baseline">
                                            <h2 className="text-2xl font-bold">Fundraising Goal</h2>
                                            <Badge variant="outline" className="text-base font-semibold">
                                                {percentComplete}% Complete
                                            </Badge>
                                        </div>

                                        <Progress value={percentComplete} className="h-3" />

                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-3xl font-bold">${raisedAmount.toLocaleString()}</p>
                                                <p className="text-muted-foreground">raised of ${goalAmount.toLocaleString()} goal</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold">{donorsCount}</p>
                                                <p className="text-muted-foreground">generous donors</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Why Donate */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold">Why Your Support Matters</h2>

                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src="/donate/collab.jpg"
                                        alt="Students working on a research project"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <p>
                                        The Covalent Project is dedicated to breaking down barriers in scientific research. Your donation
                                        directly supports:
                                    </p>

                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <div className="bg-primary/10 p-1 rounded-full mt-1 shrink-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-primary"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span>
                                                <strong>Research Grants</strong> for promising student projects that lack traditional funding
                                                sources
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="bg-primary/10 p-1 rounded-full mt-1 shrink-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-primary"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span>
                                                <strong>Mentorship Programs</strong> connecting students with experienced researchers and
                                                professionals
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="bg-primary/10 p-1 rounded-full mt-1 shrink-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-primary"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span>
                                                <strong>Lab Equipment and Supplies</strong> for schools and community research spaces
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="bg-primary/10 p-1 rounded-full mt-1 shrink-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-primary"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span>
                                                <strong>Workshops and Events</strong> that build skills and foster collaboration
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="bg-primary/10 p-1 rounded-full mt-1 shrink-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-primary"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span>
                                                <strong>Online Platform Development</strong> to connect our growing community of young researchers
                                            </span>
                                        </li>
                                    </ul>

                                    <p className="text-muted-foreground italic">
                                        As a 501(c)(3) nonprofit organization, all donations to The Covalent Project are tax-deductible.
                                    </p>
                                </div>

                                {/* Testimonial */}
                                <div className="bg-muted/30 p-6 rounded-lg border border-muted">
                                    <blockquote className="italic">
                                        &#34;The grant I received from The Covalent Project allowed me to pursue research that wouldn&#39;t have been
                                        possible otherwise. The mentorship and community support transformed my project and opened doors I
                                        never thought possible.&#34;
                                    </blockquote>
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium">Jamie Rodriguez</p>
                                            <p className="text-sm text-muted-foreground">High School Researcher, Class of 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Donation Form */}
                        <div>
                            <DonationForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
