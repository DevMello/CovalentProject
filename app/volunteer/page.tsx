import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import VolunteerForm from "@/components/sections/volunteer-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Volunteer | The Covalent Project",
    description: "Join our team and help make scientific research accessible to everyone",
}

export default function VolunteerPage() {
    return (
        <main className="flex items-center justify-center min-h-screen py-12 px-4 md:py-16 lg:py-24">
            <div className="container">
            {/* Hero Section */}
            <section className="mb-16 md:mb-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-2">Get Involved</h1>
                    <p className="text-3xl font-semibold text-primary mb-6">Join the team</p>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Help us make scientific research accessible to everyone. Whether you&#39;re a student, researcher, or science
                        enthusiast, there&#39;s a place for you in The Covalent Project community.
                    </p>
                </div>
            </section>

            {/* Volunteer Opportunities */}
            <section className="mb-16">
                <Tabs defaultValue="walkthroughs" className="w-full">
                    <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                        <TabsTrigger value="walkthroughs">Write Walkthroughs</TabsTrigger>
                        <TabsTrigger value="translate">Translate Research</TabsTrigger>
                        <TabsTrigger value="donate">Donate & Sponsor</TabsTrigger>
                    </TabsList>

                    <TabsContent value="walkthroughs">
                        <Card>
                            <CardHeader>
                                <CardTitle>Help Write Walkthroughs</CardTitle>
                                <CardDescription>
                                    Create step-by-step guides to help students understand complex scientific concepts
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-4">
                                        <p>
                                            Our walkthroughs break down complex research papers and scientific concepts into clear,
                                            understandable steps. As a walkthrough writer, you&#39;ll help students and emerging researchers
                                            navigate the world of scientific literature.
                                        </p>
                                        <h3 className="text-lg font-semibold">What you&#39;ll do:</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Create clear, step-by-step explanations of scientific concepts</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Break down research methodologies into understandable components</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Develop visual aids and examples to illustrate complex ideas</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Collaborate with researchers to ensure accuracy</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative h-64 rounded-lg overflow-hidden">
                                        <Image
                                            src="/volunteer/writing.png"
                                            alt="Person writing a scientific walkthrough"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="translate">
                        <Card>
                            <CardHeader>
                                <CardTitle>Translate Research into Accessible Summaries</CardTitle>
                                <CardDescription>
                                    Help make cutting-edge research understandable to students and the general public
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-4">
                                        <p>
                                            Scientific papers are often written in technical language that can be difficult for students and
                                            the general public to understand. As a research translator, you&#39;ll help bridge this gap by
                                            creating accessible summaries of important scientific work.
                                        </p>
                                        <h3 className="text-lg font-semibold">What you&#39;ll do:</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Transform technical papers into clear, engaging summaries</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Highlight key findings and their real-world implications</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Create analogies and examples to explain complex concepts</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Work with subject matter experts to ensure accuracy</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative h-64 rounded-lg overflow-hidden">
                                        <Image
                                            src="/volunteer/translate.png"
                                            alt="Person translating research into accessible language"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="donate">
                        <Card>
                            <CardHeader>
                                <CardTitle>Donation & Sponsorship Options</CardTitle>
                                <CardDescription>
                                    Support our mission financially to help us reach more students and researchers
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-4">
                                        <p>
                                            The Covalent Project is a nonprofit organization that relies on donations and sponsorships to fund
                                            our programs. Your financial support helps us provide resources, mentorship, and opportunities to
                                            emerging researchers.
                                        </p>
                                        <h3 className="text-lg font-semibold">Ways to contribute:</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>One-time donations to support specific initiatives</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Monthly giving to provide sustained support</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>Corporate sponsorships for events and programs</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span>In-kind donations of equipment or services</span>
                                            </li>
                                        </ul>
                                        <Link href="/donate">
                                            <Button className="w-full">
                                                Donate
                                            </Button>
                                        </Link>

                                        <p className="text-sm text-muted-foreground mt-4">
                                            The Covalent Project is fiscally sponsored by Hack+, a 501(c)(3) nonprofit organization. All
                                            donations are tax-deductible to the extent allowed by law.
                                        </p>
                                    </div>
                                    <div className="relative h-64 rounded-lg overflow-hidden">
                                        <Image
                                            src="/volunteer/donating.jpg"
                                            alt="Students benefiting from donations"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>

            {/* Volunteer Form Section */}
            <section className="mb-16">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Ready to join us?</h2>
                        <p className="text-lg text-muted-foreground">
                            Fill out the form to let us know how you&#39;d like to contribute. We welcome volunteers from all backgrounds
                            and experience levels. Whether you have a few hours a week or want to take on a larger role, we&#39;d love to
                            have you on our team.
                        </p>
                        <div className="bg-muted/30 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
                            <ol className="space-y-3">
                                <li className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                    1
                  </span>
                                    <span>We&#39;ll review your application within 3-5 business days</span>
                                </li>
                                <li className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                    2
                  </span>
                                    <span>You&#39;ll receive an email with next steps and potential opportunities</span>
                                </li>
                                <li className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                    3
                  </span>
                                    <span>We&#39;ll schedule a brief orientation call to discuss your interests</span>
                                </li>
                                <li className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                    4
                  </span>
                                    <span>You&#39;ll be matched with a project based on your skills and interests</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Volunteer Application</CardTitle>
                                <CardDescription>Tell us about yourself and how you&#39;d like to contribute</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <VolunteerForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Hear from our volunteers</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-muted/30">
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <p className="italic">
                                    &#34;Volunteering with The Covalent Project has been incredibly rewarding. I&#39;ve been able to use my
                                    research experience to help students understand complex topics, and I&#39;ve learned so much in the
                                    process.&#34;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full overflow-hidden w-12 h-12 relative">
                                        <Image src="/placeholder.svg?height=100&width=100" alt="Volunteer" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Ru Jiang</p>
                                        <p className="text-sm text-muted-foreground">Research Translator, 2 years</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-muted/30">
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <p className="italic">
                                    &#34;Volunteering with The Covalent Project has been incredibly rewarding. I&#39;ve been able to use my
                                    research experience to help students understand complex topics, and I&#39;ve learned so much in the
                                    process.&#34;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full overflow-hidden w-12 h-12 relative">
                                        <Image src="/placeholder.svg?height=100&width=100" alt="Volunteer" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Ru Jiang</p>
                                        <p className="text-sm text-muted-foreground">Walkthrough Writer, 1 year</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-muted/30">
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <p className="italic">
                                    &#34;Volunteering with The Covalent Project has been incredibly rewarding. I&#39;ve been able to use my
                                    research experience to help students understand complex topics, and I&#39;ve learned so much in the
                                    process.&#34;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full overflow-hidden w-12 h-12 relative">
                                        <Image src="/placeholder.svg?height=100&width=100" alt="Sponsor" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Ru Jiang</p>
                                        <p className="text-sm text-muted-foreground">Corporate Sponsor, 3 years</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            </div>
        </main>
    )
}
