import Image from "next/image"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
    title: "About | The Covalent Project",
    description: "Learn about The Covalent Project and our mission to transform scientific research",
}

export default function AboutPage() {
    return (
        <main className="flex items-center justify-center min-h-screen py-12 px-4 pt-16">
            <div className="container">
            {/* Hero Section */}
            <section className="mb-16 md:mb-24 py-10">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        About <span className="text-primary">The Covalent Project</span>
                    </h1>
                    <p className="mt-6 text-xl text-muted-foreground">
                        Transforming scientific research through community, mentorship, and accessible resources
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mb-16 md:mb-24">
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                        <p className="text-lg text-muted-foreground">
                            The Covalent Project is a student-led nonprofit dedicated to transforming scientific research by building
                            a thriving, inclusive community for new and independent researchers. We envision a world where innovative
                            science isn&#39;t limited by access to funding, supplies, or mentorship.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Through our platform, we create a support network that helps emerging scientists gain the resources and
                            guidance they need to pursue groundbreaking ideas outside of traditional academic and industry frameworks.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden h-[400px] relative">
                        <Image
                            src="/about/collaborate.jpg"
                            alt="Scientists collaborating"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="mb-16 md:mb-24">
                <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">What We Do</h2>
                <Tabs defaultValue="community" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="community">Community Platform</TabsTrigger>
                        <TabsTrigger value="funding">Funding Support</TabsTrigger>
                        <TabsTrigger value="events">Collaborative Events</TabsTrigger>
                    </TabsList>
                    <TabsContent value="community" className="p-6 bg-muted/30 rounded-lg mt-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Building Connections</h3>
                            <p>
                                Our community platform connects researchers with experienced experts for mentorship and advice,
                                fostering collaboration and reducing isolation. We create valuable ties with universities, research
                                labs, and other advanced facilities within the Bay Area.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="funding" className="p-6 bg-muted/30 rounded-lg mt-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Financial Resources</h3>
                            <p>
                                We offer grants and crowdfunding support to help independent scientists access essential materials and
                                equipment. Our goal is to provide unwavering financial support to any novice researcher with a
                                compelling idea that could propel the scientific community forward.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="events" className="p-6 bg-muted/30 rounded-lg mt-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Bringing People Together</h3>
                            <p>
                                As we grow, we host collaborative events to strengthen and promote the scientific community, starting in
                                the Bay Area. We provide support for the leaders of chapters through workshops, fundraising, and
                                connections with professionals.
                            </p>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>

            {/* Impact Section */}
            <section className="mb-16 md:mb-24 bg-muted/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">Our Impact</h2>
                <div className="mx-auto max-w-3xl">
                    <p className="text-lg mb-4">
                        We project our impact to spread through the entirety of the Bay Area, CA. By mainly reaching out to driven
                        high schoolers, we envision an organization with many chapters throughout the majority of the high schools
                        within the Bay Area.
                    </p>
                    <p className="text-lg mb-4">
                        As a parent organization facilitating clubs for different student bodies, we provide support for the leaders
                        of chapters of these different schools through workshops, fundraising, and connections with professionals.
                    </p>
                    <p className="text-lg">
                        The ripple effect of our outreach extends beyond high schools, creating valuable ties with universities,
                        research labs, and other advanced facilities within the Bay Area. Our ultimate objective is to provide
                        unwavering financial and professional support to any novice researcher with a compelling idea that could
                        propel the scientific community forward.
                    </p>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section>
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Meet Our Team</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Team Member 1 */}
                    <Card className="overflow-hidden">
                        <div className="aspect-square relative">
                            <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-1">Pranav Yerramaneni</h3>
                            <p className="text-sm text-muted-foreground mb-3">Founder</p>
                            <p className="text-sm">
                                Pranav is passionate about making scientific research accessible to everyone. With a background in
                                molecular biology and education, they founded The Covalent Project to bridge the gap between innovative
                                ideas and resources.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Team Member 2 */}
                    <Card className="overflow-hidden">
                        <div className="aspect-square relative">
                            <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-1">Samarth Suresh</h3>
                            <p className="text-sm text-muted-foreground mb-3">Founder</p>
                            <p className="text-sm">
                                Samarth is passionate about making scientific research accessible to everyone. With a background in
                                molecular biology and education, they founded The Covalent Project to bridge the gap between innovative
                                ideas and resources.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Team Member 3 */}
                    <Card className="overflow-hidden">
                        <div className="aspect-square relative">
                            <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-1">Eashan Wahi</h3>
                            <p className="text-sm text-muted-foreground mb-3">Founder</p>
                            <p className="text-sm">
                                Eashan is passionate about making scientific research accessible to everyone. With a background in
                                molecular biology and education, they founded The Covalent Project to bridge the gap between innovative
                                ideas and resources.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Team Member 4 */}
                    <Card className="overflow-hidden">
                        <div className="aspect-square relative">
                            <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-1">Mihir Vinnakota</h3>
                            <p className="text-sm text-muted-foreground mb-3">Founder</p>
                            <p className="text-sm">
                                Mihir is passionate about making scientific research accessible to everyone. With a background in
                                molecular biology and education, they founded The Covalent Project to bridge the gap between innovative
                                ideas and resources.
                            </p>
                        </CardContent>
                    </Card>

                    {/*/!* Team Member 5 *!/*/}
                    {/*<Card className="overflow-hidden">*/}
                    {/*    <div className="aspect-square relative">*/}
                    {/*        <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />*/}
                    {/*    </div>*/}
                    {/*    <CardContent className="p-6">*/}
                    {/*        <h3 className="text-xl font-bold mb-1">Casey Zhang</h3>*/}
                    {/*        <p className="text-sm text-muted-foreground mb-3">Events & Workshop Coordinator</p>*/}
                    {/*        <p className="text-sm">*/}
                    {/*            Casey plans and executes our collaborative events and workshops. Their experience in event management*/}
                    {/*            and scientific communication helps create engaging opportunities for our community to connect and learn.*/}
                    {/*        </p>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}

                    {/*/!* Team Member 6 *!/*/}
                    {/*<Card className="overflow-hidden">*/}
                    {/*    <div className="aspect-square relative">*/}
                    {/*        <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />*/}
                    {/*    </div>*/}
                    {/*    <CardContent className="p-6">*/}
                    {/*        <h3 className="text-xl font-bold mb-1">Riley Sanchez</h3>*/}
                    {/*        <p className="text-sm text-muted-foreground mb-3">Technology & Platform Lead</p>*/}
                    {/*        <p className="text-sm">*/}
                    {/*            Riley manages our digital platform and technological initiatives. Their expertise in web development and*/}
                    {/*            scientific data management helps us create effective tools for connecting and supporting our community.*/}
                    {/*        </p>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}
                </div>
            </section>
            </div>
        </main>
    )
}
