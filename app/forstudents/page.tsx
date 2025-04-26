import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
    ArrowRight,
    BookOpen,
    FileText,
    BarChart,
    FlaskConical,
    MessageSquare,
    Highlighter,
    HelpCircle,
    Lightbulb,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "For Students | How to Read a Research Paper",
    description: "Learn effective strategies for reading and understanding scientific research papers",
}

export default function ForStudentsPage() {
    return (
        <main className="flex items-center justify-center min-h-screen mt-16">
            <div className="container">
            {/* Hero Section */}
            <section className="mb-16 md:mb-20 py-10">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                        How to Read a Research Paper
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A step-by-step guide to help students navigate and understand scientific literature effectively.
                    </p>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link href="#step1">
                        <Card className="h-full hover:bg-muted/50 transition-colors">
                            <CardHeader className="p-4">
                                <CardTitle className="text-lg flex items-center">
                  <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    1
                  </span>
                                    Abstract
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link href="#step2">
                        <Card className="h-full hover:bg-muted/50 transition-colors">
                            <CardHeader className="p-4">
                                <CardTitle className="text-lg flex items-center">
                  <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    2
                  </span>
                                    Intro & Conclusion
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link href="#step3">
                        <Card className="h-full hover:bg-muted/50 transition-colors">
                            <CardHeader className="p-4">
                                <CardTitle className="text-lg flex items-center">
                  <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    3
                  </span>
                                    Figures & Tables
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link href="#step4">
                        <Card className="h-full hover:bg-muted/50 transition-colors">
                            <CardHeader className="p-4">
                                <CardTitle className="text-lg flex items-center">
                  <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    4
                  </span>
                                    Methods
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                </div>
            </section>

            {/* Step 1: Begin with the Abstract */}
            <section id="step1" className="mb-16 scroll-mt-16">
                <Card>
                    <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <BookOpen className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl">1. Begin with the Abstract</CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            The abstract is your first encounter with the paper—a concise snapshot of the study&#39;s question, methods,
                            and findings. It&#39;s essentially the paper&#39;s elevator pitch, designed to tell you whether the rest is worth
                            your time. A well-written abstract should make it clear if the paper is relevant to your interests. Focus
                            on the central question, the approach, and the headline result.
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                            <p className="font-medium italic">
                                Pro tip: If you&#39;re short on time, a good abstract can save you from diving into something that doesn&#39;t
                                quite fit your needs.
                            </p>
                        </div>
                        <div className="relative h-64 rounded-lg overflow-hidden mt-6">
                            <Image
                                src="/forstudents/reading.png"
                                alt="A researcher reading an abstract"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Step 2: Skim the Introduction and the Conclusion */}
            <section id="step2" className="mb-16 scroll-mt-16">
                <Card>
                    <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl">2. Skim the Introduction and the Conclusion</CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            The introduction is where you learn why the research matters. It outlines the background, the knowledge
                            gap, and what the authors hope to contribute. The conclusion, in turn, wraps things up: what was found,
                            why it&#39;s important, and what comes next. Read both sections to get a sense of the paper&#39;s big picture
                            before digging deeper.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="bg-muted/30 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Introduction</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Sets the context and background</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Identifies the knowledge gap</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>States the research question</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-muted/30 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Conclusion</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Summarizes key findings</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Explains significance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Suggests future research</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="italic mt-4">
                            Think of it like this: The introduction sets the stage. The conclusion tells you what the story means.
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Step 3: Look Closely at Figures and Tables */}
            <section id="step3" className="mb-16 scroll-mt-16">
                <Card>
                    <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <BarChart className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl">3. Look Closely at Figures and Tables</CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            Figures are often the most efficient way to understand a paper&#39;s results. A well-designed graph or table
                            reveals patterns, trends, or surprises faster than paragraphs of text. Study them carefully—notice the
                            axes, scales, and labels—and try to interpret the data before reading the authors&#39; analysis.
                        </p>
                        <div className="relative h-72 rounded-lg overflow-hidden my-6">
                            <Image
                                src="/forstudents/graphs.png"
                                alt="Example of research figures and tables"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                            <p className="font-medium">
                                Tip: Figures aren&#39;t just decorations. Their captions are summaries, guiding you through the data&#39;s key
                                points.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Step 4: Read the Methods — If You Need To */}
            <section id="step4" className="mb-16 scroll-mt-16">
                <Card>
                    <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FlaskConical className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl">4. Read the Methods — If You Need To</CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            The methods section is the blueprint for the study. It tells you how the research was conducted—what
                            tools, data, and processes were used. If you&#39;re evaluating the paper for its credibility or considering
                            replication, dig into this section. If you&#39;re just looking to understand the results, a quick scan will
                            usually suffice.
                        </p>
                        <div className="bg-muted/30 p-6 rounded-lg mt-4">
                            <h3 className="font-semibold text-lg mb-3">Focus on:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="bg-primary/20 p-1 rounded-full mt-0.5">
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </div>
                                    <span>Was the study design appropriate?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-primary/20 p-1 rounded-full mt-0.5">
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </div>
                                    <span>What tools or methods were used?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-primary/20 p-1 rounded-full mt-0.5">
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </div>
                                    <span>What potential biases might influence the results?</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Steps 5-8 */}
            <section className="mb-16">
                <Tabs defaultValue="step5" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                        <TabsTrigger value="step5">5. Results & Discussion</TabsTrigger>
                        <TabsTrigger value="step6">6. Take Notes</TabsTrigger>
                        <TabsTrigger value="step7">7. Ask Questions</TabsTrigger>
                        <TabsTrigger value="step8">8. Expert Tips</TabsTrigger>
                    </TabsList>

                    {/* Step 5 Content */}
                    <TabsContent value="step5">
                        <Card>
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <MessageSquare className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl">5. Engage with the Results and Discussion</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    This is the heart of the paper: the results tell you what was found, while the discussion explains its
                                    meaning. When reading these sections, ask yourself: Do the results support the authors&#39; conclusions?
                                    Are there alternative explanations they haven&#39;t considered? Be critical, but stay open to new ideas.
                                </p>
                                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                                    <p className="font-medium italic">
                                        Pro tip: Read with a discerning eye. The best research doesn&#39;t just present results—it connects them
                                        to the bigger picture.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Step 6 Content */}
                    <TabsContent value="step6">
                        <Card>
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Highlighter className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl">6. Take Notes. Highlight. Interact.</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    Reading is an active process. As you go, highlight key ideas, jot down questions, and make connections
                                    to other work. Try rephrasing complex ideas in your own words—it&#39;s a great test of understanding.
                                    These notes will be invaluable later when you need to recall, critique, or build on the paper&#39;s ideas.
                                </p>
                                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                                    <p className="font-medium italic">
                                        Bonus tip: A well-organized note-taking system will save you time later—whether you&#39;re writing a
                                        review or preparing a presentation.
                                    </p>
                                </div>
                                <div className="relative h-64 rounded-lg overflow-hidden mt-4">
                                    <Image
                                        src="/placeholder.svg?height=400&width=800"
                                        alt="Student taking notes while reading a paper"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Step 7 Content */}
                    <TabsContent value="step7">
                        <Card>
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <HelpCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl">7. Read with Questions in Mind</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">Don&#39;t just read to absorb information—read to understand it. Ask yourself:</p>
                                <div className="space-y-4 mb-6">
                                    <div className="bg-muted/30 p-4 rounded-lg">
                                        <p className="font-medium">What question is the paper trying to answer?</p>
                                    </div>
                                    <div className="bg-muted/30 p-4 rounded-lg">
                                        <p className="font-medium">How are the methods suited to answering it?</p>
                                    </div>
                                    <div className="bg-muted/30 p-4 rounded-lg">
                                        <p className="font-medium">Are the results convincing, or do they overstate the conclusions?</p>
                                    </div>
                                    <div className="bg-muted/30 p-4 rounded-lg">
                                        <p className="font-medium">What&#39;s missing or what would you have done differently?</p>
                                    </div>
                                </div>
                                <p>
                                    Critical reading isn&#39;t about skepticism—it&#39;s about engagement. The goal is to understand, assess, and
                                    think deeply about the paper.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Step 8 Content */}
                    <TabsContent value="step8">
                        <Card>
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Lightbulb className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl">8. Going Deeper: Expert-Level Tips for Advanced Reading</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-6">
                                    Once you&#39;ve mastered the basics, here are a few tips to take your paper-reading to the next level:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-muted/30 p-5 rounded-lg">
                                        <h3 className="font-semibold mb-2">Pay attention to citations</h3>
                                        <p className="text-sm">
                                            Look at the papers cited most often—they&#39;re usually foundational to the field and can guide your
                                            future reading.
                                        </p>
                                    </div>
                                    <div className="bg-muted/30 p-5 rounded-lg">
                                        <h3 className="font-semibold mb-2">Don&#39;t rely solely on prestige</h3>
                                        <p className="text-sm">
                                            While helpful, always evaluate the paper based on the strength of the argument and evidence, not
                                            just the journal or authors.
                                        </p>
                                    </div>
                                    <div className="bg-muted/30 p-5 rounded-lg">
                                        <h3 className="font-semibold mb-2">Explore references for more</h3>
                                        <p className="text-sm">
                                            Scan the reference list for related papers that could provide additional insight or counterpoints.
                                        </p>
                                    </div>
                                    <div className="bg-muted/30 p-5 rounded-lg">
                                        <h3 className="font-semibold mb-2">Check for supplementary materials</h3>
                                        <p className="text-sm">
                                            Many researchers share extra resources like data or code. These can clarify findings and give you
                                            a deeper understanding.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-muted/30 p-5 rounded-lg mt-4">
                                    <h3 className="font-semibold mb-2">Look at conceptual figures</h3>
                                    <p className="text-sm">
                                        Sometimes, figures explain the paper&#39;s ideas or methods better than the text. They&#39;re often key to
                                        grasping the core concepts quickly.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>

            {/* Call to Action */}
            <section className="mb-16">
                <Card className="bg-primary/5">
                    <CardContent className="pt-6 pb-6">
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl font-bold">Ready to Apply These Skills?</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Practice makes perfect. Try reading a research paper using these techniques and see how much more you
                                understand.
                            </p>
                            <div className="flex justify-center gap-4 pt-2">
                                <Button>Find Research Papers</Button>
                                <Button variant="outline">Join a Reading Group</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Additional Resources */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Video Tutorials</CardTitle>
                            <CardDescription>Visual guides to research paper reading</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span>How to Read a Scientific Paper</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span>Understanding Research Methods</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span>Critical Analysis Techniques</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recommended Books</CardTitle>
                            <CardDescription>Deepen your understanding</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span>How to Read a Book by Mortimer Adler</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span>They Say / I Say by Gerald Graff</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span>The Craft of Research by Booth et al.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Online Tools</CardTitle>
                            <CardDescription>Software to help you read and organize</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span>Zotero - Reference Manager</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span>Notion - Note Taking</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span>Connected Papers - Visual Discovery</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
            </div>
        </main>
    )
}
